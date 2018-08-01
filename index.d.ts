// Type definitions for react-select 2.0
// Project: https://github.com/JedWatson/react-select
// Definitions by: AJ Kovalainen <https://github.com/Darep>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from 'react';

export default class ReactSelectClass extends React.Component<
    ReactSelectProps
> {
    blur(): void;
    focus(): void;
}

// Handlers
export type FocusEventHandler = React.FocusEventHandler<HTMLElement>;
export type MouseEventHandler = React.MouseEventHandler<HTMLElement>;
export type KeyboardEventHandler = React.KeyboardEventHandler<HTMLElement>;

export interface OptionType {
    [key: string]: any;
}

export type OptionsType = OptionType[];

export type ValueType = OptionType | OptionsType | null | undefined;

export type ActionTypes =
    | 'select-option'
    | 'deselect-option'
    | 'remove-value'
    | 'pop-value'
    | 'set-value'
    | 'clear'
    | 'create-option';

export interface ActionMeta {
    action: ActionTypes;
}

export type InputActionTypes =
    | 'set-value'
    | 'input-change'
    | 'input-blur'
    | 'menu-close';

export interface InputActionMeta {
    action: InputActionTypes;
}

export type MenuPlacement = 'auto' | 'bottom' | 'top';
export type MenuPosition = 'absolute' | 'fixed';

export interface StyleProps {
    [key: string]: any;
}

export type StyleFn = (props: StyleProps) => {};

// https://github.com/JedWatson/react-select/blob/master/src/styles.js#L35
export interface StylesConfig {
    [key: string]: StyleFn | undefined;

    clearIndicator?: StyleFn;
    container?: StyleFn;
    control?: StyleFn;
    dropdownIndicator?: StyleFn;
    group?: StyleFn;
    groupHeading?: StyleFn;
    indicatorsContainer?: StyleFn;
    indicatorSeparator?: StyleFn;
    input?: StyleFn;
    loadingIndicator?: StyleFn;
    loadingMessageCSS?: StyleFn;
    menu?: StyleFn;
    menuList?: StyleFn;
    menuPortal?: StyleFn;
    multiValue?: StyleFn;
    multiValueLabel?: StyleFn;
    multiValueRemove?: StyleFn;
    noOptionsMessageCSS?: StyleFn;
    option?: StyleFn;
    placeholder?: StyleFn;
    singleValue?: StyleFn;
    valueContainer?: StyleFn;
}

export interface InnerProps {
    id: string;
    key: string;
    onClick: MouseEventHandler;
    onMouseOver: MouseEventHandler;
    tabIndex: number;
}

export interface CommonProps {
    clearValue?(): void;
    className?: string;
    cx?: (
        a: string | null,
        b: object | undefined,
        c: string | undefined
    ) => string | undefined;
    /**
     * Get the styles of a particular part of the select. Pass in the name of the
     *  property as the first argument, and the current props as the second argument.
     *  See the `styles` object for the properties available.
     */
    getStyles: (base: string, state: any) => {};
    getValue: () => ValueType;
    hasValue: boolean;
    isMulti: boolean;
    options: OptionsType;
    selectOption: (option: OptionType) => void;
    selectProps: any;
    setValue(newValue: ValueType, action: ActionTypes): void;
}

// Components
export interface ContainerProps extends CommonProps {
    /** Whether the select is disabled. */
    isDisabled: boolean;
    /** Whether the text in the select is indented from right to left. */
    isRtl: boolean;
    /** The children to be rendered. */
    children: Node;
    /** Inner props to be passed down to the container. */
    innerProps: { onKeyDown: KeyboardEventHandler };
}

export interface OptionProps extends CommonProps {
    getStyles: (base: string, state: any) => {};
    /** Whether the option is disabled. */
    isDisabled: boolean;
    /** Whether the option is focused. */
    isFocused: boolean;
    /** Whether the option is selected. */
    isSelected: boolean;
    /** The children to be rendered. */
    children: Node;
    /** Inner ref to DOM Node */
    innerRef: React.Ref<any>;
    /** props passed to the wrapping element for the group. */
    innerProps: InnerProps;
    /* Text to be displayed representing the option. */
    label: string;
    /* Type is used by the menu to determine whether this is an option or a group.
    In the case of option this is always `option`. */
    type: 'option';
}

export interface IndicatorProps extends CommonProps {
    /** The children to be rendered inside the indicator. */
    children: Node;
    /** Props that will be passed on to the children. */
    innerProps: any;
    /** The focused state of the select. */
    isFocused: boolean;
    /** Whether the text is right to left */
    isRtl: boolean;
}

export interface ControlProps extends CommonProps {
    /** Whether the select is disabled. */
    isDisabled: boolean;
    /** Whether the select is focused. */
    isFocused: boolean;
    /** The mouse down event and the innerRef to pass down to the controller element. */
    innerProps: {
        innerProps?: { onMouseDown?: React.MouseEvent<HTMLElement> };
    };
    innerRef: React.RefObject<any>;
}

export interface GroupProps extends CommonProps {
    /** Component to wrap the label, recieves headingProps. */
    Heading: React.ComponentType<any>;
    /** Label to be displayed in the heading component. */
    label: Node;
}

export interface PlaceholderProps extends CommonProps {
    /** The children to be rendered. */
    children: Node;
    /** props passed to the wrapping element for the group. */
    innerProps: { [key: string]: any };
}

export interface IndicatorContainerProps extends CommonProps {
    /** Whether the text should be rendered right to left. */
    isRtl: boolean;
}

export interface InputProps {
    getStyles: (base: string, state: any) => {};
    cx?: (
        a: string | null,
        b: object | undefined,
        c: string | undefined
    ) => string | undefined;
    /** Reference to the internal element */
    innerRef: (ref: React.RefObject<any>) => void;
    /** Set whether the input should be visible. Does not affect input size. */
    isHidden: boolean;
    /** Whether the input is disabled */
    isDisabled?: boolean;
    className?: string;
}

export interface LoadingIconProps extends CommonProps {
    /** Props that will be passed on to the children. */
    innerProps: any;
    /** The focused state of the select. */
    isFocused: boolean;
    /** Whether the text is right to left */
    isRtl: boolean;
    /** Set size of the container. */
    size: number;
}

export interface MenuState {
    placement: 'bottom' | 'top' | null;
    maxHeight: number;
}

export interface MenuProps extends CommonProps {
    /** The children to be rendered. */
    children: React.ReactElement<any>;
    /** Callback to update the portal after possible flip. */
    getPortalPlacement: (state: MenuState) => void;
    /** Props to be passed to the menu wrapper. */
    innerProps: object;
    /** Set the maximum height of the menu. */
    maxMenuHeight: number;
    /** Set whether the menu should be at the top, at the bottom. The auto options ¨ it to bottom. */
    menuPlacement: MenuPlacement;
    /* The CSS position value of the menu, when "fixed" extra layout management is required */
    menuPosition: MenuPosition;
    /** Set the minimum height of the menu. */
    minMenuHeight: number;
    /** Set whether the page should scroll to show the menu. */
    menuShouldScrollIntoView: boolean;
}

export interface MenuListState {
    /** Set classname for isMulti */
    isMulti: boolean;
    /* Set the max height of the Menu component  */
    maxHeight: number;
}

export interface MenuListProps {
    /** The children to be rendered. */
    children: Node;
    /** Inner ref to DOM Node */
    innerRef: React.Ref<any>;
}

export type MenuListComponentProps = CommonProps &
    MenuListProps &
    MenuListState;

export interface MenuPortalProps extends CommonProps {
    appendTo: HTMLElement;
    children: Node; // ideally Menu<MenuProps>
    controlElement: HTMLElement;
    menuPlacement: MenuPlacement;
    menuPosition: MenuPosition;
}

export interface NoticeProps extends CommonProps {
    /** The children to be rendered. */
    children: Node;
    /** Props to be passed on to the wrapper. */
    innerProps: { [key: string]: any };
}

export interface MultiValueProps extends CommonProps {
    children: Node;
    components: any;
    cropWithEllipsis: boolean;
    data: any;
    innerProps: any;
    isFocused: boolean;
    isDisabled: boolean;
    removeProps: {
        onTouchEnd: (e: any) => void;
        onClick: (e: any) => void;
        onMouseDown: (e: any) => void;
    };
}

export interface SingleValueProps extends CommonProps {
    /** Whether this is disabled */
    isDisabled: boolean;
    /** The children to be rendered. */
    children: string;
    /* The data of the selected option rendered in the Single Value componentn */
    data: any;
    /** Props passed to the wrapping element for the group. */
    innerProps: any;
}

export interface SelectComponentsConfig {
    ClearIndicator?: React.ComponentType<IndicatorProps>;
    Control?: React.ComponentType<ControlProps>;
    DropdownIndicator?: React.ComponentType<IndicatorProps>;
    DownChevron?: React.ComponentType<any>;
    CrossIcon?: React.ComponentType<any>;
    Group?: React.ComponentType<GroupProps>;
    GroupHeading?: React.ComponentType<any>;
    IndicatorsContainer?: React.ComponentType<IndicatorContainerProps>;
    IndicatorSeparator?: React.ComponentType<IndicatorProps>;
    Input?: React.ComponentType<InputProps>;
    LoadingIndicator?: React.ComponentType<LoadingIconProps>;
    Menu?: React.ComponentType<MenuProps>;
    MenuList?: React.ComponentType<MenuListComponentProps>;
    MenuPortal?: React.ComponentType<MenuPortalProps>;
    LoadingMessage?: React.ComponentType<NoticeProps>;
    NoOptionsMessage?: React.ComponentType<NoticeProps>;
    MultiValue?: React.ComponentType<MultiValueProps>;
    MultiValueContainer?: React.ComponentType<any>;
    MultiValueLabel?: React.ComponentType<any>;
    MultiValueRemove?: React.ComponentType<any>;
    Option?: React.ComponentType<OptionProps>;
    Placeholder?: React.ComponentType<PlaceholderProps>;
    SelectContainer?: React.ComponentType<ContainerProps>;
    SingleValue?: React.ComponentType<SingleValueProps>;
    ValueContainer?: React.ComponentType<ContainerProps>;
}

export const components: {
    ClearIndicator: React.ComponentType;
    Control: React.ComponentType;
    DropdownIndicator: React.ComponentType;
    DownChevron: React.ComponentType;
    CrossIcon: React.ComponentType;
    Group: React.ComponentType;
    GroupHeading: React.ComponentType;
    IndicatorsContainer: React.ComponentType;
    IndicatorSeparator: React.ComponentType;
    Input: React.ComponentType;
    LoadingIndicator: React.ComponentType;
    Menu: React.ComponentType;
    MenuList: React.ComponentType;
    MenuPortal: React.ComponentType;
    LoadingMessage: React.ComponentType;
    NoOptionsMessage: React.ComponentType;
    MultiValue: React.ComponentType;
    MultiValueContainer: React.ComponentType;
    MultiValueLabel: React.ComponentType;
    MultiValueRemove: React.ComponentType;
    Option: React.ComponentType;
    Placeholder: React.ComponentType;
    SelectContainer: React.ComponentType;
    SingleValue: React.ComponentType;
    ValueContainer: React.ComponentType;
};

export type FormatOptionLabelContext = 'menu' | 'value';

export interface FormatOptionLabelMeta {
    context: FormatOptionLabelContext;
    inputValue: string;
    selectValue: ValueType;
}

export type GetOptionLabel = (option: OptionType) => string;
export type GetOptionValue = (option: OptionType) => string;

export interface GroupType {
    [key: string]: any;
    options: OptionsType;
}

export type FormatGroupLabel = (group: GroupType) => Node;

export function mergeStyles(source: object, target: object): {};

export interface FilterConfig {
    ignoreCase?: boolean;
    ignoreAccents?: boolean;
    stringify?: (obj: object) => string;
    trim?: boolean;
    matchFrom?: 'any' | 'start';
}

export function createFilter(
    config: FilterConfig
): (option: object, input: string) => boolean;

export function makeAnimated(
    externalComponents?: SelectComponentsConfig
): SelectComponentsConfig;

// Async
export interface AsyncProps {
    /* The default set of options to show before the user starts searching. When
     set to `true`, the results for loadOptions('') will be autoloaded. */
    defaultOptions?: OptionsType | boolean;
    /* Function that returns a promise, which is the set of options to be used
     once the promise resolves. */
    loadOptions?: (
        inputValue: string,
        callback: ((options: OptionsType) => void)
    ) => Promise<any> | void;
    /* If cacheOptions is truthy, then the loaded data will be cached. The cache
     will remain until `cacheOptions` changes value. */
    cacheOptions?: any;
}

export interface AsyncState {
    defaultOptions?: OptionsType;
    inputValue: string;
    isLoading: boolean;
    loadedInputValue?: string;
    loadedOptions: OptionsType;
    passEmptyOptions: boolean;
}

export class Async extends React.Component<
    ReactSelectProps & AsyncProps,
    AsyncState
> {}

// AsyncCreatable
export class AsyncCreatable extends React.Component<
    ReactSelectProps & AsyncProps & CreatableProps,
    AsyncState
> {}

// Creatable
export interface CreatableProps {
    /* Allow options to be created while the `isLoading` prop is true. Useful to
     prevent the "create new ..." option being displayed while async results are
     still being loaded. */
    allowCreateWhileLoading?: boolean;
    /* Gets the label for the "create new ..." option in the menu. Is given the
     current input value. */
    formatCreateLabel?: (inputValue: string) => Node;
    /* Determines whether the "create new ..." option should be displayed based on
     the current input value, select value and options array. */
    isValidNewOption?: (
        inputValue: string,
        value: ValueType,
        options: OptionsType
    ) => boolean;
    /* Returns the data for the new option when it is created. Used to display the
     value, and is passed to `onChange`. */
    getNewOptionData?: (inputValue: string, optionLabel: Node) => OptionType;
    /* If provided, this will be called with the input value when a new option is
     created, and `onChange` will **not** be called. Use this when you need more
     control over what happens when new options are created. */
    onCreateOption?: (inputValue: string) => void;
    /* Sets the position of the createOption element in your options list. Defaults to 'last' */
    createOptionPosition?: 'first' | 'last';
}

export interface CreatableState {
    newOption: OptionType | undefined;
    options: OptionsType;
}

export class Creatable extends React.Component<
    ReactSelectProps & CreatableProps,
    CreatableState
> {}

/* Props */
export interface ReactSelectProps {
    /* Aria label (for assistive tech) */
    'aria-label'?: string;
    /* HTML ID of an element that should be used as the label (for assistive tech) */
    'aria-labelledby'?: string;
    /* Focus the control when it is mounted */
    autoFocus?: boolean;
    /* Remove the currently focused option when the user presses backspace */
    backspaceRemovesValue?: boolean;
    /* Remove focus from the input when the user selects an option (handy for dismissing the keyboard on touch devices) */
    blurInputOnSelect?: boolean;
    /* When the user reaches the top/bottom of the menu, prevent scroll on the scroll-parent  */
    captureMenuScroll?: boolean;
    /* className attribute applied to the outer component */
    className?: string;
    /* classNamePrefix attribute used as a base for inner component classNames */
    classNamePrefix?: string | null;
    /* Close the select menu when the user selects an option */
    closeMenuOnSelect?: boolean;
    /*
        If `true`, close the select menu when the user scrolls the document/body.
        If a function, takes a standard javascript `ScrollEvent` you return a boolean:
        `true` => The menu closes
        `false` => The menu stays open
        This is useful when you have a scrollable modal and want to portal the menu out,
        but want to avoid graphical issues.
    */
    closeMenuOnScroll?: boolean | EventListener;
    /*
        This complex object includes all the compositional components that are used
        in `react-select`. If you wish to overwrite a component, pass in an object
        with the appropriate namespace.
        If you only wish to restyle a component, we recommend using the `styles` prop
        instead. For a list of the components that can be passed in, and the shape
        that will be passed to them, see [the components docs](/api#components)
    */
    components?: SelectComponentsConfig;
    /* Whether the value of the select, e.g. SingleValue, should be displayed in the control. */
    controlShouldRenderValue?: boolean;
    defaultValue?: ValueType;
    /* Delimiter used to join multiple values into a single HTML Input value */
    delimiter?: string;
    /* Clear all values when the user presses escape AND the menu is closed */
    escapeClearsValue?: boolean;
    /* Custom method to filter whether an option should be displayed in the menu */
    filterOption?: ((option: object, input: string) => boolean) | null;
    /* Formats group labels in the menu as React components */
    formatGroupLabel?: FormatGroupLabel;
    /* Formats option labels in the menu and control as React components */
    formatOptionLabel?: (
        option: OptionType,
        labelMeta: FormatOptionLabelMeta
    ) => Node;
    /* Resolves option data to a string to be displayed as the label by components */
    getOptionLabel?: GetOptionLabel;
    /* Resolves option data to a string to compare options and specify value attributes */
    getOptionValue?: GetOptionValue;
    /* Hide the selected option from the menu */
    hideSelectedOptions?: boolean;
    /* The id to set on the SelectContainer component. */
    id?: string;
    /* The value of the search input */
    inputValue?: string;
    /* The id of the search input */
    inputId?: string;
    /* Define an id prefix for the select components e.g. {your-id}-value */
    instanceId?: number | string;
    /* Is the select value clearable */
    isClearable?: boolean;
    /* Is the select disabled */
    isDisabled?: boolean;
    /* Is the select in a state of loading (async) */
    isLoading?: boolean;
    /* Override the built-in logic to detect whether an option is disabled */
    isOptionDisabled?: (
        option: OptionType,
        options: OptionsType
    ) => boolean | false;
    /* Override the built-in logic to detect whether an option is selected */
    isOptionSelected?: (option: OptionType, options: OptionsType) => boolean;
    /* Support multiple selected options */
    isMulti?: boolean;
    /* Is the select direction right-to-left */
    isRtl?: boolean;
    /* Whether to enable search functionality */
    isSearchable?: boolean;
    /* Async: Text to display when loading options */
    loadingMessage?: ({ inputValue }: { inputValue: string }) => string | null;
    /* Minimum height of the menu before flipping */
    minMenuHeight?: number;
    /* Maximum height of the menu before scrolling */
    maxMenuHeight?: number;
    /* Whether the menu is open */
    menuIsOpen?: boolean;
    /* Default placement of the menu in relation to the control. 'auto' will flip
    when there isn't enough space below the control. */
    menuPlacement?: MenuPlacement;
    /* The CSS position value of the menu, when "fixed" extra layout management is required */
    menuPosition?: MenuPosition;
    /* Whether the menu should use a portal, and where it should attach */
    menuPortalTarget?: HTMLElement;
    /* Whether to block scroll events when the menu is open */
    menuShouldBlockScroll?: boolean;
    /* Whether the menu should be scrolled into view when it opens */
    menuShouldScrollIntoView?: boolean;
    /* Name of the HTML Input (optional - without this, no input will be rendered) */
    name?: string;
    /* Text to display when there are no options */
    noOptionsMessage?: (
        { inputValue }: { inputValue: string }
    ) => string | null;
    /* Handle blur events on the control */
    onBlur?: FocusEventHandler;
    /* Handle change events on the select */
    onChange?: (value: ValueType, actionMeta: ActionMeta) => void;
    /* Handle focus events on the control */
    onFocus?: FocusEventHandler;
    /* Handle change events on the input */
    onInputChange?: (value: string, action: InputActionMeta) => void;
    /* Handle key down events on the select */
    onKeyDown?: KeyboardEventHandler;
    /* Handle the menu opening */
    onMenuOpen?(): void;
    /* Handle the menu closing */
    onMenuClose?(): void;
    /* Fired when the user scrolls to the top of the menu */
    onMenuScrollToTop?: (event: React.SyntheticEvent<HTMLElement>) => void;
    /* Fired when the user scrolls to the bottom of the menu */
    onMenuScrollToBottom?: (event: React.SyntheticEvent<HTMLElement>) => void;
    /* Allows control of whether the menu is opened when the Select is focused */
    openMenuOnFocus?: boolean;
    /* Allows control of whether the menu is opened when the Select is clicked */
    openMenuOnClick?: boolean;
    /* Array of options that populate the select menu */
    options?: OptionsType;
    /* Number of options to jump in menu when page{up|down} keys are used */
    pageSize?: number;
    /* Placeholder text for the select value */
    placeholder?: string;
    /* Status to relay to screen readers */
    screenReaderStatus?: ({ count }: { count: number }) => string;
    /* Style modifier methods */
    styles?: StylesConfig;
    /* Sets the tabIndex attribute on the input */
    tabIndex?: string;
    /* Select the currently focused option when the user presses tab */
    tabSelectsValue?: boolean;
    /* The value of the select; reflected by the selected option */
    value?: ValueType;
}
