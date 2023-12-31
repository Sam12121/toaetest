ARG DF_IMG_TAG=latest
ARG IMAGE_REPOSITORY=toaeio
ARG VECTORSCAN_IMG_TAG=latest
ARG VECTORSCAN_IMAGE_REPOSITORY=toaeio

FROM $IMAGE_REPOSITORY/toae_secret_scanner_ce:$DF_IMG_TAG AS secret_build
FROM $IMAGE_REPOSITORY/toae_package_scanner_ce:$DF_IMG_TAG AS package_build
FROM $IMAGE_REPOSITORY/toae_malware_scanner_ce:$DF_IMG_TAG AS malware_build
FROM $IMAGE_REPOSITORY/toae_compliance_scanner_ce:$DF_IMG_TAG AS compliance_build
FROM $VECTORSCAN_IMAGE_REPOSITORY/toae_vectorscan_build:$VECTORSCAN_IMG_TAG AS vectorscan

FROM debian:bullseye-slim

MAINTAINER TOAE Security Inc
LABEL toae.role=system

ENV CHECKPOINT_DISABLE=true \
    DOCKERVERSION=24.0.2 \
    DF_TLS_ON="1" \
    MGMT_CONSOLE_PORT=443 \
    DF_KUBERNETES_ON="N" \
    MGMT_CONSOLE_URL_SCHEMA=https \
    TOAE_KEY="" \
    MGMT_CONSOLE_URL_INTERNAL=127.0.0.1 \
    MGMT_CONSOLE_PORT_INTERNAL=8081

RUN export LD_LIBRARY_PATH="/usr/local/lib:$LD_LIBRARY_PATH" \
    && mkdir -p /usr/share/man/man1 /usr/share/man/man2 /usr/share/man/man3 /usr/share/man/man4 /usr/share/man/man5 /usr/share/man/man6 /usr/share/man/man7 /usr/share/man/man8 \
    && echo "Installing some basic stuff"
RUN apt-get update && apt-get install -y --no-install-recommends libpcap0.8 gettext ca-certificates supervisor logrotate util-linux dnsutils net-tools cgroup-tools libcgroup1 libcap2 libaudit1 conntrack runit auditd apparmor gzip lsof file curl zip at gnupg  unzip procps cron sudo bzip2 libssl1.1 libevent-2.1-7 libevent-openssl-2.1-7 libevent-pthreads-2.1-7 libnet1 gnupg2 libfile-mimeinfo-perl libjansson4 libmagic1 wget bash python3-pip

ARG TARGETARCH

RUN <<EOF
set -eux

apt-get -y --allow-unauthenticated install skopeo podman
if [ "$TARGETARCH" = "arm64" ]; then
    ARCHITECTURE="aarch64"
elif [ "$TARGETARCH" = "amd64" ]; then
    ARCHITECTURE="x86_64"
else
    echo "Unsupported architecture $TARGETARCH" && exit 1;
fi

curl -fsSLO https://download.docker.com/linux/static/stable/${ARCHITECTURE}/docker-${DOCKERVERSION}.tgz
tar xzvf docker-${DOCKERVERSION}.tgz --strip 1 -C /usr/local/bin docker/docker
rm docker-${DOCKERVERSION}.tgz

mkdir -p /etc/license/ /usr/local/bin /usr/local/lib \
    /toaed /var/tmp/layers /usr/local/lua-waf /var/log/nginx/
chown root:root /toaed && chmod 0744 /toaed
mkdir /usr/local/bin/compliance_check && mkdir /usr/local/discovery

EOF

COPY --from=vectorscan /vectorscan.tar.bz2 /
RUN tar -xjf /vectorscan.tar.bz2 -C / && rm /vectorscan.tar.bz2

RUN mkdir -p /etc/td-agent-bit/
COPY tools/apache/fluentbit/* /etc/td-agent-bit/

# Copy fluentbit plugin
COPY plugins/fluent-bit/build/bin/fluent-bit /opt/td-agent-bit/bin/
COPY tools/apache/toae/df-utils/get_cloud_instance_id/getCloudInstanceId /usr/local/bin/getCloudInstanceId
COPY etc/fenced_logrotate.conf /etc/logrotate.d/fenced_logrotate.conf
COPY etc/certs/* /etc/filebeat/
COPY start_agent.sh /usr/local/bin/start_agent
COPY tools/apache/scope/docker/toae_exe /usr/local/discovery/toae-discovery
COPY plugins/compliance/scripts /usr/local/bin/compliance_check/scripts
COPY plugins/compliance/config.json /usr/local/bin/compliance_check/config.json
COPY supervisord.conf /home/toae/supervisord.conf
COPY run_discovery.sh /home/toae/
COPY plugins/etc/run_fluentbit.sh /home/toae/
COPY create_cgroups.sh /home/toae/create-cgroups.sh
RUN mkdir -p /home/toae/bin && mkdir -p /home/toae/bin/secret-scanner && mkdir -p /home/toae/bin/yara-hunter
COPY plugins/yara-rules /home/toae/bin/yara-hunter/yara-rules
COPY toaed /bin/toaed

COPY --from=secret_build /home/toae/usr/SecretScanner /home/toae/bin/secret-scanner
COPY --from=secret_build /home/toae/usr/config.yaml /home/toae/bin/secret-scanner
COPY --from=package_build /usr/local/bin/syft /usr/local/bin/syft
COPY --from=package_build /usr/local/bin/package-scanner /home/toae/bin
COPY --from=malware_build /usr/local/yara/lib /usr/lib
COPY --from=malware_build /home/toae/usr/YaraHunter /home/toae/bin/yara-hunter
COPY --from=malware_build /home/toae/usr/config.yaml /home/toae/bin/yara-hunter
COPY --from=compliance_build /usr/bin/compliance /usr/local/bin/compliance_check/compliance
COPY --from=compliance_build /usr/bin/compliance /home/toae/bin/compliance

RUN apt-get update --allow-insecure-repositories
RUN apt-get -qq -y --no-install-recommends install libjansson4 libssl1.1 libmagic1 bash curl python3-pip \
    && chmod 700 /usr/local/bin/getCloudInstanceId \
    && chmod 700 /usr/local/discovery/toae-discovery /home/toae/run_discovery.sh \
    && chmod +x /home/toae/*.sh \
    && chmod 600 /etc/td-agent-bit/* \
    && cd /tmp \
    && chmod +x /usr/local/bin/start_agent
RUN apt-get clean && apt-get -y autoremove && rm -rf /var/lib/apt/lists/*

RUN <<EOF
set -eux

vessel_version="0.12.0"
if [ "$TARGETARCH" = "arm64" ]; then
    ARCHITECTURE="arm64"
elif [ "$TARGETARCH" = "amd64" ]; then
    ARCHITECTURE="amd64"
else
    echo "Unsupported architecture $TARGETARCH" && exit 1
fi

curl -fsSLO https://github.com/Sam12121/vessel/releases/download/v${vessel_version}/vessel_v${vessel_version}_linux_${ARCHITECTURE}.tar.gz
tar -xzf vessel_v${vessel_version}_linux_${ARCHITECTURE}.tar.gz
mv vessel /usr/local/bin/
rm -rf vessel_v${vessel_version}_linux_${ARCHITECTURE}.tar.gz

EOF

RUN <<EOF
set -eux

nerdctl_version="1.6.0"
if [ "$TARGETARCH" = "arm64" ]; then
    ARCHITECTURE="arm64"
elif [ "$TARGETARCH" = "amd64" ]; then
    ARCHITECTURE="amd64"
else
    echo "Unsupported architecture $TARGETARCH" && exit 1
fi

curl -fsSLO https://github.com/containerd/nerdctl/releases/download/v${nerdctl_version}/nerdctl-${nerdctl_version}-linux-${ARCHITECTURE}.tar.gz
tar Cxzvvf /usr/local/bin nerdctl-${nerdctl_version}-linux-${ARCHITECTURE}.tar.gz
rm nerdctl-${nerdctl_version}-linux-${ARCHITECTURE}.tar.gz

EOF

RUN <<EOF
set -eux

crictl_version="v1.28.0"
if [ "$TARGETARCH" = "arm64" ]; then
    ARCHITECTURE="arm64"
elif [ "$TARGETARCH" = "amd64" ]; then
    ARCHITECTURE="amd64"
else
    echo "Unsupported architecture $TARGETARCH" && exit 1
fi

curl -fsSLO https://github.com/kubernetes-sigs/cri-tools/releases/download/${crictl_version}/crictl-${crictl_version}-linux-${ARCHITECTURE}.tar.gz
tar zxvf crictl-${crictl_version}-linux-${ARCHITECTURE}.tar.gz -C /usr/local/bin
rm -f crictl-${crictl_version}-linux-${ARCHITECTURE}.tar.gz

EOF

ENTRYPOINT ["/usr/local/bin/start_agent"]
