package ingesters

import (
	"context"
	"encoding/json"

	"github.com/Sam12121/toaetest/toae_utils/directory"
	"github.com/Sam12121/toaetest/toae_utils/log"
	"github.com/Sam12121/toaetest/toae_utils/utils"
	ingestersUtil "github.com/Sam12121/toaetest/toae_utils/utils/ingesters"
	"github.com/twmb/franz-go/pkg/kgo"
)

type CloudComplianceIngester struct{}

func NewCloudComplianceIngester() KafkaIngester[[]ingestersUtil.CloudCompliance] {
	return &CloudComplianceIngester{}
}

func (tc *CloudComplianceIngester) Ingest(
	ctx context.Context,
	cs []ingestersUtil.CloudCompliance,
	ingestC chan *kgo.Record,
) error {

	tenantID, err := directory.ExtractNamespace(ctx)
	if err != nil {
		return err
	}

	rh := []kgo.RecordHeader{
		{Key: "namespace", Value: []byte(tenantID)},
	}

	for _, c := range cs {
		cb, err := json.Marshal(c)
		if err != nil {
			log.Error().Msg(err.Error())
		} else {
			ingestC <- &kgo.Record{
				Topic:   utils.CloudComplianceScan,
				Value:   cb,
				Headers: rh,
			}
		}
	}

	return nil
}

type CloudComplianceScanStatusIngester struct{}

func NewCloudComplianceScanStatusIngester() KafkaIngester[[]ingestersUtil.CloudComplianceScanStatus] {
	return &CloudComplianceScanStatusIngester{}
}

func (tc *CloudComplianceScanStatusIngester) Ingest(
	ctx context.Context,
	cs []ingestersUtil.CloudComplianceScanStatus,
	ingestC chan *kgo.Record,
) error {

	tenantID, err := directory.ExtractNamespace(ctx)
	if err != nil {
		return err
	}

	rh := []kgo.RecordHeader{
		{Key: "namespace", Value: []byte(tenantID)},
	}

	for _, c := range cs {
		cb, err := json.Marshal(c)
		if err != nil {
			log.Error().Msg(err.Error())
		} else {
			ingestC <- &kgo.Record{
				Topic:   utils.CloudComplianceScanStatus,
				Value:   cb,
				Headers: rh,
			}
		}
	}

	return nil

}
