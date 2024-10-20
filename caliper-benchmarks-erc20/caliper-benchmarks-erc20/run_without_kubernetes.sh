npx caliper bind --caliper-bind-sut besu:latest
#npx caliper launch manager --caliper-benchconfig benchmarks/scenario/simple/config.yaml --caliper-networkconfig networks/networkconfig.json --caliper-workspace .
# Dont forget to portforward rpc-url:8546
npx caliper launch manager --caliper-workspace . --caliper-benchconfig benchmarks/scenario/simple/config.yaml --caliper-networkconfig networks/networkconfig.json --caliper-flow-only-test=true
