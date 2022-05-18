const e={key:"v-028c549c",path:"/components/FormTags.html",title:"Form Tags",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Basic usage",slug:"basic-usage",children:[]},{level:2,title:"Tag creation using separators",slug:"tag-creation-using-separators",children:[]},{level:2,title:"Last tag removal via backspace keypress",slug:"last-tag-removal-via-backspace-keypress",children:[]},{level:2,title:"Styling Options",slug:"styling-options",children:[]},{level:2,title:"Using with native browser <form> submission",slug:"using-with-native-browser-form-submission",children:[]},{level:2,title:"Tag validation",slug:"tag-validation",children:[]},{level:2,title:"Detecting new, invalid, and duplicate tags",slug:"detecting-new-invalid-and-duplicate-tags",children:[]},{level:2,title:"Limiting tags",slug:"limiting-tags",children:[]},{level:2,title:"Custom rendering with default scoped slot",slug:"custom-rendering-with-default-scoped-slot",children:[]},{level:2,title:"Scope properties",slug:"scope-properties",children:[]},{level:2,title:"inputAttrs object properties",slug:"inputattrs-object-properties",children:[]},{level:2,title:"inputHandlers object properties",slug:"inputhandlers-object-properties",children:[]},{level:2,title:"Using native browser inputs",slug:"using-native-browser-inputs",children:[]},{level:2,title:"Using custom form components",slug:"using-custom-form-components",children:[]},{level:2,title:"Advanced custom rendering usage",slug:"advanced-custom-rendering-usage",children:[]},{level:2,title:"Creating wrapper components",slug:"creating-wrapper-components",children:[]},{level:2,title:"<b-form-tag> helper component",slug:"b-form-tag-helper-component",children:[]}],git:{updatedTime:1652704253e3},filePathRelative:"components/FormTags.md",componentReference:{name:"@bootstrap-vue-3/form-tags",version:"Alpha",meta:{title:"Form Tags",version:"Alpha",description:"Lightweight custom tagged input form control, with options for customized interface rendering, duplicate tag detection and optional tag validation.",components:[{component:"b-form-tags",version:"Alpha",aliases:["BTags"],props:[{prop:"addButtonText",type:"String",default:"Add",description:"Text for the built in 'Add' button. Slot `add-button-text` takes precedence"},{prop:"addButtonVariant",type:"String",default:"outline-secondary",description:"Applies one of the Bootstrap theme color variants to the 'Add' button"},{prop:"addOnChange",type:"Boolean",default:!1,description:"When set, enables adding the tag on the input's 'change' event"},{prop:"duplicateTagText",type:"String",default:"Duplicate tag(s)",description:"The message when duplicate tags are detected. Set to an empty string to disable the message"},{prop:"inputAttrs",type:"Object",description:"Additional attributes to apply to the new tag input element"},{prop:"inputClass",type:["Array","Object","String"],description:"Class (or classes) to apply to the new tag input element"},{prop:"inputId",type:"String",description:"ID to apply to the new tag input element. If not provided, a unique ID will be auto generated"},{prop:"inputType",type:"String",default:"text",description:"Specifies the type of input to use: 'text', 'email', 'tel', 'url', or 'number'. Default is 'text'"},{prop:"invalidTagText",type:"String",default:"Invalid tag(s)",description:"The error message when invalid tags are detected. Set to an empty string to disable the message"},{prop:"form",type:"String",description:"The value of the form prop"},{prop:"limit",type:"Number",description:"The maximum amount of tags that can be added. The limit can still be exceeded if manipulated outside of the component"},{prop:"limitTagsText",type:"String",default:"Tag limit reached",description:"The message when the limit is reached. Set to an empty string to disable the message"},{prop:"name",type:"String",description:"Sets the value of the 'name' attribute on the form control. When set, creates a hidden input for each tag"},{prop:"noAddOnEnter",type:"Boolean",default:!1,description:"When set, disables adding the tag on the input's 'keydown.enter' event"},{prop:"noOuterFocus",type:"Boolean",default:!1,description:"When set, disables the focus styling of the component root element"},{prop:"noTagRemove",type:"Boolean",default:!1,description:"When set, the tags will not have a remove button"},{prop:"placeholder",type:"String",default:"Add tag...",description:"Sets the 'placeholder' attribute value on the form control"},{prop:"removeOnDelete",type:"Boolean",default:!1,description:"When set, enables removal of last tag in tags when user presses delete or backspace and the input is empty"},{prop:"separator",type:["String","Array"],description:"Separator character(s) that will trigger a tag to be created"},{prop:"tagClass",type:["String","Array","Object"],description:"Class (or classes) to apply to the tags"},{prop:"tagPills",type:"Boolean",default:!1,description:"Makes the built in tags have a pill appearance"},{prop:"tagRemoveLabel",type:"String",description:"The value of the 'aria-label' attribute on the remove button in the tag"},{prop:"tagValidator",type:"Function",description:"Optional tag validator method. Passed a single argument of tag being added. Should return 'true' if the tag passes validation, or 'false' if the tag cannot be added"},{prop:"tagVariant",type:"String",default:"secondary",description:"Applies one of the Bootstrap theme color variants to the tags"},{prop:"value",type:"Array",default:[],description:"Array of current tags. This is the v-model"}],events:[{event:"blur",description:"Emitted when component loses focus",args:[{arg:"event",type:"FocusEvent",description:"Native blur event (before any formatting)"}]},{event:"focus",description:"Emitted when component gains focus",args:[{arg:"event",type:"FocusEvent",description:"Native focus event (before any formatting)"}]},{event:"focusin",description:"Emitted when internal elements of component gain focus.",args:[{arg:"event",type:"FocusEvent",description:"Native focusin event (before any formatting)"}]},{event:"focusout",description:"Emitted when internal elements of component lose focus.",args:[{arg:"event",type:"FocusEvent",description:"Native focusout event (before any formatting)"}]},{event:"input",description:"Emitted when the tags changes. Updates the v-model",args:[{arg:"value",type:"Array",description:"Array of current tags"}]},{event:"tag-state",description:"Emitted when tags in the user input are parsed",args:[{arg:"validTags",type:"Array",description:"Array of new tag(s) added (or that will be added). Will be zero length if no tags added"},{arg:"invalidTags",type:"Array",description:"Array of tag(s) that cannot be added because they did not pass validation. Will be zero length if no invalid tags"},{arg:"duplicateTags",type:"Array",description:"Array of tag(s) that cannot be added because they would be a duplicate tag. Will be zero length if no duplicate tags"}]}],slots:[{name:"add-button-text",description:"Content to place in the built in  'Add' button. Takes precedence over the 'add-button-text' prop. Not used when the default scoped slot is provided"},{name:"default",description:"Slot to override the default rendering of the tags component",scope:[{prop:"addButtonText",type:"String",description:"Value of the 'add-button-text' prop"},{prop:"addButtonVariant",type:"String",description:"Value of the 'add-button-variant' prop"},{prop:"addTag",type:"Function",description:"Method to add a new tag. Assumes the tag is the value of the input, but optionally accepts one argument which is the tag value to be added"},{prop:"disableAddButton",type:"Boolean",description:"Will be `true` if the tag(s) in the input cannot be added (all invalid and/or duplicates)"},{prop:"disabled",type:"Boolean",description:"If the component is in the disabled state. Value of the 'disabled' prop"},{prop:"duplicateTagText",type:"String",description:"The value of the 'duplicate-tag-text' prop"},{prop:"duplicateTags",type:"Array",description:"Array of duplicate tag(s) that could not be added"},{prop:"form",type:"String",description:"Value of the 'form' prop"},{prop:"inputAttrs",type:"Object",description:`Object of attributes to apply to native input elements via 'v-bind="inputAttrs"'`},{prop:"inputClass",type:["String","Array","Object"],description:"Class (or classes) to apply to the new tag input element. Value of the 'input-class' prop"},{prop:"inputHandlers",type:"Object",description:`Object of event handlers to apply to native input elements via 'v-on="inputHandlers"'`},{prop:"inputId",type:"String",description:"ID to add to the new tag input element. Defaults to prop 'input-id'. If not provided a unique ID is auto-generated. Also available via 'inputAttrs.id'"},{prop:"inputType",description:"The type of input to use: 'type', 'email', 'tel', 'url', or 'number'. Default is 'text'. Normalized value of the 'input-type' prop"},{prop:"invalidTagText",type:"String",description:"The value of the 'invalid-tag-text' prop"},{prop:"invalidTags",type:"Array",description:"Array of invalid tag(s) that could not be added. Requires a validator function via the 'tag-validator' prop"},{prop:"isDuplicate",type:"Boolean",description:"Will be `true` if the user has attempted to add duplicate tag(s)"},{prop:"isInvalid",type:"Boolean",description:"Will be `true` if the input has invalid tag(s). Requires a validator function via the 'tag-validator' prop"},{prop:"isLimitReached",type:"Boolean",description:"Will be `true` if the input has reached the maximum amount of tags defined by the 'limit' prop"},{prop:"limitTagsText",type:"String",description:"The value of the 'limit-tag-text' prop"},{prop:"noTagRemove",type:"Boolean",description:"The value of the 'no-tag-remove' prop"},{prop:"placeholder",type:"String",description:"The value of the 'placeholder' prop"},{prop:"remove",type:"Function",description:"Method to fully reset the tags input"},{prop:"removeTag",type:"Function",description:"Method to remove a tag. Accepts one argument which is the tag value to remove"},{prop:"required",type:"Boolean",description:"Value of the 'required' prop"},{prop:"separator",type:["String","Array"],description:"The value of the 'separator' prop"},{prop:"size",type:"String",description:"The value of the 'size' prop"},{prop:"state",type:"Boolean",description:"The contextual state of the component. Value of the 'state' prop. Possible values are true, false or null"},{prop:"tagClass",type:["String","Array","Object"],description:"Class (or classes) to apply to the tag elements. Value of the 'tag-class' prop"},{prop:"tagPills",type:"Boolean",description:"Value of the `tag-pills` prop"},{prop:"tagRemoveLabel",type:"String",description:"ARIA label for the remove button on tags. Value of the 'tag-remove-label' prop"},{prop:"tagVariant",type:"String",description:"Value of the 'tag-variant' prop"},{prop:"tags",type:"Array",description:"Array of tags to render"}]}]},{component:"b-form-tag",version:"Alpha",description:"Helper component for custom rending of tags in tagged input",aliases:["BTag"],props:[{prop:"noRemove",type:"Boolean",default:!1,description:"When set, the tag will not have a remove button"},{prop:"pill",type:"Boolean",default:!1,description:"Makes the tag have a pill appearance"},{prop:"removeLabel",type:"String",default:"Remove tag",description:"The value of the 'aria-label' attribute on the remove button in the tag"},{prop:"title",type:"String",description:"Value to place in the 'title' attribute of the tag. Will also be used for the tag content if no default slot provided"},{prop:"variant",type:"String",default:"secondary",description:"Applies one of the Bootstrap theme color variants to the component"}],events:[{event:"remove",description:"Emitted when the remove button is clicked"}],slots:[{name:"default",description:"Content to place in the tag. Overrides the `title` prop"}]}]}}};export{e as data};
