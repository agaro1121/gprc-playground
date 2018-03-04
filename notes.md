`npm install -g grpc-tools`
`protoc --js_out=import_style=commonjs,binary:. pb/messages.proto --grpc_out=. --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin``