import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import { IUcWpPolicyWheelWebPartProps } from './IUcWpPolicyWheelWebPartProps';
export default class UcWpPolicyWheelWebPart extends BaseClientSideWebPart<IUcWpPolicyWheelWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    protected readonly disableReactivePropertyChanges: boolean;
}
