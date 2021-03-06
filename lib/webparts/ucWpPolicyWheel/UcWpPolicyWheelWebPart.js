"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var strings = require("ucWpPolicyWheelStrings");
//const policywheel: any = require('./assets/policywheel2_6_58.jpg');
//<img id="PolicyWheel" alt="policywheel2_6_58.jpg" src="${require<string>('./assets/policywheel2_6_58.jpg')}" border="0" usemap="#nav2" style="margin: 5px;">
var UcWpPolicyWheelWebPart = (function (_super) {
    __extends(UcWpPolicyWheelWebPart, _super);
    function UcWpPolicyWheelWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UcWpPolicyWheelWebPart.prototype.render = function () {
        this.domElement.innerHTML = "${escape(this.properties.description)}";
    };
    Object.defineProperty(UcWpPolicyWheelWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    UcWpPolicyWheelWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('HtmlContent', {
                                    label: strings.HtmlContentFieldLabel,
                                    multiline: true
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    Object.defineProperty(UcWpPolicyWheelWebPart.prototype, "disableReactivePropertyChanges", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return UcWpPolicyWheelWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = UcWpPolicyWheelWebPart;

//# sourceMappingURL=UcWpPolicyWheelWebPart.js.map
