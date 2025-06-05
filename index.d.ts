export declare class FhireDataLoader {
    private _timeout;
    constructor();
    load(url: string): Promise<string>;
    private fetchWithTimeout;
}


export { ISignatureData, ISignaturePointData, SignatureInputType, CsvTools } from '@medidok/signature-lib';
export { IGdtPredicatePart } from '@medidok/acrofield-codec';
export { IFhirAcrofieldCode } from './fhir-extensions/fhir-acrofield-name/IFhirAcrofieldCode';
export { FhirAcrofieldCode } from './fhir-extensions/fhir-acrofield-name/FhirAcrofieldCode';
export { XmlTools } from './fhir-extensions-manager/XmlTools';
export { Base64UnicodeCodec } from './ts/core/Base64UnicodeCodec';
export { IFhirAnswerOption } from './ts/fhir-form/model/IFhirAnswerOption';
export { IFhirChoiceItem } from './ts/fhir-form/model/IFhirChoiceItem';
export { AbstractFhirItemWidget } from './ts/fhir-form/AbstractFhirItemWidget';
export { IFhirFormResponse } from './ts/fhir-form/model/IFhirFormResponse';
export { IFhirBaseItemResponse } from './ts/fhir-form/model/IFhirBaseItemResponse';
export { FhirStatusCode } from './ts/fhir-form/model/FhirStatusCode';
export { IFhirFillStatus } from './ts/fhir-form/model/IFhirFillStatus';
export { IFhirGroupItemResponse } from './ts/fhir-form/model/IFhirGroupItemResponse';
export { FhirquestionnariesLogLevel, LogAsBodyEvent } from './ts/fhir-form/logger/LogAsBodyEvent';
export { DateItemDisplay } from './fhir-extensions/fhir-acrofield-name/FhirAcrofieldNameExtension';
export { FhirFormObserver } from './ts/services/FhirFormObserver';
export { PagingControlerType } from './ts/services/paging/PagingControlerType';
export { FhirFormEvent } from './ts/fhir-form/FhirFormEvent';
export { FhirFormWidgetIdChangeEvent } from './ts/fhir-form/FhirFormWidgetIdChangeEvent';
export { FhirFormDocumentVariablesChangeEvent } from './ts/fhir-form/FhirFormDocumentVariablesChangeEvent';
export { FormWidgetStateChangeErrorEvent } from './ts/fhir-form/FormWidgetStateChangeErrorEvent';
export { AmbiguousDocumentVariableNameEvent } from './ts/fhir-form/AmbiguousDocumentVariableNameEvent';
export { FhirFormLoadingErrorEvent } from './ts/fhir-form/FhirFormLoadingErrorEvent';
export { FhirFormGeneralErrorEvent } from './ts/fhir-form/FhirFormGeneralErrorEvent';
export { VariableCrossReferenceEvent } from './ts/fhir-form/VariableCrossReferenceEvent';
export { FhirFilloutReportList } from './ts/fhir-form/model/FhirFilloutReportList';
export { IFhirFilloutReport } from './ts/fhir-form/model/IFhirFilloutReport';
export { IItemResponseTemplateMap } from './ts/fhir-form/IItemResponseTemplateMap';
export { IFhirItemExtension } from './ts/fhir-form/model/IFhirItemExtension';
export { GenericGroupItemWidget } from './ts/fhir-form/widgets/GenericGroupItemWidget';
export { GroupItemWidget } from './ts/fhir-form/widgets/GroupItemWidget';
export { GenericItemWidget } from './ts/fhir-form/widgets/GenericItemWidget';
export { BooleanItemWidget } from './ts/fhir-form/widgets/BooleanItemWidget';
export { ChoiceItemWidget } from './ts/fhir-form/widgets/ChoiceItemWidget';
export { DateItemWidget } from './ts/fhir-form/widgets/DateItemWidget';
export { DecimalItemWidget } from './ts/fhir-form/widgets/DecimalItemWidget';
export { IntegerItemWidget } from './ts/fhir-form/widgets/IntegerItemWidget';
export { OpenChoiceItemWidget } from './ts/fhir-form/widgets/OpenChoiceItemWidget';
export { StringItemWidget } from './ts/fhir-form/widgets/StringItemWidget';
export { TextItemWidget } from './ts/fhir-form/widgets/TextItemWidget';
export { AnswerOptionItemWidget } from './ts/fhir-form/widgets/AnswerOptionItemWidget';
export { AnswerOptionTextItemWidget } from './ts/fhir-form/widgets/AnswerOptionTextItemWidget';
export { DisplayItemWidget } from './ts/fhir-form/widgets/DisplayItemWidget';
export { AttachmentItemWidget } from './ts/fhir-form/widgets/AttachmentItemWidget';
export { SignatureItemWidget } from './ts/fhir-form/widgets/SignatureItemWidget';
export { AnyFormItemType } from './ts/fhir-form/model/AnyFormItemType';
export { FhirFormWidget } from './ts/fhir-form/FhirFormWidget';
export { FhirFormWidgetState } from './ts/fhir-form/FhirFormWidgetState';
export { FhirItemTags } from './ts/fhir-form/FhirItemWidgetConstants';
export { FhirFormBannerWidget } from './ts/fhir-form/widgets/FhirFormBannerWidget';
export { TooltipControler } from './ts/fhir-form/TooltipControler';
export { FhirPageNavigationPanel } from './ts/fhir-form/widgets/FhirPageNavigationPanel';
export { IFhirFormWidgetEventsMap } from './ts/fhir-form/IFhirFormWidgetEventsMap';
export { FhirFormWidgetEventName } from './ts/fhir-form/FhirFormWidgetEventName';
export { FhirChoiceItem } from './ts/fhir-form/model/FhirChoiceItem';
export { FhirGroupItem } from './ts/fhir-form/model/FhirGroupItem';
export { FhirItem } from './ts/fhir-form/model/FhirItem';
export { FhirAnswerOption } from './ts/fhir-form/model/FhirAnswerOption';
export { IFhirItem } from './ts/fhir-form/model/IFhirItem';
export { LogMode } from './ts/fhir-form/logger/LogMode';
export { LogLevel } from './ts/fhir-form/logger/ApplicationLogger';
export { Log } from './ts/fhir-form/logger/Logger';
export { LocaleService } from './ts/fhir-form/locale/LocaleService';
export { DefaultLocaleProvider } from './ts/fhir-form/locale/DefaultLocaleProvider';
export { LocaleCommonKey } from './ts/fhir-form/locale/LocaleCommonKey';
export { ILocaleCommons } from './ts/fhir-form/locale/ILocaleCommons';
export { LocaleDictionaryType } from './ts/fhir-form/locale/LocaleDictionaryType';
export { IMedidokFhirExtension } from './fhir-extensions-manager/IMedidokFhirExtension';
export { FhirExtensionManager } from './fhir-extensions-manager/FhirExtensionManager';
export { FhirExtensionEvent } from './fhir-extensions-manager/FhirExtensionEvent';
export { FhirExtensionEventName } from './fhir-extensions-manager/FhirExtensionEventName';
export { EntryFormat } from './fhir-extensions/fhir-entry-format/EntryFormat';
export { FhirGdtExtension } from './fhir-extensions/fhir-gdt-extension/FhirGdtExtension';
export { QuestionnaireErlaeuterung } from './fhir-extensions/fhir-question-erlaeuterung/QuestionnaireErlaeuterung';
export { QuestionnaireItemControl } from './fhir-extensions/questionnaire-itemControl/QuestionnaireItemControl';
export { QuestionnaireOptionExclusive } from './fhir-extensions/questionnaire-optionExclusive/QuestionnaireOptionExclusive';
export { RenderingXhtml } from './fhir-extensions/rendering-xhtml/RenderingXhtml';
export { SdcQuestionnaireEnableWhenExpression } from './fhir-extensions/sdc-questionnaire-enableWhenExpression/SdcQuestionnaireEnableWhenExpression';
export { SdcQuestionnaireOpenLabel } from './fhir-extensions/sdc-questionnaire-openLabel/SdcQuestionnaireOpenLabel';
export { FhirItemTypeName } from './ts/fhir-form/model/FhirItemTypeName';
export { IFhirClause } from './ts/fhir-form/model/IFhirClause';
export { IFhirCoding } from './ts/fhir-form/model/IFhirCoding';
export { IFhirItemTypeNamesMap } from './ts/fhir-form/model/IFhirItemTypeNamesMap';
export { FhirClauseOperator } from './ts/fhir-form/model/FhirClauseOperator';
export { IFhirClauseValue } from './ts/fhir-form/model/IFhirClauseValue';
export { QuestionnaireSignatureRequired } from './fhir-extensions/questionnaire-signatureRequired/QuestionnaireSignatureRequired';
export { FhirAcrofieldNameExtension } from './fhir-extensions/fhir-acrofield-name/FhirAcrofieldNameExtension';
export { IVariableReference } from './ts/fhir-form/IVariableReference';
export { ISerializableSignatureData } from './ts/core/ISerializableSignatureData';

export declare abstract class BaseMedidokFhirExtension implements IMedidokFhirExtension {
    protected _xml: Document;
    protected _isValid: boolean;
    private _valueString?;
    private _valueBoolean?;
    private _valueInteger?;
    private _valueDecimal?;
    private _documentGlobalVariables?;
    constructor(xmlTemplate: string);
    abstract get configuration(): IFhirExtensionConfiguration;
    abstract allowedForItems: string[];
    get documentGlobalVariables(): VariableDictionary | undefined;
    set documentGlobalVariables(value: VariableDictionary | undefined);
    get valueString(): string | undefined;
    set valueString(value: string | undefined);
    get valueBoolean(): boolean | undefined;
    set valueBoolean(value: boolean | undefined);
    get valueInteger(): number | undefined;
    set valueInteger(value: number | undefined);
    get valueDecimal(): number | undefined;
    set valueDecimal(value: number | undefined);
    get extensionName(): string;
    get xmlns(): string;
    get extensionUrl(): string;
    get isValid(): boolean;
    set isValid(value: boolean);
    abstract configure(configuration: IFhirExtensionConfiguration, contextItem: FhirFormWidget | AnyFormItemType): boolean;
    abstract jsonToConfiguration(fhirItem: IFhirItemExtension): IFhirExtensionConfiguration;
    initialize(jsonObject: IFhirItemExtension, contextItem: FhirFormWidget | AnyFormItemType): boolean;
    detach(contextItem: FhirFormWidget | AnyFormItemType): void;
    applyToQuestionnaireWidget(formWidget: FhirFormWidget): void;
    applyToItemElement(itemWidget: AnyFormItemType): void;
    toXmlString(): string;
    toXmlDocument(): Document;
    toJsonObject(): IFhirItemExtension;
    transformResponse(fhirItem: AnyFormItemType, fhirResponse: IFhirBaseItemResponse): IExtensionTransformResult | undefined;
    prepareForResponse(fhirForm: FhirFormWidget): void;
    updateDocumentVariables(itemWidget: AnyFormItemType, variablesDictionary: VariableDictionary): VariableDictionary;
    protected get baseConfiguration(): IFhirExtensionConfiguration;
}

export interface IFhirExtensionConfiguration {
    valueString?: string;
    valueBoolean?: boolean;
    valueInteger?: number;
    valueDecimal?: number;
}

export declare class EformsAcroFormExtension extends BaseMedidokFhirExtension {
    constructor();
    get allowedForItems(): string[];
    get configuration(): IFhirExtensionConfiguration;
    get valueBoolean(): boolean | undefined;
    set valueBoolean(value: boolean | undefined);
    configure(configuration: IFhirExtensionConfiguration, contextItem: FhirFormWidget | AnyFormItemType): boolean;
    initialize(jsonObject: IFhirItemExtension, contextItem: FhirFormWidget | AnyFormItemType): boolean;
    jsonToConfiguration(fhirItem: IFhirItemExtension): IFhirExtensionConfiguration;
    applyToQuestionnaireWidget(formWidget: FhirFormWidget): void;
    applyToItemElement(itemWidget: AnyFormItemType): void;
    transformResponse(fhirItem: FhirFormWidget | AnyFormItemType, fhirResponse: IFhirBaseItemResponse): IExtensionTransformResult | undefined;
    prepareForResponse(fhirForm: FhirFormWidget): void;
    private findAcroWidgets;
    private createAcroInfoReference;
}

export declare class FhirAcrofieldCode implements IFhirAcrofieldCode {
    static parse(acrofieldCodeString: string | undefined): IFhirAcrofieldCode;
    acrofieldName: string;
    valueWhenChecked?: Record<string, string>;
    ignoreFieldInReportWhenNoOutSection?: boolean;
    useFieldContentAsDefaultOut?: boolean;
    toString(): string;
}

export declare enum DateItemDisplay {
    CALENDAR = "DW",
    SPINNER = "D"
}
export declare class FhirAcrofieldNameExtension extends BaseMedidokFhirExtension {
    private readonly GDT_FIELD_NAME;
    static toAcrofieldInfo(widget: AnyFormItemType): IAcrofieldInfo | undefined;
    constructor();
    get allowedForItems(): string[];
    get codingSystem(): string;
    get acrofieldName(): string;
    get ignoreFieldInReportWhenNoOutSection(): boolean | undefined;
    get useFieldContentAsDefaultOut(): boolean | undefined;
    get description(): string;
    set description(value: string);
    get variableName(): string;
    get acrofieldType(): AcrofieldType | undefined;
    get valueWhenChecked(): Record<string, string> | undefined;
    get configuration(): IFhirAcrofieldExtensionConfiguration;
    configure(configuration: IFhirAcrofieldExtensionConfiguration, contextItem: AnyFormItemType): boolean;
    jsonToConfiguration(fhirItem: IFhirItemExtension): IFhirAcrofieldExtensionConfiguration;
    detach(contextItem: FhirFormWidget | AnyFormItemType): void;
    extendWithExtension(extension: IFhirItemExtension, configuration: IFhirExtensionConfiguration): IFhirExtensionConfiguration;
    initialize(jsonObject: IFhirItemExtension, contextItem: AnyFormItemType): boolean;
    applyToItemElement(itemWidget: AnyFormItemType): void;
    applyToQuestionnaireWidget(formWidget: FhirFormWidget): void;
    toXmlString(): string;
    toXmlDocument(): Document;
    toJsonObject(): IFhirItemExtension;
    updateDocumentVariables(itemWidget: AnyFormItemType, variablesDictionary: VariableDictionary): VariableDictionary;
    transformResponse(fhirItem: AnyFormItemType, fhirResponse: IFhirItemResponse): IExtensionTransformResult | undefined;
    private getContentValueOfBooleanWidget;
    private generateWellFormedName;
    private configurationToExtensionJson;
    private applyAnswerOptionValue;
    private applyChoiceValue;
    private applyBooleanValue;
    private applyIntegerValue;
    private applyDecimalValue;
    private applyDateValue;
    private applySimpleTextValue;
    private applyToUnhandledItem;
    private reset;
    private fitAcroType;
    private identifyMatchingAcroType;
    private set variableName(value);
    private set extensionCode(value);
    private get extensionCode();
}

export interface IFhirAcrofieldCode {
    acrofieldName: string;
    valueWhenChecked?: Record<string, string>;
    ignoreFieldInReportWhenNoOutSection?: boolean;
    useFieldContentAsDefaultOut?: boolean;
    toString(): string;
}

export interface IFhirAcrofieldExtensionConfiguration extends IFhirExtensionConfiguration {
    acrofieldType?: AcrofieldType;
    acrofieldName?: string;
    acroVariableName?: string;
    valueWhenChecked?: Record<string, string>;
    inSection?: string;
    outSection?: string;
    outEmptySection?: string;
    gdtPredicates?: IGdtPredicatePart[];
    ignoreFieldInReportWhenNoOutSection?: boolean;
    useFieldContentAsDefaultOut?: boolean;
}

export declare class EntryFormat extends BaseMedidokFhirExtension {
    readonly localeFormats: Record<string, Record<string, string>>;
    constructor();
    get allowedForItems(): string[];
    get isValid(): boolean;
    get extensionName(): string;
    get xmlns(): string;
    get extensionUrl(): string;
    get configuration(): IFhirExtensionConfiguration;
    get valueString(): string | undefined;
    set valueString(value: string | undefined);
    configure(configuration: IEntryFormatExtensionConfiguration, contextItem: AnyFormItemType): boolean;
    jsonToConfiguration(fhirItem: IFhirItemExtension): IFhirExtensionConfiguration;
    initialize(jsonObject: IFhirItemExtension, contextItem: AnyFormItemType): boolean;
    dispose(): void;
    applyToQuestionnaireData(formData: IFhirFormData): IFhirFormData;
    applyToQuestionnaireWidget(formWidget: FhirFormWidget): void;
    applyToItem(item: IFhirItem | IFhirAnswerOption): IFhirItem | IFhirAnswerOption;
    applyToItemElement(itemWidget: AbstractFhirItemWidget): void;
    findDateParts(locale: string, placeholders: string[]): string[];
    findDatePartsWithKeys(locale: string, placeholders: string[]): {};
    toXmlString(): string;
    toXmlDocument(): Document;
    toJsonObject(): IFhirItemExtension;
    parseXmlDocument(xml: Document): IMedidokFhirExtension | undefined;
    parseXmlString(xmlString: string): IMedidokFhirExtension | undefined;
    transformResponse(fhirItem: AnyFormItemType, fhirResponse: IFhirBaseItemResponse): IExtensionTransformResult | undefined;
    private createDateInputConfiguration;
}


export interface IEntryFormatExtensionConfiguration extends IFhirExtensionConfiguration {
    entryFormat: string;
}

export declare class FhirGdtExtension extends BaseMedidokFhirExtension {
    private readonly GDT_PART_SEPARATOR;
    private readonly GDT_KEY_VALUE_SEPARATOR;
    constructor();
    get allowedForItems(): string[];
    get codingSystem(): string;
    get gdtDataType(): FhirGdtExtensionDataType;
    set gdtDataType(value: FhirGdtExtensionDataType);
    get gdtCodes(): IGdtPredicatePart[];
    get description(): string;
    set description(value: string);
    get configuration(): IFhirGdtExtensionConfiguration;
    configure(configuration: IFhirGdtExtensionConfiguration, contextItem: AnyFormItemType): boolean;
    jsonToConfiguration(fhirItem: IFhirItemExtension): IFhirGdtExtensionConfiguration;
    initialize(jsonObject: IFhirItemExtension, contextItem: AnyFormItemType): boolean;
    dispose(): void;
    applyToItem(item: IFhirItem | IFhirAnswerOption): IFhirItem | IFhirAnswerOption;
    applyToItemElement(itemWidget: AnyFormItemType): void;
    applyToQuestionnaireData(formData: IFhirFormData): IFhirFormData;
    applyToQuestionnaireWidget(formWidget: FhirFormWidget): void;
    toXmlString(): string;
    toXmlDocument(): Document;
    toJsonObject(): IFhirItemExtension;
    parseXmlDocument(xml: Document): IMedidokFhirExtension | undefined;
    parseXmlString(xmlString: string): IMedidokFhirExtension | undefined;
    transformResponse(fhirItem: AnyFormItemType, fhirResponse: IFhirBaseItemResponse): IExtensionTransformResult | undefined;
    private configurationToExtensionJson;
    private parseGdtCodes;
    private stringifyGdtCodes;
    private set gdtCodes(value);
}

export type FhirGdtExtensionDataType = keyof IFhirGdtExtensionDataType;

export { IMedidokFhirExtension } from '../../fhir-extensions-manager/IMedidokFhirExtension';
export { FhirGdtExtension } from './FhirGdtExtension';

interface IItemResponseTransformer {
    transformResponse(gdtCodes: IGdtPredicatePart[], fhirItem: AnyFormItemType, fhirResponse: IFhirBaseItemResponse): IExtensionTransformResult | undefined;
}
export declare class GdtTransformerFactory {
    static createTransformer(itemTagName: string): IItemResponseTransformer | undefined;
}

export interface IFhirGdtExtensionConfiguration extends IFhirExtensionConfiguration {
    predicates: IGdtPredicatePart[];
}

export interface IFhirGdtExtensionData {
    url: string;
    valueBoolean: boolean;
    valueDecimal: number;
    valueInteger: number;
    valueString: string;
}

export interface IFhirGdtExtensionDataType {
    'undefined': string;
    'string': string;
    'boolean': string;
    'integer': string;
    'decimal': string;
}

export interface IQuestionnaireErlaeuterungConfiguration extends IFhirExtensionConfiguration {
    tooltipText: string;
}

export declare class QuestionnaireErlaeuterung extends BaseMedidokFhirExtension {
    constructor();
    get allowedForItems(): string[];
    get tooltipText(): string | undefined;
    set tooltipText(value: string | undefined);
    get configuration(): IFhirExtensionConfiguration;
    get valueString(): string | undefined;
    set valueString(value: string | undefined);
    configure(configuration: IFhirExtensionConfiguration, contextItem: AnyFormItemType): boolean;
    jsonToConfiguration(fhirItem: IFhirItemExtension): IFhirExtensionConfiguration;
    private configurationToExtensionJson;
    initialize(jsonObject: IFhirItemExtension, contextItem: AnyFormItemType): boolean;
    dispose(): void;
    applyToQuestionnaireData(formData: IFhirFormData): IFhirFormData;
    applyToQuestionnaireWidget(formWidget: FhirFormWidget): void;
    applyToItem(item: IFhirItem | IFhirAnswerOption): IFhirItem | IFhirAnswerOption;
    applyToItemElement(itemWidget: AnyFormItemType): void;
    toXmlString(): string;
    toXmlDocument(): Document;
    toJsonObject(): IFhirItemExtension;
    parseXmlDocument(xml: Document): IMedidokFhirExtension | undefined;
    parseXmlString(xmlString: string): IMedidokFhirExtension | undefined;
    transformResponse(fhirItem: AnyFormItemType, fhirResponse: IFhirBaseItemResponse): IExtensionTransformResult | undefined;
}

export { QuestionnaireErlaeuterung } from './QuestionnaireErlaeuterung';

export declare class QuestionnaireHidden extends BaseMedidokFhirExtension {
    constructor();
    get allowedForItems(): string[];
    get valueBoolean(): boolean;
    set valueBoolean(value: boolean);
    get configuration(): IFhirExtensionConfiguration;
    configure(configuration: IFhirExtensionConfiguration, contextItem: AnyFormItemType): boolean;
    jsonToConfiguration(fhirItem: IFhirItemExtension): IFhirExtensionConfiguration;
    private configurationToExtensionJson;
    initialize(jsonObject: IFhirItemExtension, contextItem: AnyFormItemType): boolean;
    dispose(): void;
    applyToQuestionnaireData(formData: IFhirFormData): IFhirFormData;
    applyToQuestionnaireWidget(formWidget: FhirFormWidget): void;
    applyToItem(item: IFhirItem | IFhirAnswerOption): IFhirItem | IFhirAnswerOption;
    applyToItemElement(itemWidget: AnyFormItemType): void;
    toXmlString(): string;
    toXmlDocument(): Document;
    toJsonObject(): IFhirItemExtension;
    parseXmlDocument(xml: Document): IMedidokFhirExtension | undefined;
    parseXmlString(xmlString: string): IMedidokFhirExtension | undefined;
    transformResponse(fhirItem: AnyFormItemType, fhirResponse: IFhirBaseItemResponse): IExtensionTransformResult | undefined;
}

export { QuestionnaireHidden } from './QuestionnaireHidden';

export interface IQuestionnaireItemControlConfiguration extends IFhirExtensionConfiguration {
    code: string;
    type: string;
    description: string;
}

export declare class QuestionnaireItemControl extends BaseMedidokFhirExtension {
    constructor();
    get allowedForItems(): string[];
    get code(): string;
    set code(value: string);
    get type(): string;
    set type(value: string);
    get description(): string;
    set description(value: string);
    get codingSystem(): string;
    set codingSystem(value: string);
    get extensionText(): string;
    set extensionText(value: string);
    get configuration(): IQuestionnaireItemControlConfiguration;
    configure(configuration: IQuestionnaireItemControlConfiguration, contextItem: AnyFormItemType): boolean;
    jsonToConfiguration(fhirItem: IFhirItemExtension): IQuestionnaireItemControlConfiguration;
    initialize(jsonObject: IFhirItemExtension, contextItem: AnyFormItemType): boolean;
    dispose(): void;
    applyToQuestionnaireData(formData: IFhirFormData): IFhirFormData;
    applyToQuestionnaireWidget(formWidget: FhirFormWidget): void;
    applyToItem(item: IFhirItem | IFhirAnswerOption): IFhirItem | IFhirAnswerOption;
    applyToItemElement(itemWidget: AnyFormItemType): void;
    toXmlString(): string;
    toXmlDocument(): Document;
    toJsonObject(): IFhirItemExtension;
    parseXmlDocument(xml: Document): IMedidokFhirExtension | undefined;
    parseXmlString(xmlString: string): IMedidokFhirExtension | undefined;
    parseJsonObject(jsonObject: IFhirItemExtension, contextItem: AnyFormItemType): IMedidokFhirExtension | undefined;
    transformResponse(fhirItem: AnyFormItemType, fhirResponse: IFhirBaseItemResponse): IExtensionTransformResult | undefined;
}

export { QuestionnaireItemControl } from './QuestionnaireItemControl';

export declare class QuestionnaireOptionExclusive extends BaseMedidokFhirExtension {
    constructor();
    get allowedForItems(): string[];
    get valueBoolean(): boolean;
    set valueBoolean(value: boolean);
    get configuration(): IFhirExtensionConfiguration;
    configure(configuration: IFhirExtensionConfiguration, contextItem: AnyFormItemType): boolean;
    jsonToConfiguration(fhirItem: IFhirItemExtension): IFhirExtensionConfiguration;
    initialize(jsonObject: IFhirItemExtension, contextItem: AnyFormItemType): boolean;
    dispose(): void;
    applyToQuestionnaireData(formData: IFhirFormData): IFhirFormData;
    applyToQuestionnaireWidget(formWidget: FhirFormWidget): void;
    applyToItem(item: IFhirItem | IFhirAnswerOption): IFhirItem | IFhirAnswerOption;
    applyToItemElement(itemWidget: AnswerOptionItemWidget): void;
    toXmlString(): string;
    toXmlDocument(): Document;
    toJsonObject(): IFhirItemExtension;
    parseXmlDocument(xml: Document): IMedidokFhirExtension | undefined;
    parseXmlString(xmlString: string): IMedidokFhirExtension | undefined;
    parseJsonObject(jsonObject: IFhirItemExtension, contextItem: AnyFormItemType): IMedidokFhirExtension | undefined;
    transformResponse(fhirItem: AnyFormItemType, fhirResponse: IFhirBaseItemResponse): IExtensionTransformResult | undefined;
}

export { QuestionnaireOptionExclusive } from './QuestionnaireOptionExclusive';

export interface IQuestionnaireSignatureRequiredConfiguration extends IFhirExtensionConfiguration {
    display: string;
    caption: string;
}
export declare class QuestionnaireSignatureRequired extends BaseMedidokFhirExtension {
    constructor();
    get allowedForItems(): string[];
    get caption(): string;
    set caption(value: string);
    get system(): string;
    set system(value: string);
    get code(): string;
    set code(value: string);
    get display(): string;
    set display(value: string);
    get configuration(): IFhirExtensionConfiguration;
    configure(configuration: IQuestionnaireSignatureRequiredConfiguration, contextItem: AnyFormItemType): boolean;
    jsonToConfiguration(fhirItem: IFhirItemExtension): IQuestionnaireSignatureRequiredConfiguration;
    initialize(jsonObject: IFhirItemExtension, contextItem: AnyFormItemType): boolean;
    dispose(): void;
    applyToQuestionnaireData(formData: IFhirFormData): IFhirFormData;
    applyToQuestionnaireWidget(formWidget: FhirFormWidget): void;
    applyToItem(item: IFhirItem | IFhirAnswerOption): IFhirItem | IFhirAnswerOption;
    applyToItemElement(itemWidget: SignatureItemWidget): void;
    toXmlString(): string;
    toXmlDocument(): Document;
    toJsonObject(): IFhirItemExtension;
    parseXmlDocument(xml: Document): IMedidokFhirExtension | undefined;
    parseXmlString(xmlString: string): IMedidokFhirExtension | undefined;
    parseJsonObject(jsonObject: IFhirItemExtension, contextItem: AnyFormItemType): IMedidokFhirExtension | undefined;
    transformResponse(fhirItem: AnyFormItemType, fhirResponse: IFhirBaseItemResponse): IExtensionTransformResult | undefined;
    private addSignatureWidget;
    private transformItemWidgetResponse;
}

export { QuestionnaireSignatureRequired } from './QuestionnaireSignatureRequired';

export declare class RenderingXhtml extends BaseMedidokFhirExtension {
    constructor();
    get allowedForItems(): string[];
    get valueString(): string | undefined;
    set valueString(value: string | undefined);
    get configuration(): IFhirExtensionConfiguration;
    configure(configuration: IFhirExtensionConfiguration, contextItem: AnyFormItemType): boolean;
    jsonToConfiguration(fhirItem: IFhirItemExtension): IFhirExtensionConfiguration;
    initialize(jsonObject: IFhirItemExtension, contextItem: AnyFormItemType): boolean;
    dispose(): void;
    applyToQuestionnaireData(formData: IFhirFormData): IFhirFormData;
    applyToQuestionnaireWidget(formWidget: FhirFormWidget): void;
    applyToItem(item: IFhirItem | IFhirAnswerOption): IFhirItem | IFhirAnswerOption;
    applyToItemElement(itemWidget: AbstractFhirItemWidget): void;
    toXmlString(): string;
    toXmlDocument(): Document;
    toJsonObject(): IFhirItemExtension;
    parseXmlDocument(xml: Document): IMedidokFhirExtension | undefined;
    parseXmlString(xmlString: string): IMedidokFhirExtension | undefined;
    transformResponse(fhirItem: AnyFormItemType, fhirResponse: IFhirBaseItemResponse): IExtensionTransformResult | undefined;
}

export { RenderingXhtml } from './RenderingXhtml';

export interface IEnableWhenExpressionConfiguration extends IFhirExtensionConfiguration {
    language: string;
    expression: string;
}
export declare class SdcQuestionnaireEnableWhenExpression extends BaseMedidokFhirExtension {
    get allowedForItems(): string[];
    constructor();
    get language(): string;
    set language(value: string);
    get expression(): string;
    set expression(value: string);
    get configuration(): IEnableWhenExpressionConfiguration;
    configure(configuration: IEnableWhenExpressionConfiguration, contextItem: AnyFormItemType): boolean;
    jsonToConfiguration(fhirItem: IFhirItemExtension): IEnableWhenExpressionConfiguration;
    initialize(jsonObject: IFhirItemExtension, contextItem: AnyFormItemType): boolean;
    dispose(): void;
    applyToQuestionnaireData(formData: IFhirFormData): IFhirFormData;
    applyToQuestionnaireWidget(formWidget: FhirFormWidget): void;
    applyToItem(item: IFhirItem | IFhirAnswerOption): IFhirItem | IFhirAnswerOption;
    applyToItemElement(itemWidget: AnyFormItemType): void;
    toXmlString(): string;
    toXmlDocument(): Document;
    toJsonObject(): IFhirItemExtension;
    parseXmlDocument(xml: Document): IMedidokFhirExtension | undefined;
    parseXmlString(xmlString: string): IMedidokFhirExtension | undefined;
    parseJsonObject(jsonObject: IFhirItemExtension, contextItem: AnyFormItemType): IMedidokFhirExtension | undefined;
    transformResponse(fhirItem: AnyFormItemType, fhirResponse: IFhirBaseItemResponse): IExtensionTransformResult | undefined;
}

export { SdcQuestionnaireEnableWhenExpression } from './SdcQuestionnaireEnableWhenExpression';

export declare class SdcQuestionnaireOpenLabel extends BaseMedidokFhirExtension {
    constructor();
    get allowedForItems(): string[];
    get configuration(): IFhirExtensionConfiguration;
    configure(configuration: IFhirExtensionConfiguration, contextItem: AnyFormItemType): boolean;
    jsonToConfiguration(fhirItem: IFhirItemExtension): IFhirExtensionConfiguration;
    initialize(jsonObject: IFhirItemExtension, contextItem: AnyFormItemType): boolean;
    dispose(): void;
    applyToQuestionnaireData(formData: IFhirFormData): IFhirFormData;
    applyToQuestionnaireWidget(formWidget: FhirFormWidget): void;
    applyToItem(item: IFhirItem): IFhirItem;
    applyToItemElement(itemWidget: AnyFormItemType): void;
    toXmlString(): string;
    toXmlDocument(): Document;
    toJsonObject(): IFhirItemExtension;
    parseXmlDocument(xml: Document): IMedidokFhirExtension | undefined;
    parseXmlString(xmlString: string): IMedidokFhirExtension | undefined;
    transformResponse(fhirItem: AnyFormItemType, fhirResponse: IFhirBaseItemResponse): IExtensionTransformResult | undefined;
}

export { SdcQuestionnaireOpenLabel } from './SdcQuestionnaireOpenLabel';

export declare class FhirExtensionEvent extends CustomEvent<void> {
    readonly data: IFhirExtensionEventData;
    readonly error?: Error;
    constructor(evtType: FhirExtensionEventName, data: IFhirExtensionEventData, error?: Error);
}

export type FhirExtensionEventName = keyof IFhirExtensionEventNamesMap;

export declare class FhirExtensionManager extends EventTarget {
    private static _instance;
    static get instance(): FhirExtensionManager;
    private readonly _extensionsRegistry;
    private constructor();
    get loadedExtensions(): Record<string, IMedidokFhirExtension>;
    get extensionsInFormWidget(): string[];
    addEventListener(type: FhirExtensionEventName, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
    removeEventListener(type: FhirExtensionEventName, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
    loadExtension(extensionUrlString: string, extensionFolderPath?: string): void;
    unloadExtension(extensionUrl: string): void;
    removeUnusedExtensions(): void;
    reset(): void;
    applyToQuestionnaireWidget(formWidget: FhirFormWidget): void;
    applyToItemElement(itemWidget: AnyFormItemType, documentGlobalVariables?: VariableDictionary): void;
    transformResponse(itemWidget: FhirFormWidget | AnyFormItemType, fhirResponse: IFhirBaseItemResponse): IExtensionTransformResult | undefined;
    updateDocumentVariables(widget: AnyFormItemType, variablesDictionary: VariableDictionary): VariableDictionary;
}

export { FhirExtensionManager } from './FhirExtensionManager';

export interface IExtensionTransformResult {
    mimeType: string;
    transformationResult: IFhirBaseItemResponse;
}

export interface IFhirExtensionEventData {
    extensionUrl: string;
}

export interface IFhirExtensionEventNamesMap {
    'extension-script-loaded': Event;
    'extension-script-unloaded': Event;
    'extension-script-loading-rror': Event;
}

export interface IMedidokFhirExtension {
    readonly configuration: IFhirExtensionConfiguration;
    readonly allowedForItems: string[];
    readonly extensionName: string;
    readonly xmlns: string;
    readonly extensionUrl: string;
    readonly isValid: boolean;
    documentGlobalVariables?: VariableDictionary;
    valueString?: string;
    valueBoolean?: boolean;
    valueInteger?: number;
    valueDecimal?: number;
    configure(configuration: IFhirExtensionConfiguration, contextItem: FhirFormWidget | AnyFormItemType): boolean;
    initialize(jsonObject: IFhirItemExtension, contextItem: FhirFormWidget | AnyFormItemType): boolean;
    detach(contextItem: FhirFormWidget | AnyFormItemType): void;
    applyToQuestionnaireWidget(formWidget: FhirFormWidget): void;
    applyToItemElement(itemWidget: AnyFormItemType): void;
    toXmlString(): string;
    toXmlDocument(): Document;
    toJsonObject(): IFhirItemExtension;
    transformResponse(fhirItem: FhirFormWidget | AnyFormItemType, fhirResponse: IFhirBaseItemResponse): IExtensionTransformResult | undefined;
    prepareForResponse(fhirForm: FhirFormWidget): void;
    updateDocumentVariables(itemWidget: AnyFormItemType, variablesDictionary: VariableDictionary): VariableDictionary;
}

export declare class XmlTools {
    static parseXmlString(xmlString: string): Document;
}

export interface ILocaleNumberFormat {
    group: string;
    groupSize: number;
    decimal: string;
    fraction: string;
}

export declare class Base64UnicodeCodec {
    static hash(inputString: string): string;
    static encodeImageDataToBase64(imageData: ImageData): string;
    static serializeSignatureData(data: ISignatureData): ISerializableSignatureData;
    static deserializeSignatureData(serializedSignatureData: ISerializableSignatureData): ISignatureData;
    static decodeBase64ToImageData(base64Str: string): ImageData;
}

export interface ISerializableSignatureData {
    encodedImageData?: string;
    inputType: SignatureInputType;
    pointsData: ISignaturePointData[][];
}

export declare const mapDefaultTitleBoxText: {
    de: string;
    en: string;
    fr: string;
    ru: string;
    it: string;
    pl: string;
    hr: string;
    nl: string;
    tr: string;
};
export declare const mapDecSep: {
    de: string;
    en: string;
    fr: string;
    ru: string;
    it: string;
    pl: string;
    hr: string;
    nl: string;
    tr: string;
};
export declare const mapQuestionStringfy: {
    date: (input: HTMLInputElement) => string;
    number: (input: HTMLInputElement) => string;
    radio: (input: HTMLInputElement) => string;
    checkbox: (input: HTMLInputElement) => string;
    text: (input: HTMLInputElement) => string;
    range: (input: HTMLInputElement) => string;
};
export declare const mapQuestionSet: {
    date: (input: HTMLInputElement, value: string) => void;
    number: (input: HTMLInputElement, value: string) => void;
    radio: (input: HTMLInputElement, value: string) => void;
    checkbox: (input: HTMLInputElement, value: string) => void;
    text: (input: HTMLInputElement, value: string) => void;
    range: (input: HTMLInputElement, value: string) => void;
};

declare global {
    interface String {
        endsWith(searchString: string, endPosition?: number): boolean;
        format(...patterns: string[]): string;
        replaceUmlauts(): string;
        clearBOM(): string;
        hasBOM(): boolean;
        addBOM(atend?: boolean): string;
    }
}

export declare abstract class AbstractFhirItemWidget extends HTMLElement {
    static readonly observedAttributes: string[];
    static get TAG_NAME(): string;
    protected _labelElement: HTMLElement;
    protected _fhirItem: IFhirItem;
    protected _conspectNumberElement: HTMLElement;
    protected _acroProcessor?: FhirAcrofieldNameExtension;
    protected _acrofieldInfo?: IAcrofieldInfo;
    private readonly _genericItemChangeHandler;
    private readonly _genericItemFocusHandler;
    private _initialResponse?;
    private _tooltipControler?;
    private _editmode;
    private _buildingMode;
    private _clearNumberingInLabel;
    private _internals;
    private _itemStructureChangeCallback?;
    private _conspectNumber;
    private _itemPath;
    private _attributeChangeByProperty;
    private _documentGlobalVariables;
    private _extensionsRegistry;
    constructor();
    abstract get fhirType(): FhirItemTypeName;
    abstract get acrofieldInValue(): string;
    abstract get acrofieldOutValue(): string;
    abstract set valueAsString(value: string);
    get itemPath(): string[];
    set itemPath(value: string[]);
    get fhirItem(): IFhirItem;
    set fhirItem(value: IFhirItem);
    get acrofieldInfo(): IAcrofieldInfo | undefined;
    get linkId(): string;
    get itemStructureChangeCallback(): FhirItemStructureChangedCallback | undefined;
    set itemStructureChangeCallback(value: FhirItemStructureChangedCallback | undefined);
    get editmode(): boolean;
    set editmode(value: boolean);
    set buildingMode(value: boolean);
    get buildingMode(): boolean;
    get documentGlobalVariables(): VariableDictionary;
    set documentGlobalVariables(value: VariableDictionary);
    get clearNumberingInLabel(): boolean;
    set clearNumberingInLabel(value: boolean);
    get enableWhen(): IFhirClause[];
    get required(): boolean;
    set required(value: boolean);
    get label(): string;
    set label(text: string);
    get id(): string;
    set id(id: string);
    get filled(): number;
    get extensions(): IFhirItemExtension[];
    set extensions(value: IFhirItemExtension[]);
    get hasExtensions(): boolean;
    get formLocale(): string;
    set formLocale(value: string);
    get isGeneric(): boolean;
    get isDisabled(): boolean;
    get isFocused(): boolean;
    get response(): IFhirBaseItemResponse | null;
    get userInputValue(): string;
    get documentVariableValue(): string;
    set documentVariableValue(value: string);
    get documentVariableName(): string;
    get responseTemplate(): IFhirBaseItemResponse;
    get navigationLinks(): IFhirFormNavigationLink[];
    get observedItems(): IFhirFormObserverSubscriber[];
    get responseExists(): boolean;
    get initialResponse(): IFhirBaseItemResponse | undefined;
    set initialResponse(value: IFhirBaseItemResponse | undefined);
    get answerOptions(): AnswerOptionItemWidget[];
    get showFilloutRequestMark(): boolean;
    set showFilloutRequestMark(value: boolean);
    get filloutReport(): IFhirFilloutReport;
    get isHidden(): boolean;
    get enabledByWhen(): boolean;
    set enabledByWhen(value: boolean);
    get conspectNumber(): number[];
    set conspectNumber(value: number[]);
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    exportGdtData(): GdtRecord;
    importGdtData(gdtData: GdtRecord): void;
    setRandom(): void;
    focus(options?: FocusOptions): void;
    observedItemChanged(item: AbstractFhirItemWidget): void;
    enable(): void;
    disable(): void;
    showConspectNumber(): void;
    resetState(): void;
    updateUserInputValue(value?: string): void;
    protected abstract updateDocumentVariableValue(): void;
    protected toAcrofieldInputValue(initialValue: string): string;
    protected extensionScriptUnloadedHandler(evt: FhirExtensionEvent): void;
    protected extensionScriptLoadingErrorHandler(evt: FhirExtensionEvent): void;
    protected extensionScriptLoadedHandler(evt: FhirExtensionEvent): void;
    protected dispatchLabelChangeEvent(): void;
    protected dispatchIdChangeEvent(oldId: string): void;
    protected updateInitialResponse(oldValue: IFhirBaseItemResponse, newValue: IFhirBaseItemResponse, areDifferent: boolean): void;
    protected get firstFocusable(): HTMLInputElement | undefined;
    protected satisfies(enableWhen: IFhirClause[]): boolean;
    protected buildAnswers(): IFhirItemResponse[];
    protected buildAnswerTemplates(): IFhirItemResponse[];
    protected buildResponse(): IFhirBaseItemResponse | null;
    protected buildResponseTemplate(): IFhirBaseItemResponse;
    protected updateView(): void;
    protected bindGenericChangeHandler(elements: HTMLElement[]): void;
    protected unbindGenericChangeHandler(elements: HTMLElement[]): void;
    protected genericItemChangeHandler(evt: Event): void;
    protected genericItemFocusHandler(evt: Event): void;
    protected createNullItem(): IFhirItem;
    private showTooltip;
    private applyExtensionsToResponse;
    private updateExtensionsRegistry;
    private clearNumbering;
    private filloutRequestMarkAttrChange;
    private fhirItemClickHandler;
    private updateRequiredElement;
    private updateLabelElement;
}

export declare class AmbiguousDocumentVariableNameEvent extends FhirFormEvent {
    readonly existingVariable: IDependencyReference;
    readonly newVariable: IDependencyReference;
    constructor(existingVariable: IDependencyReference, newVariable: IDependencyReference);
}

export type AnswerOptionItemVariantName = 'text';

export declare class ButtonsPanelControler {
    private _panelElement?;
    private _fhirFormWidget?;
    get panelElement(): HTMLElement | undefined;
    connect(fhirFormWidget: FhirFormWidget, panelElement: HTMLElement, visible: boolean): void;
    private connectButtons;
}

export declare class ChoiceMutationParser {
    static get choiceVariants(): Record<string, ChoiceVariantMutation>;
    parse(fhirItemId: string): IChoiceMutationParserResult;
    private detectMutation;
}

export type ChoiceVariantMutation = 'string' | 'others';

export declare class FhirEval {
    static compareBooleans(operator: FhirClauseOperator, boolean_1: boolean, boolean_2: boolean): boolean;
    static compareNumbers(operator: FhirClauseOperator, number_1: number, number_2: number): boolean;
    static compareDate(operator: FhirClauseOperator, dateString_1: string, dateString_2: string): boolean;
    static compareStrings(operator: FhirClauseOperator, value_1: string, value_2: string): boolean;
}
export declare class FhirEnableWhenProcessor {
    private readonly COMPARATORS;
    private _enableWhen;
    private _clauseValueProperty?;
    private _answerValueProperty?;
    private _valueComparator;
    constructor(enableWhen: IFhirClause);
    satisfies(answer: IFhirItemAnswer): boolean;
    private createComparatorMap;
    private detectCorrespondingValuePropertyNames;
    private getValueComparator;
    private getClauseValue;
    private compareBooleans;
    private compareNumbers;
    private compareDate;
    private compareStrings;
    private compareReference;
    private compareCoding;
    private compareQuantity;
}

export declare class FhirFormDocumentVariablesChangeEvent extends FhirFormEvent {
    readonly documentVariables: VariableDictionary;
    constructor(documentVariables: VariableDictionary);
}

export declare class FhirFormEvent extends CustomEvent<void> {
    readonly error?: Error;
    constructor(evtName: FhirFormWidgetEventName, error?: Error);
}

export declare class FhirFormGeneralErrorEvent extends FhirFormEvent {
    constructor(error: Error);
}

export declare class FhirFormLoadingErrorEvent extends FhirFormEvent {
    constructor(error: Error);
}

export declare class FhirFormWidget extends HTMLElement {
    static get TAG_NAME(): string;
    static readonly observedAttributes: string[];
    private readonly STATE_CHANGE_MAP;
    private readonly KEY_SOURCE_XML;
    private readonly FHIR_ITEM_SELECTOR;
    private readonly FHIR_ANSWER_SELECTOR;
    private readonly excludeFormTotalCalculation;
    private _variablesProcessingOrder?;
    private _variablesCrossReference?;
    private _widgetState;
    private _fhirFormData;
    private _pagingControler;
    private _navigationContainer;
    private _itemsContainer;
    private _footer;
    private _testingPanelControler;
    private _buttonsPanelControler;
    private _pageNavigationPanel;
    private _banner;
    private _selectedItem?;
    private _settings;
    private _itemsContainerObserver;
    private _documentGlobalVariables;
    private _pendingResponse?;
    private _pendingEditMode?;
    private _buildingObserver?;
    private _buildingDoneHandler;
    private _buildProgressHandler;
    constructor();
    get settings(): IFhirFormWidgetSettings;
    set settings(value: IFhirFormWidgetSettings);
    get fhirFormData(): IFhirFormData;
    set fhirFormData(value: IFhirFormData);
    get isEmpty(): boolean;
    get widgetState(): FhirFormWidgetState;
    get loadingForm(): boolean;
    get loadingVariablesDictionary(): boolean;
    get extensions(): IFhirItemExtension[];
    set extensions(value: IFhirItemExtension[]);
    get documentGlobalVariables(): VariableDictionary;
    set documentGlobalVariables(value: VariableDictionary);
    get variablesProcessingOrder(): IDependencyReference[] | undefined;
    get variablesCrossReference(): IDependencyReference[] | undefined;
    get formLocale(): string;
    set formLocale(value: string);
    get questurl(): string;
    set questurl(value: string);
    get response(): IFhirFormResponse;
    set response(input: IFhirFormResponse);
    get responseTemplate(): IFhirFormResponse;
    get itemResponseTemplateMap(): IItemResponseTemplateMap[];
    get items(): IFhirFilloutReport[];
    get selectedItem(): AbstractFhirItemWidget | undefined;
    get filloutReport(): FhirFilloutReportList;
    set buildingMode(value: boolean);
    get buildingMode(): boolean;
    get editmode(): boolean;
    set editmode(value: boolean);
    get pagingMode(): PagingControlerType;
    set pagingMode(value: PagingControlerType);
    get clearNumberingInLabel(): boolean;
    set clearNumberingInLabel(value: boolean);
    set testingPanelVisible(value: boolean);
    set buttonsPanelVisible(value: boolean);
    set questionnaireInfoPanelVisible(value: boolean);
    set navigationBarVisible(value: boolean);
    get bannerVisible(): boolean;
    set bannerVisible(value: boolean);
    set pageNavigationPanelVisible(value: boolean);
    get patientBirthDate(): Date | undefined;
    set patientBirthDate(value: Date | undefined);
    get allFhirItems(): AbstractFhirItemWidget[];
    get allFhirWidgets(): AnyFormItemType[];
    get widgetsWithVariableName(): AnyFormItemType[];
    get widgetsWithExtension(): AnyFormItemType[];
    get fhirItems(): AbstractFhirItemWidget[];
    get itemsContainer(): HTMLElement;
    get groupOrphanItems(): boolean;
    set groupOrphanItems(value: boolean);
    get totalPages(): number;
    get currentPageIndex(): number;
    set currentPageIndex(value: number);
    connectedCallback(): void;
    private genericEventHandler;
    addEventListener<K extends FhirFormWidgetEventName>(type: K, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends FhirFormWidgetEventName>(type: K, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    removeItem(itemElementToRemove: AnyFormItemType): void;
    addItem(itemToAdd: IFhirItem | IFhirAnswerOption, parentElement?: AbstractFhirItemWidget, atIndex?: number): void;
    refreshParent(currentItem: AnyFormItemType): void;
    moveQuestionUp(question: AnyFormItemType): void;
    moveQuestionDown(question: AnyFormItemType): void;
    unloadQuestionnaire(): void;
    loadQuestionnaireXmlContent(questionnaireXmlContent: string): void;
    setQuestionnaireData(input: IFhirFormResponse): void;
    updateVariableProcessingSettings(updatedDictionary: VariableDictionary, processingOrder?: IDependencyReference[], crossReferences?: IDependencyReference[]): void;
    importGdtData(gdtData: GdtRecord): void;
    exportGdtData(): GdtRecord;
    setQuestionnaireReset(): void;
    setRandomData(): void;
    setRandomMark(): void;
    goToQuestion(questionId: string, showFillRequestMark?: boolean): void;
    clearFilloutRequestMark(): void;
    goFirstPage(): void;
    goPreviousPage(): void;
    goNextPage(): void;
    goLastPage(): void;
    findElementByLinkId(linkId: string): AbstractFhirItemWidget;
    private get defaultSettings();
    private finalizeDictionaryUpdateWithInVariables;
    private addInVariableDependecies;
    private addInVariablesIntoGraph;
    private applyDocumentVariables;
    private applyDocumentVariablesByOrder;
    private buildFhirHtml;
    private itemStructureChangeHandler;
    private setFhirItemBySuccessType;
    private updatePreviousGroupAfterMove;
    private actualizeParentConfig;
    private actualizeFhirFormConfig;
    private updateGroupFhirItemFromDOM;
    private moveAnswerOptionDown;
    private moveAnswerOptionUp;
    private moveItemDown;
    private moveUpItemToSubgroup;
    private moveDownItemToSubgroup;
    private moveItemToLocation;
    private appendItem;
    private moveItemUp;
    private moveDownInGroup;
    private moveUpInGroup;
    private saveOptionItemData;
    private updateAnswerOption;
    private updateItems;
    private updateAfterEnableWhenCallback;
    private removeAnswerOption;
    private removeFhirItem;
    private addItemToForm;
    private addFhirItemIntoGroup;
    private updateNumberinItemsInSubgroup;
    private getElementWidthInPercent;
    private runFhirFormBuildingObserver;
    private findHighestParentGroup;
    private countItems;
    private addAnswerOption;
    private initializeItemsCollectionChange;
    private itemsCollectionChangeHandler;
    private pagingControlerChangeCallback;
    private goPreviousPageHandler;
    private goNextPageHandler;
    private goLastPageHandler;
    private goFirstPageHandler;
    private scrollToPageNavigationPanel;
    private countItemsInSource;
    private loadFhirExtesions;
    private set widgetState(value);
    private updateLoadingFormAttribute;
    private updatePendingEditMode;
    private applyResponse;
    private detectChoiceVarianMutations;
    private scrollToQuestion;
    private updateView;
    private updatePanelsVisibility;
    private updateBanner;
    private updateFhirItemsAndNavigation;
    private buildWidgetList;
    private itemStructureChangedCallbackHandler;
    private runItemsBuildingObserver;
    private stopItemsBuildingObserver;
    private updatePageNavigationPanel;
    private buildProgressHandler;
    private buildingDoneHandler;
    private updateTabIndex;
    private dispatchFhirEvent;
    private updateGroupResponse;
    private refrestAllInputsByChangeEvent;
    private updateQuestionnaireInfo;
    private itemChangeHandler;
    private fhirItemLabelChangeHandler;
    private updateGroupVisibility;
    private updateNavigation;
    private loadFhirData;
    private buildFhirFormResponse;
    private finalizeDictionaryUpdateWithOutVariables;
    private addOutVariablesDependency;
    private addOutVariablesintoGraph;
    private buildReposnseBase;
    private readSubjectType;
    private buildQuestionnaireDefinitionRef;
    private getFormStatus;
    private getFillReport;
    private getRequiredItems;
    private getRequiredResponsesTotal;
    private buildItemResponses;
    private readFhirItemResponse;
    private getEmptyFormData;
    private itemFocusChangeHandler;
    private updateViewForEditMode;
    private updateViewForBuildingMode;
    private updateViewForNumberingInLabel;
    addItemToGroup(): void;
}

export type FhirFormWidgetEventName = keyof IFhirFormWidgetEventsMap;

export declare class FhirFormWidgetIdChangeEvent extends FhirFormEvent {
    readonly oldId: string;
    constructor(evtName: 'fhir-item-id-change' | 'answer-option-id-change', oldId: string);
}

export type FhirFormWidgetState = 'no-form' | 'editing' | 'viewing' | 'building' | 'loading-form' | 'building-response' | 'loading-response' | 'loading-variables-dictionary' | 'form-error';

export declare class FhirFormWidgetsFactory {
    private static _detectedVarianMutations;
    static clearDetectedVarianMutations(): void;
    static get detectedVarianMutations(): Record<string, IChoiceMutationParserResult>;
    buildAnswerOption(answerOptionData: IFhirAnswerOption, multichoice: boolean, variant?: AnswerOptionItemVariantName): AnswerOptionItemWidget;
    buildForm(): FhirFormWidget;
    buildItem(item: IFhirItem, clearNumberingInLabel: boolean): AbstractFhirItemWidget;
    buildWidget(fhirItem: IFhirItem, clearNumberingInLabel: boolean, locale: string, groupOrphanItems: boolean | undefined, buildingMode: boolean): AbstractFhirItemWidget;
    private createGenericGroupItemFor;
}

export declare class FhirItemExtensionProvider {
    private readonly EXTENSION_URLS;
    private _extensions;
    constructor(extensions?: IFhirItemExtension[]);
    get description(): string | undefined;
    get inputFormat(): string | undefined;
    get placeholdersArray(): string[] | undefined;
    get optionExclusive(): boolean | undefined;
    private findExtensionValue;
}

export declare const PAGE_NOT_FOUND = -1;
export declare const NOT_FOUND_IDX = -1;
export declare const NUMBER_NOT_SET = 0;
export declare const TAB_INDEX_AUTO_ORDER = -1;
export declare const CONSPECT_NUMBER_SEPARATOR = ".";
export declare const ITEM_ROOT = "/";
export declare const DEFAULT_EXTENSION_TRANSFORM_MIME = "application/octet-stream";
export declare const ThiemeMagicConstant: {
    __string: string;
    _other: string;
};
export declare const FhirItemWidgetAttribute: {
    disabled: string;
    value: string;
    'fhir-gdt-code': string;
    'fhir-gdt-data-type': string;
    'fhir-acrofield-name': string;
    url: string;
    xmlns: string;
    style: string;
    'enabled-by-when': string;
    id: string;
    questurl: string;
    loading: string;
    type: string;
    lang: string;
    'fillout-request-mark': string;
    signatureField: string;
    pageHidden: string;
    'fhir-page': string;
    'document-variable-value': string;
    'user-input-value': string;
    'acro-variable-name': string;
};
export declare const FhirItemWidgetCssClasses: {
    'fhir-item': string;
    'generic-item': string;
    'group-item': string;
    'choice-item': string;
    'open-choice-item': string;
    'display-item': string;
    required: string;
    disabled: string;
};
export declare const FhirItemWidgetInternalCssClasses: {
    tooltip: string;
    'tooltip-trigger': string;
    'icon-m-arrow-down': string;
    hidden: string;
    hide: string;
    visible: string;
    'display-none': string;
    'fhir-page': string;
};
export interface IFhirItemTags {
    AbstractFhirItemWidget: string;
    GenericGroupItemWidget: string;
    GroupItemWidget: string;
    GenericItemWidget: string;
    BooleanItemWidget: string;
    ChoiceItemWidget: string;
    DateItemWidget: string;
    DecimalItemWidget: string;
    IntegerItemWidget: string;
    OpenChoiceItemWidget: string;
    StringItemWidget: string;
    TextItemWidget: string;
    AnswerOptionItemWidget: string;
    AnswerOptionTextItemWidget: string;
    DisplayItemWidget: string;
    AttachmentItemWidget: string;
    SignatureItemWidget: string;
    FhirFormWidget: string;
    FhirFormBannerWidget: string;
    FhirPageNavigationPanel: string;
}
export declare const FhirItemTags: IFhirItemTags;
export declare const DocumentGlobalVariables: DictionaryData;

export declare class FhirResponseFormUpdater implements Record<FhirItemTypeName, ItemUpdater> {
    unknown(fhirGroupItem: IFhirBaseItemResponse, instanceItem: AbstractFhirItemWidget): void;
    'generic-group'(fhirGroupItem: IFhirBaseItemResponse, instanceItem: AbstractFhirItemWidget): void;
    group(fhirGroupItem: IFhirBaseItemResponse, instanceItem: AbstractFhirItemWidget): void;
    boolean(fhirItem: IFhirBaseItemResponse, instanceItem: AbstractFhirItemWidget): void;
    integer(fhirItem: IFhirBaseItemResponse, instanceItem: AbstractFhirItemWidget): void;
    decimal(fhirItem: IFhirBaseItemResponse, instanceItem: AbstractFhirItemWidget): void;
    choice(fhirItem: IFhirBaseItemResponse, instanceItem: AbstractFhirItemWidget): void;
    'open-choice'(fhirItem: IFhirBaseItemResponse, instanceItem: AbstractFhirItemWidget): void;
    text(fhirItem: IFhirBaseItemResponse, instanceItem: AbstractFhirItemWidget): void;
    string(fhirItem: IFhirBaseItemResponse, instanceItem: AbstractFhirItemWidget): void;
    display(fhirItem: IFhirBaseItemResponse, instanceItem: AbstractFhirItemWidget): void;
    date(fhirItem: IFhirBaseItemResponse, instanceItem: AbstractFhirItemWidget): void;
    attachment(fhirItem: IFhirBaseItemResponse, instanceItem: AbstractFhirItemWidget): void;
    signature(fhirItem: IFhirBaseItemResponse, instanceItem: AbstractFhirItemWidget): void;
    private fillGroupChildren;
}

export interface SetEx<T> extends Set<T> {
    difference(arg: Set<T>): Set<T>;
}
export interface IArrayChangeSummary<T> {
    addedItems: Set<T>;
    removedItems: Set<T>;
}
export declare class FhirTools {
    static get predefinedVariables(): VariableDictionary;
    static cloneObject<T>(value: T): T;
    static toResponseDateString(choosenDate: Date): string;
    static buildRadioGroupName(itemLinkId: string): string;
    static dateToFormDate(date: Date): string;
    static dateToAnswerDate(locale: string, date: Date): string;
    static dateToAnswerDateTime(locale: string, date: Date): string;
    static dateToAnswerTime(locale: string, date: Date): string;
    static fixResponseLinkId(linkId: string): string;
    static generateRandomText(): string;
    static refreshConspectNumbers(parentNumber: number[], fhirWidgets: AbstractFhirItemWidget[]): void;
    static fhirXmlItemsSummaryDiagnostic(xmlContainer: Document, xmlItemsSelector: string): void;
    static moveArrayElement<T>(array: T[], fromIndex: number, toIndex: number): T[];
    static isFloat(value: string): boolean;
    static isInteger(value: string): boolean;
    arrayChanges<T>(source: T[], target: T[]): IArrayChangeSummary<T>;
}

export declare class FormWidgetStateChangeErrorEvent extends FhirFormEvent {
    readonly fromState: FhirFormWidgetState;
    readonly toState: FhirFormWidgetState;
    constructor(fromState: FhirFormWidgetState, toState: FhirFormWidgetState);
}

export interface IChoiceMutationParserResult {
    get fhirItemId(): string;
    get id(): string;
    get mutation(): ChoiceVariantMutation | undefined;
}

export interface IDependencyReference {
    variableName: string;
    itemId: string;
}

export interface IDocumentGlobalVariables {
    USERID?: 'default' | string;
    DISPLAYUSER?: 'default' | string;
    PATIENTNAME?: 'default' | string;
    PATIENTGIVENNAME?: 'default' | string;
    PATIENTBIRTHDATE?: 'default' | string;
    PATIENTSEX?: 'default' | string;
    DEPARTMENTID?: 'default' | string;
    DEPARTMENTNAME?: 'default' | string;
    DEPARTMENTTOKEN?: 'default' | string;
    CONTENT?: 'default' | string;
    CUR_DATE?: 'default' | string;
    CUR_DATETIME?: 'default' | string;
}

export interface IFhirFormWidgetEventsMap {
    'fhir-form-general-error': Event;
    contentReady: Event;
    loadingError: Event;
    change: Event;
    'document-variables-change': Event;
    'loading-form': Event;
    'loading-form-data': Event;
    'loading-data-error': Event;
    'loading-data-done': Event;
    'updating-form-view': Event;
    'item-selection-change': Event;
    'fhir-item-added-to-view': Event;
    'fhir-item-removed-from-view': Event;
    'fhir-form-paging-mode-change': Event;
    'fhir-form-page-change': Event;
    'fhir-item-clicked': Event;
    'fhir-item-label-change': Event;
    'fhir-item-id-change': Event;
    'answer-option-label-change': Event;
    'answer-option-id-change': Event;
    'variable-cross-reference': Event;
    'form-widget-state-change': Event;
    'form-widget-state-change-error': Event;
    'ambiguous-document-variable-name': Event;
}

export interface IFhirFormWidgetSettings {
    pageNavigationPanelVisible: boolean;
    pagingControlerType: PagingControlerType;
    testingPanelVisible: boolean;
    buttonsPanelVisible: boolean;
    questionnaireInfoPanelVisible: boolean;
    navigationBarVisible: boolean;
    bannerVisible: boolean;
    editmode: boolean;
    clearNumberingInLabel: boolean;
    groupOrphanItems: boolean;
    buildingMode: boolean;
    ignoreFieldInReportWhenNoOutSection?: boolean;
    useFieldContentAsDefaultOut?: boolean;
}

export interface IFhirWidgetBildResult {
    widget: AbstractFhirItemWidget;
    navigationLinks: IFhirFormNavigationLink[];
}

export interface IItemResponseTemplateMap {
    fhirItem: IFhirItem;
    responseTemplate: IFhirBaseItemResponse;
}

export interface IVariableReference {
    variableName: string;
    linkId: string;
}

export interface IVariablesDependencyData {
    variablesDictionary: VariableDictionary;
    crossReferences?: IDependencyReference[];
    processingOrder?: IDependencyReference[];
}

export interface IVariablesProcessingData {
    inVariables?: IVariablesDependencyData;
    outVariables?: IVariablesDependencyData;
}

export type ItemUpdater = (fhirItem: IFhirBaseItemResponse, instanceItem: AbstractFhirItemWidget) => void;

export type MoveItemResult = 'not-found' | 'out-of-range' | 'done' | 'done-out-of-group-up' | 'done-out-of-group-down' | 'done-into-group';

export declare class TestingPanelControler {
    private _panelElement?;
    private _fhirFormWidget?;
    private _fhirLoadingMode?;
    private _pendingFormXml?;
    get panelElement(): HTMLElement | undefined;
    attach(fhirFormWidget: FhirFormWidget, panelElement: HTMLElement, visible: boolean): void;
    private get fileLoaderElement();
    private get fhirResponseSaverElement();
    private get fhirResponseLoaderElement();
    private attachButtons;
    private toggleGroupOrphansHandler;
    private fhireResponseFileLoaderChangeHandler;
    private readFhirResponseJsonFile;
    private fhirResponseFileLoadErrorHandler;
    private fhirResponseFileLoadedHandler;
    private unloadFhirFormHandler;
    private fhirFormContentReadyHandler;
    private fhirFormPageChangeHandler;
    private updatePagingControl;
    private fhirFormPagingModeChangeHandler;
    private pagingModeSelectChangeHandler;
    private currentPageChangeHandler;
    private updateDocumentWindowTitle;
    private fhireFileLoaderChangeHandler;
    private readFhirXmlFile;
    private fhirFileLoadErrorHandler;
    private fhirFileLoadedHandler;
    private loadFhirFormHandler;
    private loadFhirFormAndataHandler;
    private clearFileLoader;
    private resetFhirFormHandler;
    private loadRandomDataHandler;
    private saveFormResponseHandler;
    private toggleEditViewModeHandler;
    private loadQuestionnaireResponseHandler;
}

export declare class TooltipControler {
    private _triggerElement;
    private _tooltipElement;
    constructor(triggerElement: HTMLElement, tooltipElement: HTMLElement);
    get tooltipText(): string;
    set tooltipText(value: string);
    set visible(value: boolean);
}

export declare class VariableCrossReferenceEvent extends FhirFormEvent {
    readonly cyclePath: IDependencyReference[];
    constructor(cyclePath: IDependencyReference[]);
}

export type ControlKeyName = keyof IControlKeyNamesMap;

export declare const ControlKeyNameList: string[];

export declare class DefaultLocaleProvider implements ILocaleProvider {
    private _locale;
    constructor();
    get DEFAULT_LOCALE(): LocaleName;
    get locale(): LocaleName;
    get dictionary(): LocaleDictionaryType;
    set locale(value: LocaleName);
    getAvailableCommonLocales(): LocaleName[];
    getCommonString(locale: LocaleName, key: LocaleCommonKey): string;
    getNumberInfo(locale: LocaleName): ILocaleNumberFormat;
    getNumberAsTextValidator(locale: LocaleName): RegExp;
    tryToParseNumber(locale: LocaleName, numberString: string, floatNumber?: boolean): number | null;
    addNumberInputValidatorHandler(locale: string, numberInput: HTMLInputElement, floatInput?: boolean): (evt: KeyboardEvent) => void;
    addPasteNumberHandler(locale: LocaleName, numberInput: HTMLInputElement, floatInput?: boolean): (evt: ClipboardEvent) => void;
    private NaNtoNumber;
    private createIntegerNumberValidatorHandler;
    private createFloatNumberValidatorHandler;
}

export declare const DEFAULT_MAXLENGTH_DECIMALITEMWIDGET: number;
export declare const DEFAULT_MAXLENGTH_INTEGERITEMWIDGET: number;
export declare const DEFAULT_MAXLENGTH_STRINGITEMWIDGET: number;

export interface IControlKeyNamesMap {
    'Backspace': string;
    'Tab': string;
    'Enter': string;
    'Shift': string;
    'Control': string;
    'Alt': string;
    'CapsLock': string;
    'Escape': string;
    'Space': string;
    'PageUp': string;
    'PageDown': string;
    'End': string;
    'Home': string;
    'ArrowLeft': string;
    'ArrowUp': string;
    'ArrowRight': string;
    'ArrowDown': string;
    'Delete': string;
    'Control+A': string;
    'Control+a': string;
    'Control+V': string;
    'Control+v': string;
    'Control+C': string;
    'Control+c': string;
    'Control+X': string;
    'Control+x': string;
    'Control+Shift+ArrowLeft': string;
    'Control+Shift+ArrowRight': string;
    'Shift+ArrowLeft': string;
    'Shift+ArrowRight': string;
    'Control+ArrowLeft': string;
    'Control+ArrowRight': string;
    'Control+Home': string;
    'Control+End': string;
}

export interface ILocaleCommons {
    YES: string;
    NO: string;
    SHORT_YES: string;
    SHORT_NO: string;
    DEFAULT_TITLE: string;
    TREATMENT_STEP_DEFAULT_TITLE: string;
    OTHERS: string;
    OK: string;
    CANCEL: string;
}

export interface ILocaleProvider {
    readonly DEFAULT_LOCALE: LocaleName;
    readonly dictionary: LocaleDictionaryType;
    locale: LocaleName;
    getAvailableCommonLocales(): LocaleName[];
    getCommonString(locale: LocaleName, key: LocaleCommonKey): string;
    getNumberInfo(locale: LocaleName): ILocaleNumberFormat;
    getNumberAsTextValidator(locale: LocaleName): RegExp;
    tryToParseNumber(locale: LocaleName, numberString: string, floatNumber: boolean): number | null;
    addNumberInputValidatorHandler(locale: string, numberInput: HTMLInputElement, floatInput: boolean): (evt: KeyboardEvent) => void;
    addPasteNumberHandler(locale: LocaleName, numberInput: HTMLInputElement, floatInput: boolean): (evt: ClipboardEvent) => void;
}

export type LocaleCommonKey = keyof ILocaleCommons;

export type LocaleDictionaryType = Record<LocaleName, ILocaleCommons>;

export type LocaleName = string;

export declare class LocaleService {
    private static _provider;
    static get provider(): ILocaleProvider;
    static set provider(value: ILocaleProvider);
}

export type LogLevel = 'INFO' | 'DEBUG' | 'ERROR';
export declare class ApplicationLogger {
    private _logMode;
    private _writer;
    private _logLevel;
    constructor(logMode?: LogMode);
    get writerName(): string;
    get logMode(): LogMode;
    set logMode(value: LogMode);
    get logLevel(): LogLevel;
    set logLevel(value: LogLevel);
    log(text: string): void;
    error(text: string): void;
    toString(): string;
    private globalErrorHandler;
    private switchWriter;
    private formatText;
    private createTimestamp;
}

export type FhirquestionnariesLogLevel = 'log' | 'error';
export declare class LogAsBodyEvent extends CustomEvent<void> {
    static get EVENT_NAME(): string;
    readonly logLevel: FhirquestionnariesLogLevel;
    readonly logMessage: string;
    constructor(logLevel: FhirquestionnariesLogLevel, logMessage: string);
}

export type LogMode = 'development' | 'production';

export declare const Log: ApplicationLogger;

export type AnyFormItemType = AbstractFhirItemWidget | AnswerOptionItemWidget;

export type DictionaryData = Record<string, string>;

export declare class FhirAnswerOption implements IFhirAnswerOption {
    protected _answerItemData: IFhirAnswerOption;
    constructor(data?: IFhirAnswerOption);
    get id(): string;
    set id(value: string);
    get valueString(): string | undefined;
    set valueString(value: string | undefined);
    get initialSelected(): boolean | undefined;
    set initialSelected(value: boolean | undefined);
    get extension(): IFhirItemExtension[] | undefined;
    set extension(value: IFhirItemExtension[] | undefined);
    get valueCoding(): IFhirCoding | undefined;
    set valueCoding(value: IFhirCoding | undefined);
    toFhirItemInterface(): IFhirAnswerOption;
}

export declare class FhirChoiceItem extends FhirItem implements IFhirChoiceItem {
    get repeats(): boolean;
    set repeats(value: boolean);
    get answerOption(): IFhirAnswerOption[];
    set answerOption(value: IFhirAnswerOption[]);
    toFhirItemInterface(): IFhirChoiceItem;
}

export type FhirClauseOperator = 'exists' | '=' | '!=' | '>' | '<' | '>=' | '<=';

export type FhirFilloutReportList = Record<string, IFhirFilloutReport>;

export type FhirFormIdentifierCode = 'usual' | 'official' | 'temp' | 'secondary' | 'old';

export declare class FhirGroupItem extends FhirItem implements IFhirGroupItem {
    get item(): IFhirItem[];
    set item(value: IFhirItem[]);
    toFhirItemInterface(): IFhirGroupItem;
}

export declare class FhirItem implements IFhirItem {
    protected _fhirItemData: IFhirItem;
    constructor(fhirItem?: IFhirItem);
    get linkId(): string;
    set linkId(value: string);
    get required(): boolean;
    set required(value: boolean);
    get text(): string;
    set text(value: string);
    get type(): FhirItemTypeName;
    set type(value: FhirItemTypeName);
    get maxLength(): number | undefined;
    set maxLength(value: number | undefined);
    get extension(): IFhirItemExtension[] | undefined;
    set extension(value: IFhirItemExtension[] | undefined);
    get enableWhen(): IFhirClause[] | undefined;
    set enableWhen(value: IFhirClause[] | undefined);
    toFhirItemInterface(): IFhirItem;
    private buildDefaultData;
}

export type FhirItemTypeName = keyof IFhirItemTypeNamesMap;

export type FhirResourceType = 'QuestionnaireResponse';

export type FhirStatusCode = 'in-progress' | 'completed' | 'amended' | 'entered-in-error' | 'stopped';

export type GdtRecord = Record<string, string | number | boolean>;

export interface IExtensionRegistryEntry {
    data: IFhirItemExtension;
    processor?: IMedidokFhirExtension;
}

export interface IFhirAnswerOption {
    id: string;
    valueString?: string;
    initialSelected?: boolean;
    extension?: IFhirItemExtension[];
    valueCoding?: IFhirCoding;
}

export interface IFhirAttachment {
    contentType?: string;
    language?: string;
    data?: string;
    url?: string;
    size?: number;
    hash?: string;
    title?: string;
    creation?: string;
    height?: number;
    width?: number;
    frames?: number;
    duration?: number;
    pages?: number;
}

export interface IFhirBaseItemResponse {
    linkId: string;
    text?: string;
}

export interface IFhirChoiceItem extends IFhirItem {
    repeats: boolean;
    answerOption: IFhirAnswerOption[];
}

export interface IFhirClause extends IFhirClauseValue {
    question: string;
    operator: FhirClauseOperator;
}

export interface IFhirClauseValue {
    answerString?: string;
    answerBoolean?: boolean;
    answerDecimal?: number;
    answerInteger?: number;
    answerDate?: string;
    answerDateTime?: string;
    answerTime?: string;
    answerCoding?: IFhirCoding;
    answerQuantity?: IFhirQuantity;
    answerReference?: IFhirValueReference;
}

export interface IFhirCodeableConcept {
    coding: IFhirCoding[];
    text: string;
}

export interface IFhirCoding {
    system?: string;
    version?: string;
    code?: string;
    display?: string;
    userSelected?: boolean;
}

export interface IFhirDisplayItem extends IFhirItem {
    fhir_comments: string[];
    _text: {
        extension: IFhirItemExtension[];
    };
}

export interface IFhirExpression {
    description: string;
    name: string;
    language: string;
    expression: string;
    reference: string;
}

export interface IFhirFillStatus {
    filled: number;
    required: number;
}

export interface IFhirFilloutReport {
    fieldId: string;
    text: string;
    filled: boolean;
    required: boolean;
    focused: boolean;
    disabled: boolean;
}

export interface IFhirFormData {
    resourceType: string;
    id: string;
    meta: IFhirFormMeta;
    language: string;
    text: {};
    url: string;
    identifier: IFhirFormIdentifier[];
    version: string;
    name: string;
    title: string;
    status: string;
    extension?: IFhirItemExtension[];
    experimental: boolean;
    subjectType: string[];
    date: string;
    publisher: string;
    contact: [];
    description: string;
    jurisdiction: [];
    copyright: string;
    approvalDate: string;
    lastReviewDate: string;
    item: IFhirItem[];
}

export interface IFhirFormIdentifier {
    "use": FhirFormIdentifierCode;
    "system": string;
    "value": string;
}

export interface IFhirFormMeta {
    profile: string[];
}

export interface IFhirFormNavigationLink {
    linkId: string;
    text: string;
}

export interface IFhirFormResponse {
    questionnaireId: string;
    questionnaireRef?: string;
    version: string;
    lastUpdate: string;
    status: FhirStatusCode;
    fillStatus: IFhirFillStatus;
    responceData: IFhirResponseData;
}

export interface IFhirGroupItem extends IFhirItem {
    item: IFhirItem[];
}

export interface IFhirGroupItemResponse extends IFhirBaseItemResponse {
    item: IFhirBaseItemResponse[];
}

export interface IFhirIdentifier {
}

export interface IFhirItem {
    linkId: string;
    required: boolean;
    text: string;
    type: FhirItemTypeName;
    maxLength?: number;
    extension?: IFhirItemExtension[];
    enableWhen?: IFhirClause[];
}

export interface IFhirItemAnswer {
    valueDate?: string;
    valueInteger?: number;
    valueDecimal?: number;
    valueString?: string;
    valueBoolean?: boolean;
    valueDateTime?: string;
    valueTime?: string;
    valueUri?: string;
    valueAttachment?: IFhirAttachment;
    valueCoding?: IFhirCoding;
    valueQuantity?: string;
    valueReference?: IFhirValueReference;
}

export interface IFhirItemExtension {
    url: string;
    valueString?: string;
    valueBoolean?: boolean;
    valueNumber?: number;
    valueInteger?: number;
    valueDecimal?: number;
    valueCodeableConcept?: IFhirCodeableConcept;
    valueExpression?: IFhirExpression;
}

export interface IFhirItemResponse extends IFhirBaseItemResponse {
    answer: IFhirItemAnswer[];
}

export interface IFhirItemTypeNamesMap {
    unknown: string;
    'generic-group': string;
    group: string;
    choice: string;
    'open-choice': string;
    boolean: string;
    date: string;
    integer: string;
    decimal: string;
    string: string;
    text: string;
    display: string;
    attachment: string;
    signature: string;
}

export interface IFhirQuantity {
}

export interface IFhirResponseData {
    resourceType: FhirResourceType;
    questionnaire: string;
    status: FhirStatusCode;
    meta: {
        lastUpdated: string;
    };
    subject: {
        reference: string;
    };
    author: {
        reference: string;
    };
    source: {
        reference: string;
    };
    language: LocaleName;
    item: IFhirBaseItemResponse[];
}

export interface IFhirValueReference {
    reference?: string;
    type?: string;
    identifier?: IFhirIdentifier;
    display?: string;
}

export declare class AnswerOptionItemWidget extends HTMLElement {
    static get TAG_NAME(): string;
    static readonly observedAttributes: string[];
    private readonly _answerChangedHandler;
    private readonly _answerClickHandler;
    private _answerOptionStructureChangeCallback?;
    private _editmode;
    private _initialResponse?;
    private _inputElement;
    private _labelElement;
    private _fhirAnswerOption;
    private _tooltipControler?;
    private _multichoice;
    private _inputGroupName;
    private _acrofieldUsed;
    private _valueWhenChecked;
    private _buildingMode;
    private _extensionsRegistry;
    private _attributeChangeByProperty;
    private _documentGlobalVariables;
    constructor();
    get acrofieldInfo(): IAcrofieldInfo | undefined;
    get label(): string;
    set label(text: string);
    get id(): string;
    set id(text: string);
    get parentQuestion(): AbstractFhirItemWidget | undefined;
    get answerOptionStructureChangeCallback(): ((fhirAnswerOption: IFhirAnswerOption) => void) | undefined;
    set answerOptionStructureChangeCallback(value: ((fhirAnswerOption: IFhirAnswerOption) => void) | undefined);
    get editmode(): boolean;
    set editmode(value: boolean);
    set buildingMode(value: boolean);
    get buildingMode(): boolean;
    get fhirAnswerOption(): IFhirAnswerOption;
    set fhirAnswerOption(value: IFhirAnswerOption);
    get documentGlobalVariables(): VariableDictionary;
    set documentGlobalVariables(value: VariableDictionary);
    get userInputValue(): string;
    get documentVariableValue(): string;
    set documentVariableValue(value: string);
    get documentVariableName(): string;
    get response(): IFhirBaseItemResponse | null;
    get responseTemplate(): IFhirBaseItemResponse | null;
    get initialResponse(): IFhirBaseItemResponse | undefined;
    set initialResponse(value: IFhirBaseItemResponse | undefined);
    get extensions(): IFhirItemExtension[];
    set extensions(value: IFhirItemExtension[]);
    get multichoice(): boolean;
    set multichoice(value: boolean);
    get inputGroupName(): string;
    set inputGroupName(value: string);
    get checked(): boolean;
    get responseExists(): boolean;
    get acrofieldUsed(): boolean;
    set acrofieldUsed(value: boolean);
    get valueWhenChecked(): Record<string, string>;
    set valueWhenChecked(value: Record<string, string>);
    satifies(enableWhen: IFhirClause[]): boolean;
    uncheck(preventEvent?: boolean): void;
    check(preventEvent?: boolean): void;
    hide(): void;
    show(): void;
    connectedCallback(): void;
    protected get observedInput(): HTMLElement;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    exportGdtData(): GdtRecord;
    importGdtData(gdtData: GdtRecord): void;
    resetState(): void;
    focus(options?: FocusOptions): void;
    observedItemChanged(item: AbstractFhirItemWidget): void;
    protected get userInputValueToUse(): string;
    protected updateInitialResponse(oldValue: IFhirBaseItemResponse, newValue: IFhirBaseItemResponse, areDifferent: boolean): void;
    protected getWidgetTemplate(): string;
    protected buildResponse(): IFhirBaseItemResponse | null;
    protected buildResponseTemplate(): IFhirBaseItemResponse;
    protected updateView(): void;
    protected answerChangedHandler(evt: Event): void;
    protected answerClickHandler(evt: Event): void;
    protected bindHandlers(): void;
    protected unbindHandlers(): void;
    protected updateLabelElement(valueCoding?: IFhirCoding, valueString?: string, initialSelected?: boolean): void;
    protected updateUserInputValue(value?: string): void;
    private updateExtensionsRegistry;
    private buildFhirValueCodingResponse;
    private showTooltip;
    private buildFhirStringResponse;
    private updateInputElement;
    private updateCodingValue;
    private attachLabelsToInputElement;
    private getInputElementType;
    private createEmptyData;
    private fhirItemClickHandler;
}

export declare class AnswerOptionTextItemWidget extends AnswerOptionItemWidget {
    static get TAG_NAME(): string;
    private readonly _textInputHandler;
    private readonly _focusinHandler;
    private _othersInputElement;
    private _othersInputDisabled;
    constructor();
    get fhirAnswerOption(): IFhirAnswerOption;
    set fhirAnswerOption(value: IFhirAnswerOption);
    get responseExists(): boolean;
    get editmode(): boolean;
    set editmode(value: boolean);
    setString(stringValue: string, preventEvent?: boolean): void;
    connectedCallback(): void;
    check(preventEvent?: boolean): void;
    uncheck(preventEvent?: boolean): void;
    resetState(): void;
    protected get userInputValueToUse(): string;
    protected buildResponse(): IFhirBaseItemResponse | null;
    protected buildResponseTemplate(): IFhirBaseItemResponse;
    protected getWidgetTemplate(): string;
    protected answerChangedHandler(evt: Event): void;
    protected answerClickHandler(evt: Event): void;
    protected bindHandlers(): void;
    protected unbindHandlers(): void;
    private updateSelectionRange;
    private textInputHandler;
    private focusinHandler;
}

export declare class AttachmentItemWidget extends AbstractFhirItemWidget {
    static get TAG_NAME(): string;
    get fhirType(): keyof IFhirItemTypeNamesMap;
    get acrofieldInValue(): string;
    get acrofieldOutValue(): string;
    set valueAsString(value: string);
    connectedCallback(): void;
    protected updateDocumentVariableValue(): void;
}

export declare class BooleanItemWidget extends AbstractFhirItemWidget {
    static get TAG_NAME(): string;
    private _yesInputElement;
    private _noInputElement;
    private _yesLabelElement;
    private _noLabelElement;
    constructor();
    get fhirType(): FhirItemTypeName;
    get acrofieldInValue(): string;
    get acrofieldOutValue(): string;
    get responseExists(): boolean;
    get responseYes(): boolean;
    get responseNo(): boolean;
    set yesInputElement(checked: boolean | undefined);
    set noInputElement(checked: boolean | undefined);
    set valueAsString(value: string);
    connectedCallback(): void;
    setRandom(): void;
    resetState(): void;
    protected updateDocumentVariableValue(): void;
    updateUserInputValue(value?: string): void;
    protected updateInitialResponse(oldValue: IFhirBaseItemResponse, newValue: IFhirBaseItemResponse, areDifferent: boolean): void;
    protected updateView(): void;
    protected buildAnswers(): IFhirItemResponse[];
    protected satisfies(enableWhen: IFhirClause[]): boolean;
    protected buildResponse(): IFhirBaseItemResponse;
    protected buildResponseTemplate(): IFhirBaseItemResponse;
    private widgetClickHandler;
    private optionNoClickHandler;
    private optionYesClickHandler;
    private attachLabelsToInputElement;
}

export type checkboxYesorNo = '[name="option-no"]' | '[name="option-yes"]';
export declare class ChoiceItemWidget extends AbstractFhirItemWidget {
    static get TAG_NAME(): string;
    protected _multichoice: boolean;
    protected _optionsContainterElement: HTMLElement;
    constructor();
    get fhirType(): FhirItemTypeName;
    get documentGlobalVariables(): VariableDictionary;
    set documentGlobalVariables(value: VariableDictionary);
    get answerOptions(): AnswerOptionItemWidget[];
    get acrofieldInValue(): string;
    get acrofieldOutValue(): string;
    get responseExists(): boolean;
    get filled(): number;
    get fhirItem(): IFhirItem;
    set fhirItem(value: IFhirItem);
    set fhirItemData(value: IFhirChoiceItem);
    set valueAsString(value: string);
    extendAnswerList(answerOption: AnswerOptionTextItemWidget): void;
    exportGdtData(): GdtRecord;
    setRandom(): void;
    protected updateDocumentVariableValue(): void;
    updateUserInputValue(value?: string): void;
    private checkAnswer;
    private choseOneRandomly;
    private setMultichoiceRandomly;
    resetAnswers(): void;
    setupState(inputData: IFhirGroupItemResponse): void;
    resetState(): void;
    connectedCallback(): void;
    protected get optionItems(): AnswerOptionItemWidget[];
    protected updateInitialResponse(oldValue: IFhirBaseItemResponse, newValue: IFhirBaseItemResponse, areDifferent: boolean): void;
    protected satisfies(enableWhen: IFhirClause[]): boolean;
    protected buildAnswers(): IFhirItemResponse[];
    protected buildAnswerTemplates(): IFhirItemResponse[];
    protected buildResponse(): IFhirBaseItemResponse;
    protected buildResponseTemplate(): IFhirBaseItemResponse;
    protected updateView(): void;
    private answerOptionChangeHandler;
    private answerOptionLabelChangeHandler;
    private answerOptionIdChangeHandler;
    private buildTextAnswerOption;
    private setupChoicePartialState;
    private existItemAnswerSatisfyingClause;
    private createOptionWidget;
    private answerOptionStructureChangeCallbackHandler;
    private exclusiveOptionChanged;
    private checkAcrofieldExtensionExist;
}

export declare class DateItemWidget extends AbstractFhirItemWidget {
    static get TAG_NAME(): string;
    private readonly _dateChoosenHandler;
    private readonly _inputFocusedHandler;
    private _datePickerElement;
    private _calendarElement;
    private _valueChanged;
    private _dateItemType;
    constructor();
    get dateItemType(): DateItemDisplay;
    set dateItemType(value: DateItemDisplay);
    get acrofieldInValue(): string;
    get acrofieldOutValue(): string;
    get editmode(): boolean;
    set editmode(value: boolean);
    get fhirType(): FhirItemTypeName;
    set date(date: string);
    get date(): string;
    set valueAsString(value: string);
    get valueAsDate(): Date | null;
    set valueAsDate(value: Date | null);
    set language(language: string);
    get responseExists(): boolean;
    connectedCallback(): void;
    setRandom(): void;
    focus(options?: FocusOptions): void;
    disconnectedCallback(): void;
    disableDateItem(): void;
    changeConfiguration(configuration: DatePickerComponentConfigurationType): void;
    protected updateDocumentVariableValue(): void;
    updateUserInputValue(value?: string): void;
    protected toAcrofieldInputValue(initialValue: string): string;
    protected updateInitialResponse(oldValue: IFhirBaseItemResponse, newValue: IFhirBaseItemResponse, areDifferent: boolean): void;
    protected satisfies(enableWhen: IFhirClause[]): boolean;
    protected buildAnswers(): IFhirItemResponse[];
    protected buildAnswerTemplates(): IFhirItemResponse[];
    protected buildResponseTemplate(): IFhirBaseItemResponse;
    protected buildResponse(): IFhirBaseItemResponse | null;
    protected updateView(): void;
    private initializeDatePicker;
    private dateChoosenHandler;
    private prepareDateToFilling;
    private configureLanguage;
    private bindHandlers;
    private unbindHandlers;
    private inputFocusedHandler;
}

export declare class DecimalItemWidget extends AbstractFhirItemWidget {
    static get TAG_NAME(): string;
    private _decimalInputElement;
    constructor();
    get fhirType(): FhirItemTypeName;
    get acrofieldInValue(): string;
    get acrofieldOutValue(): string;
    get responseExists(): boolean;
    set decimalInput(valueDecimal: Number);
    set valueAsString(value: string);
    connectedCallback(): void;
    setRandom(): void;
    resetState(): void;
    protected updateDocumentVariableValue(): void;
    protected updateInitialResponse(oldValue: IFhirBaseItemResponse, newValue: IFhirBaseItemResponse, areDifferent: boolean): void;
    protected satisfies(enableWhen: IFhirClause[]): boolean;
    protected buildAnswers(): IFhirItemResponse[];
    protected buildAnswerTemplates(): IFhirItemResponse[];
    protected buildResponse(): IFhirBaseItemResponse | null;
    protected buildResponseTemplate(): IFhirBaseItemResponse;
    protected updateView(): void;
    private get inputPattern();
    private bindHandlers;
    private getCurrentDecimalValue;
    private decimalFocusinHandler;
    private inputHandler;
    private updateSelection;
}

export declare class DisplayItemWidget extends AbstractFhirItemWidget {
    static get TAG_NAME(): string;
    private _extensionDataElement;
    constructor();
    get fhirType(): keyof IFhirItemTypeNamesMap;
    get acrofieldInValue(): string;
    get acrofieldOutValue(): string;
    set valueAsString(value: string);
    get extensions(): IFhirItemExtension[];
    get fhirItem(): IFhirItem;
    set fhirItem(value: IFhirItem);
    connectedCallback(): void;
    protected updateDocumentVariableValue(): void;
    protected updateView(): void;
}

export declare class FhirFormBannerWidget extends HTMLElement {
    static get TAG_NAME(): string;
    private _titleElement;
    private _descriptionElement;
    constructor();
    get title(): string;
    set title(value: string);
    get description(): string;
    set description(value: string);
    connectedCallback(): void;
}

export type FhirItemStructureChangedCallback = (fhirItem: IFhirItem, refreshView: boolean) => void;

export interface IFhirPageNavigationPanelEventMap extends HTMLElementEventMap {
    goFirstPage: Event;
    goNextPage: Event;
    goPreviousPage: Event;
    goLastPage: Event;
}
export declare class FhirPageNavigationPanel extends HTMLElement {
    static get TAG_NAME(): string;
    private readonly DEFAULT_INFO_TEXT_TEMPLATE;
    private _infoElement;
    private _goFirstElement;
    private _goNextElement;
    private _goPreviousElement;
    private _goLastElement;
    private _totalPages;
    private _currentPageIndex;
    private _infoTextTemplate;
    constructor();
    get hidden(): boolean;
    set hidden(value: boolean);
    get infoTextTemplate(): string;
    set infoTextTemplate(value: string);
    get totalPages(): number;
    set totalPages(value: number);
    get currentPageIndex(): number;
    set currentPageIndex(value: number);
    connectedCallback(): void;
    addEventListener<K extends keyof IFhirPageNavigationPanelEventMap>(type: K, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IFhirPageNavigationPanelEventMap>(type: K, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    initialize(currentPage: number, totalPages: number, infoTemplate?: string): void;
    private updateView;
    private bindhandlers;
    private dispatchPanelEvent;
}

export declare class GenericGroupItemWidget extends GroupItemWidget {
    static get TAG_NAME(): string;
    get fhirType(): FhirItemTypeName;
    connectedCallback(): void;
}

export declare class GenericItemWidget extends AbstractFhirItemWidget {
    static get TAG_NAME(): string;
    private _inputElement;
    constructor();
    get fhirType(): FhirItemTypeName;
    get acrofieldInValue(): string;
    get acrofieldOutValue(): string;
    get inputElement(): HTMLInputElement;
    set valueAsString(value: string);
    connectedCallback(): void;
    resetState(): void;
    protected updateDocumentVariableValue(): void;
    protected updateView(): void;
}

export declare class GroupItemWidget extends AbstractFhirItemWidget {
    static get TAG_NAME(): string;
    private _itemsContainer;
    private _headElement;
    private _subtitleElement;
    private _expandIcon;
    constructor();
    get fhirType(): FhirItemTypeName;
    get documentGlobalVariables(): VariableDictionary;
    set documentGlobalVariables(value: VariableDictionary);
    get acrofieldInValue(): string;
    get acrofieldOutValue(): string;
    set valueAsString(value: string);
    get itemsContainer(): HTMLElement;
    get fhirChildItems(): AbstractFhirItemWidget[];
    get observedItems(): IFhirFormObserverSubscriber[];
    get responseExists(): boolean;
    get filled(): number;
    get isHidden(): boolean;
    get isDisabled(): boolean;
    get tabIndex(): number;
    set tabIndex(value: number);
    set expandable(value: boolean);
    get headerVisible(): boolean;
    set headerVisible(value: boolean);
    get headElement(): HTMLElement;
    get conspectNumber(): number[];
    set conspectNumber(value: number[]);
    connectedCallback(): void;
    resetState(): void;
    hide(): void;
    show(): void;
    showConspectNumber(): void;
    setRandom(): void;
    collapse(): void;
    expand(): void;
    removeItem(widgetToremove: AbstractFhirItemWidget): void;
    moveItemUp(widget: AbstractFhirItemWidget, group: GroupItemWidget): MoveItemResult;
    moveItemDown(widget: AbstractFhirItemWidget, group: GroupItemWidget): MoveItemResult;
    insertItemAt(index: number, widget: AbstractFhirItemWidget): MoveItemResult;
    exportGdtData(): GdtRecord;
    protected updateDocumentVariableValue(): void;
    protected updateView(): void;
    protected buildResponse(): IFhirBaseItemResponse;
    protected buildResponseTemplate(): IFhirBaseItemResponse;
    private fhirItemLabelChangeHandler;
    private fhirItemIdChangeHandler;
    private itemStructureChangeHandler;
    private focusChangedHandler;
    private updateSubtitle;
    private childItemChangeHandler;
    private toggleSectionHandler;
}

export declare class IntegerItemWidget extends AbstractFhirItemWidget {
    static get TAG_NAME(): string;
    private readonly MAX_SELECTION;
    private _integerInputElement;
    constructor();
    get fhirType(): FhirItemTypeName;
    set valueAsString(value: string);
    get acrofieldInValue(): string;
    get acrofieldOutValue(): string;
    get responseExists(): boolean;
    set integerValue(valueInt: Number);
    connectedCallback(): void;
    setRandom(): void;
    resetState(): void;
    protected updateDocumentVariableValue(): void;
    protected updateInitialResponse(oldValue: IFhirBaseItemResponse, newValue: IFhirBaseItemResponse, areDifferent: boolean): void;
    protected satisfies(enableWhen: IFhirClause[]): boolean;
    protected buildAnswers(): IFhirItemResponse[];
    protected buildAnswerTemplates(): IFhirItemResponse[];
    protected buildResponse(): IFhirBaseItemResponse;
    protected buildResponseTemplate(): IFhirBaseItemResponse;
    private bindHandlers;
    private inputFocusinHandler;
    private inputInputHandler;
    private updateSelection;
}

export declare class OpenChoiceItemWidget extends ChoiceItemWidget {
    static get TAG_NAME(): string;
    private _linkIdOutputBuilder;
    constructor();
    get fhirType(): FhirItemTypeName;
    get responseExists(): boolean;
    connectedCallback(): void;
    setupState(inputData: IFhirGroupItemResponse): void;
    resetState(): void;
    protected updateDocumentVariableValue(): void;
    updateUserInputValue(value?: string): void;
    protected updateView(): void;
    private setupStringPartialState;
}

export declare class SignatureItemWidget extends AttachmentItemWidget {
    static get TAG_NAME(): string;
    get fhirType(): keyof IFhirItemTypeNamesMap;
    get acrofieldInValue(): string;
    get fhirItem(): IFhirItem;
    set valueAsString(value: string);
    set fhirItem(value: IFhirItem);
    get responseExists(): boolean;
    private get signatureElement();
    protected buildAnswerTemplates(): IFhirItemResponse[];
    protected buildResponseTemplate(): IFhirBaseItemResponse;
    protected updateInitialResponse(oldValue: IFhirBaseItemResponse, newValue: IFhirBaseItemResponse, areDifferent: boolean): void;
}

export declare class StringItemWidget extends AbstractFhirItemWidget {
    static get TAG_NAME(): string;
    private readonly MAX_SELECTION;
    private _inputElement;
    constructor();
    get fhirType(): FhirItemTypeName;
    get acrofieldInValue(): string;
    set valueAsString(value: string);
    get acrofieldOutValue(): string;
    get responseExists(): boolean;
    connectedCallback(): void;
    setRandom(): void;
    resetState(): void;
    protected updateDocumentVariableValue(): void;
    updateUserInputValue(value?: string): void;
    protected updateInitialResponse(oldValue: IFhirBaseItemResponse, newValue: IFhirBaseItemResponse, areDifferent: boolean): void;
    protected satisfies(enableWhen: IFhirClause[]): boolean;
    protected updateView(): void;
    protected buildAnswers(): IFhirItemResponse[];
    protected buildAnswerTemplates(): IFhirItemResponse[];
    protected buildResponse(): IFhirBaseItemResponse;
    protected buildResponseTemplate(): IFhirBaseItemResponse;
    private focusinHandler;
    private inputHandler;
}

export declare class TextItemWidget extends StringItemWidget {
    static get TAG_NAME(): string;
    get fhirType(): FhirItemTypeName;
}

export declare class FhirFormObserver {
    private static _instance;
    static get instance(): FhirFormObserver;
    private readonly NO_ITEMS_OBSERVED;
    private _fhirForm?;
    private _observedItems;
    private _observedItemChangedHandler;
    private constructor();
    enableWhenDoneCallback?: () => void;
    observe(fhirForm: FhirFormWidget): void;
    stopObserving(): void;
    clear(): void;
    register(subscriptions: IFhirFormObserverSubscriber[]): void;
    private subscribe;
    private observedItemChangedHandler;
    private notifyObservingItems;
}

export interface IFhirFormObserverSubscriber {
    subscriberLinkId: string;
    observedItemLinkId: string;
}

export type FhirFormBuildProgressCallback = (fhirItem: HTMLElement, presentItemsTotal: number, ofTotal: number) => void;

export type FhirFormBuildingDoneCallback = (fhirItem: HTMLElement) => void;

export declare class FhirFormBuildingObserver {
    static instanceCounter: number;
    private readonly _fhirItemAddedToViewHandler;
    private readonly _fhirItemRemovedFromViewHandler;
    private _expectedItemsTotal;
    private _fhirForm?;
    private _buildingDoneCallback;
    private _buildProgressCallback;
    private _presentItemsTotal;
    private _instanceId;
    constructor(fhirForm: FhirFormWidget, expectedItemsTotal: number);
    set buildProgressCallback(value: FhirFormBuildProgressCallback);
    set buildingDoneCallback(value: FhirFormBuildingDoneCallback);
    dispose(): void;
    private bindBuildingHandlers;
    private fhirItemRemovedFromViewHandler;
    private fhirItemAddedToViewHandler;
    private muteBuildProgressCallback;
    private muteBuildingDoneCallback;
}

export declare class GroupPerPagePagingControler implements IPagingControler {
    private _fhirWidget?;
    private _viewportHeight;
    private _totalPages;
    private _currentPageIndex;
    private _forceNavigation;
    constructor(minPageHeight?: number);
    onChangeCallback?: (currentPage: number, totalPages: number) => void;
    get viewportHeight(): number;
    get totalPages(): number;
    get currentPageIndex(): number;
    set currentPageIndex(value: number);
    attach(fhirWidget: FhirFormWidget, goToPageIndex?: number, minPageHeight?: number): void;
    isRebuildNeeded(changedItem: AbstractFhirItemWidget): boolean;
    dispose(): void;
    private clearPagingInfo;
    private get pagedItems();
    private get hiddenPageItems();
    private resetPageMinHeight;
    private updateItemsPageAssignment;
    private assignPageNumber;
    private pageIndexToPageId;
    private windowResizeHandler;
}

export interface IPagingControler {
    readonly viewportHeight: number;
    readonly totalPages: number;
    currentPageIndex: number;
    onChangeCallback?: (currentPageIndex: number, totalPages: number) => void;
    attach(fhirWidget: FhirFormWidget, goToPageIndex?: number, minPageHeight?: number): void;
    isRebuildNeeded(changedItem: AbstractFhirItemWidget): boolean;
    dispose(): void;
}

export declare class OneContinousePage implements IPagingControler {
    private _totalPages;
    private _currentPageIndex;
    private _viewportHeight;
    constructor();
    get viewportHeight(): number;
    get totalPages(): number;
    get currentPageIndex(): number;
    set currentPageIndex(value: number);
    onChangeCallback?: (currentPage: number, totalPages: number) => void;
    attach(fhirWidget: FhirFormWidget, goToPageIndex?: number, minPageHeight?: number): void;
    isRebuildNeeded(changedItem: AbstractFhirItemWidget): boolean;
    getItemPage(item: AbstractFhirItemWidget): number;
    dispose(): void;
}

export declare class PagingControlerFactory {
    static createControler(controlerType: PagingControlerType): IPagingControler;
}

export type PagingControlerType = 'OneContinousePage' | 'GroupPerPage';

