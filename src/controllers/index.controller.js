import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';


var packageDefinition = protoLoader.loadSync('./src/protobuf/monedas.proto');
var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
var router = protoDescriptor.monedas;
var client = new router.PreciosMonedas('localhost:8080', grpc.credentials.createInsecure());

export default client;


