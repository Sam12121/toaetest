module github.com/Sam12121/toae_installer

go 1.20

replace github.com/Sam12121/golang_toae_sdk/utils => ../golang_toae_sdk/utils

replace github.com/Sam12121/toaetest/toae_utils => ../toae_utils

replace github.com/Sam12121/golang_toae_sdk/client => ../golang_toae_sdk/client

require (
	github.com/Sam12121/toaetest/toae_utils v0.0.0-00010101000000-000000000000
	github.com/Sam12121/golang_toae_sdk/utils v0.0.0-00010101000000-000000000000
)

require (
	github.com/Sam12121/golang_toae_sdk/client v0.0.0-00010101000000-000000000000 // indirect
	github.com/hashicorp/go-cleanhttp v0.5.2 // indirect
	github.com/hashicorp/go-retryablehttp v0.7.5 // indirect
	github.com/mattn/go-colorable v0.1.12 // indirect
	github.com/mattn/go-isatty v0.0.14 // indirect
	github.com/rs/zerolog v1.30.0 // indirect
	golang.org/x/sys v0.12.0 // indirect
)
