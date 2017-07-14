import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './UcWpPolicyWheel.module.scss';
import * as strings from 'ucWpPolicyWheelStrings';
import { IUcWpPolicyWheelWebPartProps } from './IUcWpPolicyWheelWebPartProps';

//const policywheel: any = require('./assets/policywheel2_6_58.jpg');
//<img id="PolicyWheel" alt="policywheel2_6_58.jpg" src="${require<string>('./assets/policywheel2_6_58.jpg')}" border="0" usemap="#nav2" style="margin: 5px;">

export default class UcWpPolicyWheelWebPart extends BaseClientSideWebPart<IUcWpPolicyWheelWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = "${escape(this.properties.description)}";
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('HtmlContent', {
                  label: strings.HtmlContentFieldLabel,
                  multiline: true
                })
              ]
            }
          ]
        }
      ]
    };
  }

  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }
}
