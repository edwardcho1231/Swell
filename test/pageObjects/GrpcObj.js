const app = require('../testApp.js');

class GrpcObj {
  // opens up tabs for selecting network types
  get selectedNetwork() {
    return app.client.$('#selected-network')
  }
  // selects gRPC option from opened network tab
  get gRPCNetwork() {
    return app.client.$('a=gRPC')
  }
  // selects url box
  get url() { 
    return app.client.$('.input-is-medium');
  };
  // selects codemirror text field for loading protofile
  get grpcProto() {
    const codeMirror = app.client.$('#grpcProtoEntryTextArea');
    codeMirror.click();
    return codeMirror.$("textarea")
  }
  // selects button for saving proto file
  get saveChanges() {
    return app.client.$('#save-proto')
  }
  // selects button for selecting service 
  get openSelectServiceDropdown() {
    return app.client.$('#Select-Service-button')
  }
  // selects button for selecting greeter service 
  get selectServiceGreeter() {
    return app.client.$('a=Greeter')
  }
  // selects button for selecting request 
  get openRequestDropdown() {
    return app.client.$('#Select-Request-button')
  }
  // selects button for selecting SayHello request
  get selectRequestSayHelloFromDropDown() {
    return app.client.$('a=SayHello')
  }
  // selects button for opening dropdown for request after running SayHello
  get selectRequestSayHello() {
    return app.client.$('#SayHello-button')
  }
  // selects button for selecting SayHelloNested request
  get selectRequestSayHelloNestedFromDropDown() {
    return app.client.$('a=SayHelloNested')
  }
  // selects button for opening dropdown for request after running SayHelloNested
  get selectRequestSayHelloNested() {
    return app.client.$('#SayHelloNested-button')
  }
  // selects button for selecting SayHellosSs request
  get selectRequestSayHellosSsFromDropDown() {
    return app.client.$('a=SayHellosSs')
  }
  // selects button for opening dropdown for request after running SayHelloSs
  get selectRequestSayHellosSs() {
    return app.client.$('#SayHellosSs-button')
  }
  // selects button for selecting SayHelloCs request
  get selectRequestSayHelloCSFromDropDown() {
    return app.client.$('a=SayHelloCS')
  }
  // selects button for opening dropdown for request after running SayHelloCs
  get selectRequestSayHelloCS() {
    return app.client.$('#SayHelloCS-button')
  }
  // selects button for selecting SayHelloBidi request
  get selectRequestBidiFromDropDown() {
    return app.client.$('a=SayHelloBidi')
  }
  // selects codemirror text field for displaying response
  get jsonPretty() {
		return app.client.$('#events-display')
	}
  // selects button for adding request to workspace pane
  get addRequestBtn(){
    return app.client.$('button=Add New Request')
  }
  // selects button for sending request
  get sendBtn() {
		return app.client.$('button=Send')
  }
  // selects button for removing single request from workspace pane
  get removeBtn() {
    return app.client.$('button=Remove')
  }
}; 

module.exports = new GrpcObj(); 