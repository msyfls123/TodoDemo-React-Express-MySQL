webpackJsonp([1],[function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _getPrototypeOf=__webpack_require__(1),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__(27),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(28),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__(32),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__(79),_inherits3=_interopRequireDefault(_inherits2),_react=__webpack_require__(87),_react2=_interopRequireDefault(_react),_reactDom=__webpack_require__(116),root=document.getElementById("app"),Root=function(_Component){function Root(props){(0,_classCallCheck3["default"])(this,Root);var _this2=(0,_possibleConstructorReturn3["default"])(this,(0,_getPrototypeOf2["default"])(Root).call(this,props));return _this2.handleChange=_this2.handleChange.bind(_this2),_this2.state={data:[]},_this2}return(0,_inherits3["default"])(Root,_Component),(0,_createClass3["default"])(Root,[{key:"render",value:function(){var child=this.state.data.map(function(d){return _react2["default"].createElement("div",{className:"col-sm-6 col-md-4"},_react2["default"].createElement("div",{className:"thumbnail"},_react2["default"].createElement("img",{src:d.img?d.img:"http://ugc.qpic.cn/baikepic2/0/ori-20160729074059-1586278401.jpg/800",alt:"..."}),_react2["default"].createElement("div",{className:"caption"},_react2["default"].createElement("h3",null,d.name?d.name:"No Picture Selected"),_react2["default"].createElement("p",{dangerouslySetInnerHTML:{__html:d.desc?d.desc:"No Description"}}))))});return _react2["default"].createElement("div",null,_react2["default"].createElement("h1",{className:"col-md-12"},"A Form"),child,_react2["default"].createElement("form",{className:"col-md-12",action:"/api/upimg",method:"post",encType:"multipart/form-data"},_react2["default"].createElement("div",{className:"input-group"},_react2["default"].createElement("label",{htmlFor:"file"},"Choose File"),_react2["default"].createElement("input",{type:"file",className:"form-control",id:"file",name:"files",multiple:!0,accept:"image/*",onChange:this.handleChange})),_react2["default"].createElement("div",{className:"input-group"},_react2["default"].createElement("label",null," "),_react2["default"].createElement("button",{type:"submit",className:"btn btn-primary btn-block"},_react2["default"].createElement("span",{className:"glyphicon glyphicon-pencil"}),"  Confirm"))))}},{key:"handleChange",value:function(e){for(var f,files=e.target.files,output=[],num=files.length,_this=this,i=0;f=files[i];i++)!function(f,i){var desc="<strong>"+escape(f.name)+"</strong> ("+(f.type||"n/a")+") - "+f.size+" bytes, last modified: "+f.lastModifiedDate.toLocaleDateString(),name=f.name,reader=new FileReader,img=null;reader.onload=function(e){img=this.result},reader.onloadend=function(e){output.push({name:name,img:img,desc:desc}),output.length==num&&_this.setState({data:output})},reader.readAsDataURL(f)}(f,i)}}]),Root}(_react.Component);(0,_reactDom.render)(_react2["default"].createElement(Root,null),root)}]);