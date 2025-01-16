define(
			de[38],
			he([1, 0, 24, 82, 12, 195, 210, 910, 409, 4, 91]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.EditorOptions =
						e.EditorOption =
						e.editorOptionsRegistry =
						e.EDITOR_FONT_DEFAULTS =
						e.WrappingIndent =
						e.unicodeHighlightConfigKeys =
						e.inUntrustedWorkspace =
						e.RenderLineNumbersType =
						e.ShowLightbulbIconMode =
						e.EditorLayoutInfoComputer =
						e.RenderMinimap =
						e.EditorFontVariations =
						e.EditorFontLigatures =
						e.TextEditorCursorStyle =
						e.TextEditorCursorBlinkingStyle =
						e.ApplyUpdateResult =
						e.ComputeOptionsMemory =
						e.ConfigurationChangedEvent =
						e.MINIMAP_GUTTER_WIDTH =
						e.EditorAutoIndentStrategy =
							void 0),
					(e.boolean = b),
					(e.clampedInt = l),
					(e.clampedFloat = $),
					(e.stringSet = I),
					(e.cursorStyleToString = R),
					(e.filterValidationDecorations = ye),
					(t = mt(t)),
					(i = mt(i)),
					(w = mt(w)),
					(r = mt(r));
				var a;
				(function (Me) {
					(Me[(Me.None = 0)] = "None"),
						(Me[(Me.Keep = 1)] = "Keep"),
						(Me[(Me.Brackets = 2)] = "Brackets"),
						(Me[(Me.Advanced = 3)] = "Advanced"),
						(Me[(Me.Full = 4)] = "Full");
				})(a || (e.EditorAutoIndentStrategy = a = {})),
					(e.MINIMAP_GUTTER_WIDTH = 8);
				class h {
					constructor(De) {
						this.c = De;
					}
					hasChanged(De) {
						return this.c[De];
					}
				}
				e.ConfigurationChangedEvent = h;
				class c {
					constructor() {
						(this.stableMinimapLayoutInput = null),
							(this.stableFitMaxMinimapScale = 0),
							(this.stableFitRemainingWidth = 0);
					}
				}
				e.ComputeOptionsMemory = c;
				class n {
					constructor(De, Re, je, Ve) {
						(this.id = De),
							(this.name = Re),
							(this.defaultValue = je),
							(this.schema = Ve);
					}
					applyUpdate(De, Re) {
						return p(De, Re);
					}
					compute(De, Re, je) {
						return je;
					}
				}
				class g {
					constructor(De, Re) {
						(this.newValue = De), (this.didChange = Re);
					}
				}
				e.ApplyUpdateResult = g;
				function p(Me, De) {
					if (typeof Me != "object" || typeof De != "object" || !Me || !De)
						return new g(De, Me !== De);
					if (Array.isArray(Me) || Array.isArray(De)) {
						const je = Array.isArray(Me) && Array.isArray(De) && t.$yb(Me, De);
						return new g(De, !je);
					}
					let Re = !1;
					for (const je in De)
						if (De.hasOwnProperty(je)) {
							const Ve = p(Me[je], De[je]);
							Ve.didChange && ((Me[je] = Ve.newValue), (Re = !0));
						}
					return new g(Me, Re);
				}
				class o {
					constructor(De) {
						(this.schema = void 0),
							(this.id = De),
							(this.name = "_never_"),
							(this.defaultValue = void 0);
					}
					applyUpdate(De, Re) {
						return p(De, Re);
					}
					validate(De) {
						return this.defaultValue;
					}
				}
				class f {
					constructor(De, Re, je, Ve) {
						(this.id = De),
							(this.name = Re),
							(this.defaultValue = je),
							(this.schema = Ve);
					}
					applyUpdate(De, Re) {
						return p(De, Re);
					}
					validate(De) {
						return typeof De > "u" ? this.defaultValue : De;
					}
					compute(De, Re, je) {
						return je;
					}
				}
				function b(Me, De) {
					return typeof Me > "u" ? De : Me === "false" ? !1 : !!Me;
				}
				class s extends f {
					constructor(De, Re, je, Ve = void 0) {
						typeof Ve < "u" && ((Ve.type = "boolean"), (Ve.default = je)),
							super(De, Re, je, Ve);
					}
					validate(De) {
						return b(De, this.defaultValue);
					}
				}
				function l(Me, De, Re, je) {
					if (typeof Me > "u") return De;
					let Ve = parseInt(Me, 10);
					return isNaN(Ve)
						? De
						: ((Ve = Math.max(Re, Ve)), (Ve = Math.min(je, Ve)), Ve | 0);
				}
				class y extends f {
					static clampedInt(De, Re, je, Ve) {
						return l(De, Re, je, Ve);
					}
					constructor(De, Re, je, Ve, Ze, et = void 0) {
						typeof et < "u" &&
							((et.type = "integer"),
							(et.default = je),
							(et.minimum = Ve),
							(et.maximum = Ze)),
							super(De, Re, je, et),
							(this.minimum = Ve),
							(this.maximum = Ze);
					}
					validate(De) {
						return y.clampedInt(
							De,
							this.defaultValue,
							this.minimum,
							this.maximum,
						);
					}
				}
				function $(Me, De, Re, je) {
					if (typeof Me > "u") return De;
					const Ve = v.float(Me, De);
					return v.clamp(Ve, Re, je);
				}
				class v extends f {
					static clamp(De, Re, je) {
						return De < Re ? Re : De > je ? je : De;
					}
					static float(De, Re) {
						if (typeof De == "number") return De;
						if (typeof De > "u") return Re;
						const je = parseFloat(De);
						return isNaN(je) ? Re : je;
					}
					constructor(De, Re, je, Ve, Ze) {
						typeof Ze < "u" && ((Ze.type = "number"), (Ze.default = je)),
							super(De, Re, je, Ze),
							(this.validationFn = Ve);
					}
					validate(De) {
						return this.validationFn(v.float(De, this.defaultValue));
					}
				}
				class S extends f {
					static string(De, Re) {
						return typeof De != "string" ? Re : De;
					}
					constructor(De, Re, je, Ve = void 0) {
						typeof Ve < "u" && ((Ve.type = "string"), (Ve.default = je)),
							super(De, Re, je, Ve);
					}
					validate(De) {
						return S.string(De, this.defaultValue);
					}
				}
				function I(Me, De, Re, je) {
					return typeof Me != "string"
						? De
						: je && Me in je
							? je[Me]
							: Re.indexOf(Me) === -1
								? De
								: Me;
				}
				class T extends f {
					constructor(De, Re, je, Ve, Ze = void 0) {
						typeof Ze < "u" &&
							((Ze.type = "string"), (Ze.enum = Ve), (Ze.default = je)),
							super(De, Re, je, Ze),
							(this.c = Ve);
					}
					validate(De) {
						return I(De, this.defaultValue, this.c);
					}
				}
				class P extends n {
					constructor(De, Re, je, Ve, Ze, et, rt = void 0) {
						typeof rt < "u" &&
							((rt.type = "string"), (rt.enum = Ze), (rt.default = Ve)),
							super(De, Re, je, rt),
							(this.c = Ze),
							(this.d = et);
					}
					validate(De) {
						return typeof De != "string"
							? this.defaultValue
							: this.c.indexOf(De) === -1
								? this.defaultValue
								: this.d(De);
					}
				}
				function k(Me) {
					switch (Me) {
						case "none":
							return a.None;
						case "keep":
							return a.Keep;
						case "brackets":
							return a.Brackets;
						case "advanced":
							return a.Advanced;
						case "full":
							return a.Full;
					}
				}
				class L extends n {
					constructor() {
						super(
							Ae.accessibilitySupport,
							"accessibilitySupport",
							u.AccessibilitySupport.Unknown,
							{
								type: "string",
								enum: ["auto", "on", "off"],
								enumDescriptions: [
									r.localize(302, null),
									r.localize(303, null),
									r.localize(304, null),
								],
								default: "auto",
								tags: ["accessibility"],
								description: r.localize(305, null),
							},
						);
					}
					validate(De) {
						switch (De) {
							case "auto":
								return u.AccessibilitySupport.Unknown;
							case "off":
								return u.AccessibilitySupport.Disabled;
							case "on":
								return u.AccessibilitySupport.Enabled;
						}
						return this.defaultValue;
					}
					compute(De, Re, je) {
						return je === u.AccessibilitySupport.Unknown
							? De.accessibilitySupport
							: je;
					}
				}
				class D extends n {
					constructor() {
						const De = { insertSpace: !0, ignoreEmptyLines: !0 };
						super(Ae.comments, "comments", De, {
							"editor.comments.insertSpace": {
								type: "boolean",
								default: De.insertSpace,
								description: r.localize(306, null),
							},
							"editor.comments.ignoreEmptyLines": {
								type: "boolean",
								default: De.ignoreEmptyLines,
								description: r.localize(307, null),
							},
						});
					}
					validate(De) {
						if (!De || typeof De != "object") return this.defaultValue;
						const Re = De;
						return {
							insertSpace: b(Re.insertSpace, this.defaultValue.insertSpace),
							ignoreEmptyLines: b(
								Re.ignoreEmptyLines,
								this.defaultValue.ignoreEmptyLines,
							),
						};
					}
				}
				var M;
				(function (Me) {
					(Me[(Me.Hidden = 0)] = "Hidden"),
						(Me[(Me.Blink = 1)] = "Blink"),
						(Me[(Me.Smooth = 2)] = "Smooth"),
						(Me[(Me.Phase = 3)] = "Phase"),
						(Me[(Me.Expand = 4)] = "Expand"),
						(Me[(Me.Solid = 5)] = "Solid");
				})(M || (e.TextEditorCursorBlinkingStyle = M = {}));
				function N(Me) {
					switch (Me) {
						case "blink":
							return M.Blink;
						case "smooth":
							return M.Smooth;
						case "phase":
							return M.Phase;
						case "expand":
							return M.Expand;
						case "solid":
							return M.Solid;
					}
				}
				var A;
				(function (Me) {
					(Me[(Me.Line = 1)] = "Line"),
						(Me[(Me.Block = 2)] = "Block"),
						(Me[(Me.Underline = 3)] = "Underline"),
						(Me[(Me.LineThin = 4)] = "LineThin"),
						(Me[(Me.BlockOutline = 5)] = "BlockOutline"),
						(Me[(Me.UnderlineThin = 6)] = "UnderlineThin");
				})(A || (e.TextEditorCursorStyle = A = {}));
				function R(Me) {
					switch (Me) {
						case A.Line:
							return "line";
						case A.Block:
							return "block";
						case A.Underline:
							return "underline";
						case A.LineThin:
							return "line-thin";
						case A.BlockOutline:
							return "block-outline";
						case A.UnderlineThin:
							return "underline-thin";
					}
				}
				function O(Me) {
					switch (Me) {
						case "line":
							return A.Line;
						case "block":
							return A.Block;
						case "underline":
							return A.Underline;
						case "line-thin":
							return A.LineThin;
						case "block-outline":
							return A.BlockOutline;
						case "underline-thin":
							return A.UnderlineThin;
					}
				}
				class B extends o {
					constructor() {
						super(Ae.editorClassName);
					}
					compute(De, Re, je) {
						const Ve = ["monaco-editor"];
						return (
							Re.get(Ae.extraEditorClassName) &&
								Ve.push(Re.get(Ae.extraEditorClassName)),
							De.extraEditorClassName && Ve.push(De.extraEditorClassName),
							Re.get(Ae.mouseStyle) === "default"
								? Ve.push("mouse-default")
								: Re.get(Ae.mouseStyle) === "copy" && Ve.push("mouse-copy"),
							Re.get(Ae.showUnused) && Ve.push("showUnused"),
							Re.get(Ae.showDeprecated) && Ve.push("showDeprecated"),
							Ve.join(" ")
						);
					}
				}
				class U extends s {
					constructor() {
						super(Ae.emptySelectionClipboard, "emptySelectionClipboard", !0, {
							description: r.localize(308, null),
						});
					}
					compute(De, Re, je) {
						return je && De.emptySelectionClipboard;
					}
				}
				class z extends n {
					constructor() {
						const De = {
							cursorMoveOnType: !0,
							seedSearchStringFromSelection: "always",
							autoFindInSelection: "never",
							globalFindClipboard: !1,
							addExtraSpaceOnTop: !0,
							loop: !0,
						};
						super(Ae.find, "find", De, {
							"editor.find.cursorMoveOnType": {
								type: "boolean",
								default: De.cursorMoveOnType,
								description: r.localize(309, null),
							},
							"editor.find.seedSearchStringFromSelection": {
								type: "string",
								enum: ["never", "always", "selection"],
								default: De.seedSearchStringFromSelection,
								enumDescriptions: [
									r.localize(310, null),
									r.localize(311, null),
									r.localize(312, null),
								],
								description: r.localize(313, null),
							},
							"editor.find.autoFindInSelection": {
								type: "string",
								enum: ["never", "always", "multiline"],
								default: De.autoFindInSelection,
								enumDescriptions: [
									r.localize(314, null),
									r.localize(315, null),
									r.localize(316, null),
								],
								description: r.localize(317, null),
							},
							"editor.find.globalFindClipboard": {
								type: "boolean",
								default: De.globalFindClipboard,
								description: r.localize(318, null),
								included: w.$m,
							},
							"editor.find.addExtraSpaceOnTop": {
								type: "boolean",
								default: De.addExtraSpaceOnTop,
								description: r.localize(319, null),
							},
							"editor.find.loop": {
								type: "boolean",
								default: De.loop,
								description: r.localize(320, null),
							},
						});
					}
					validate(De) {
						if (!De || typeof De != "object") return this.defaultValue;
						const Re = De;
						return {
							cursorMoveOnType: b(
								Re.cursorMoveOnType,
								this.defaultValue.cursorMoveOnType,
							),
							seedSearchStringFromSelection:
								typeof De.seedSearchStringFromSelection == "boolean"
									? De.seedSearchStringFromSelection
										? "always"
										: "never"
									: I(
											Re.seedSearchStringFromSelection,
											this.defaultValue.seedSearchStringFromSelection,
											["never", "always", "selection"],
										),
							autoFindInSelection:
								typeof De.autoFindInSelection == "boolean"
									? De.autoFindInSelection
										? "always"
										: "never"
									: I(
											Re.autoFindInSelection,
											this.defaultValue.autoFindInSelection,
											["never", "always", "multiline"],
										),
							globalFindClipboard: b(
								Re.globalFindClipboard,
								this.defaultValue.globalFindClipboard,
							),
							addExtraSpaceOnTop: b(
								Re.addExtraSpaceOnTop,
								this.defaultValue.addExtraSpaceOnTop,
							),
							loop: b(Re.loop, this.defaultValue.loop),
						};
					}
				}
				class F extends n {
					static {
						this.OFF = '"liga" off, "calt" off';
					}
					static {
						this.ON = '"liga" on, "calt" on';
					}
					constructor() {
						super(Ae.fontLigatures, "fontLigatures", F.OFF, {
							anyOf: [
								{ type: "boolean", description: r.localize(321, null) },
								{ type: "string", description: r.localize(322, null) },
							],
							description: r.localize(323, null),
							default: !1,
						});
					}
					validate(De) {
						return typeof De > "u"
							? this.defaultValue
							: typeof De == "string"
								? De === "false" || De.length === 0
									? F.OFF
									: De === "true"
										? F.ON
										: De
								: De
									? F.ON
									: F.OFF;
					}
				}
				e.EditorFontLigatures = F;
				class x extends n {
					static {
						this.OFF = "normal";
					}
					static {
						this.TRANSLATE = "translate";
					}
					constructor() {
						super(Ae.fontVariations, "fontVariations", x.OFF, {
							anyOf: [
								{ type: "boolean", description: r.localize(324, null) },
								{ type: "string", description: r.localize(325, null) },
							],
							description: r.localize(326, null),
							default: !1,
						});
					}
					validate(De) {
						return typeof De > "u"
							? this.defaultValue
							: typeof De == "string"
								? De === "false"
									? x.OFF
									: De === "true"
										? x.TRANSLATE
										: De
								: De
									? x.TRANSLATE
									: x.OFF;
					}
					compute(De, Re, je) {
						return De.fontInfo.fontVariationSettings;
					}
				}
				e.EditorFontVariations = x;
				class H extends o {
					constructor() {
						super(Ae.fontInfo);
					}
					compute(De, Re, je) {
						return De.fontInfo;
					}
				}
				class q extends f {
					constructor() {
						super(Ae.fontSize, "fontSize", e.EDITOR_FONT_DEFAULTS.fontSize, {
							type: "number",
							minimum: 6,
							maximum: 100,
							default: e.EDITOR_FONT_DEFAULTS.fontSize,
							description: r.localize(327, null),
						});
					}
					validate(De) {
						const Re = v.float(De, this.defaultValue);
						return Re === 0
							? e.EDITOR_FONT_DEFAULTS.fontSize
							: v.clamp(Re, 6, 100);
					}
					compute(De, Re, je) {
						return De.fontInfo.fontSize;
					}
				}
				class V extends n {
					static {
						this.c = [
							"normal",
							"bold",
							"100",
							"200",
							"300",
							"400",
							"500",
							"600",
							"700",
							"800",
							"900",
						];
					}
					static {
						this.d = 1;
					}
					static {
						this.e = 1e3;
					}
					constructor() {
						super(
							Ae.fontWeight,
							"fontWeight",
							e.EDITOR_FONT_DEFAULTS.fontWeight,
							{
								anyOf: [
									{
										type: "number",
										minimum: V.d,
										maximum: V.e,
										errorMessage: r.localize(328, null),
									},
									{
										type: "string",
										pattern: "^(normal|bold|1000|[1-9][0-9]{0,2})$",
									},
									{ enum: V.c },
								],
								default: e.EDITOR_FONT_DEFAULTS.fontWeight,
								description: r.localize(329, null),
							},
						);
					}
					validate(De) {
						return De === "normal" || De === "bold"
							? De
							: String(
									y.clampedInt(De, e.EDITOR_FONT_DEFAULTS.fontWeight, V.d, V.e),
								);
					}
				}
				class G extends n {
					constructor() {
						const De = {
								multiple: "peek",
								multipleDefinitions: "peek",
								multipleTypeDefinitions: "peek",
								multipleDeclarations: "peek",
								multipleImplementations: "peek",
								multipleReferences: "peek",
								multipleTests: "peek",
								alternativeDefinitionCommand: "editor.action.goToReferences",
								alternativeTypeDefinitionCommand:
									"editor.action.goToReferences",
								alternativeDeclarationCommand: "editor.action.goToReferences",
								alternativeImplementationCommand: "",
								alternativeReferenceCommand: "",
								alternativeTestsCommand: "",
							},
							Re = {
								type: "string",
								enum: ["peek", "gotoAndPeek", "goto"],
								default: De.multiple,
								enumDescriptions: [
									r.localize(330, null),
									r.localize(331, null),
									r.localize(332, null),
								],
							},
							je = [
								"",
								"editor.action.referenceSearch.trigger",
								"editor.action.goToReferences",
								"editor.action.peekImplementation",
								"editor.action.goToImplementation",
								"editor.action.peekTypeDefinition",
								"editor.action.goToTypeDefinition",
								"editor.action.explainSymbol",
								"editor.action.peekDeclaration",
								"editor.action.revealDeclaration",
								"editor.action.peekDefinition",
								"editor.action.revealDefinitionAside",
								"editor.action.revealDefinition",
							];
						super(Ae.gotoLocation, "gotoLocation", De, {
							"editor.gotoLocation.multiple": {
								deprecationMessage: r.localize(333, null),
							},
							"editor.gotoLocation.multipleDefinitions": {
								description: r.localize(334, null),
								...Re,
							},
							"editor.gotoLocation.multipleTypeDefinitions": {
								description: r.localize(335, null),
								...Re,
							},
							"editor.gotoLocation.multipleDeclarations": {
								description: r.localize(336, null),
								...Re,
							},
							"editor.gotoLocation.multipleImplementations": {
								description: r.localize(337, null),
								...Re,
							},
							"editor.gotoLocation.multipleReferences": {
								description: r.localize(338, null),
								...Re,
							},
							"editor.gotoLocation.alternativeDefinitionCommand": {
								type: "string",
								default: De.alternativeDefinitionCommand,
								enum: je,
								description: r.localize(339, null),
							},
							"editor.gotoLocation.alternativeTypeDefinitionCommand": {
								type: "string",
								default: De.alternativeTypeDefinitionCommand,
								enum: je,
								description: r.localize(340, null),
							},
							"editor.gotoLocation.alternativeDeclarationCommand": {
								type: "string",
								default: De.alternativeDeclarationCommand,
								enum: je,
								description: r.localize(341, null),
							},
							"editor.gotoLocation.alternativeImplementationCommand": {
								type: "string",
								default: De.alternativeImplementationCommand,
								enum: je,
								description: r.localize(342, null),
							},
							"editor.gotoLocation.alternativeReferenceCommand": {
								type: "string",
								default: De.alternativeReferenceCommand,
								enum: je,
								description: r.localize(343, null),
							},
						});
					}
					validate(De) {
						if (!De || typeof De != "object") return this.defaultValue;
						const Re = De;
						return {
							multiple: I(Re.multiple, this.defaultValue.multiple, [
								"peek",
								"gotoAndPeek",
								"goto",
							]),
							multipleDefinitions:
								Re.multipleDefinitions ??
								I(Re.multipleDefinitions, "peek", [
									"peek",
									"gotoAndPeek",
									"goto",
								]),
							multipleTypeDefinitions:
								Re.multipleTypeDefinitions ??
								I(Re.multipleTypeDefinitions, "peek", [
									"peek",
									"gotoAndPeek",
									"goto",
								]),
							multipleDeclarations:
								Re.multipleDeclarations ??
								I(Re.multipleDeclarations, "peek", [
									"peek",
									"gotoAndPeek",
									"goto",
								]),
							multipleImplementations:
								Re.multipleImplementations ??
								I(Re.multipleImplementations, "peek", [
									"peek",
									"gotoAndPeek",
									"goto",
								]),
							multipleReferences:
								Re.multipleReferences ??
								I(Re.multipleReferences, "peek", [
									"peek",
									"gotoAndPeek",
									"goto",
								]),
							multipleTests:
								Re.multipleTests ??
								I(Re.multipleTests, "peek", ["peek", "gotoAndPeek", "goto"]),
							alternativeDefinitionCommand: S.string(
								Re.alternativeDefinitionCommand,
								this.defaultValue.alternativeDefinitionCommand,
							),
							alternativeTypeDefinitionCommand: S.string(
								Re.alternativeTypeDefinitionCommand,
								this.defaultValue.alternativeTypeDefinitionCommand,
							),
							alternativeDeclarationCommand: S.string(
								Re.alternativeDeclarationCommand,
								this.defaultValue.alternativeDeclarationCommand,
							),
							alternativeImplementationCommand: S.string(
								Re.alternativeImplementationCommand,
								this.defaultValue.alternativeImplementationCommand,
							),
							alternativeReferenceCommand: S.string(
								Re.alternativeReferenceCommand,
								this.defaultValue.alternativeReferenceCommand,
							),
							alternativeTestsCommand: S.string(
								Re.alternativeTestsCommand,
								this.defaultValue.alternativeTestsCommand,
							),
						};
					}
				}
				class K extends n {
					constructor() {
						const De = {
							enabled: !0,
							delay: 300,
							hidingDelay: 300,
							sticky: !0,
							above: !0,
						};
						super(Ae.hover, "hover", De, {
							"editor.hover.enabled": {
								type: "boolean",
								default: De.enabled,
								description: r.localize(344, null),
							},
							"editor.hover.delay": {
								type: "number",
								default: De.delay,
								minimum: 0,
								maximum: 1e4,
								description: r.localize(345, null),
							},
							"editor.hover.sticky": {
								type: "boolean",
								default: De.sticky,
								description: r.localize(346, null),
							},
							"editor.hover.hidingDelay": {
								type: "integer",
								minimum: 0,
								default: De.hidingDelay,
								description: r.localize(347, null),
							},
							"editor.hover.above": {
								type: "boolean",
								default: De.above,
								description: r.localize(348, null),
							},
						});
					}
					validate(De) {
						if (!De || typeof De != "object") return this.defaultValue;
						const Re = De;
						return {
							enabled: b(Re.enabled, this.defaultValue.enabled),
							delay: y.clampedInt(Re.delay, this.defaultValue.delay, 0, 1e4),
							sticky: b(Re.sticky, this.defaultValue.sticky),
							hidingDelay: y.clampedInt(
								Re.hidingDelay,
								this.defaultValue.hidingDelay,
								0,
								6e5,
							),
							above: b(Re.above, this.defaultValue.above),
						};
					}
				}
				var J;
				(function (Me) {
					(Me[(Me.None = 0)] = "None"),
						(Me[(Me.Text = 1)] = "Text"),
						(Me[(Me.Blocks = 2)] = "Blocks");
				})(J || (e.RenderMinimap = J = {}));
				class W extends o {
					constructor() {
						super(Ae.layoutInfo);
					}
					compute(De, Re, je) {
						return W.computeLayout(Re, {
							memory: De.memory,
							outerWidth: De.outerWidth,
							outerHeight: De.outerHeight,
							isDominatedByLongLines: De.isDominatedByLongLines,
							lineHeight: De.fontInfo.lineHeight,
							viewLineCount: De.viewLineCount,
							lineNumbersDigitCount: De.lineNumbersDigitCount,
							typicalHalfwidthCharacterWidth:
								De.fontInfo.typicalHalfwidthCharacterWidth,
							maxDigitWidth: De.fontInfo.maxDigitWidth,
							pixelRatio: De.pixelRatio,
							glyphMarginDecorationLaneCount: De.glyphMarginDecorationLaneCount,
						});
					}
					static computeContainedMinimapLineCount(De) {
						const Re = De.height / De.lineHeight,
							je = Math.floor(De.paddingTop / De.lineHeight);
						let Ve = Math.floor(De.paddingBottom / De.lineHeight);
						De.scrollBeyondLastLine && (Ve = Math.max(Ve, Re - 1));
						const Ze =
								(je + De.viewLineCount + Ve) / (De.pixelRatio * De.height),
							et = Math.floor(De.viewLineCount / Ze);
						return {
							typicalViewportLineCount: Re,
							extraLinesBeforeFirstLine: je,
							extraLinesBeyondLastLine: Ve,
							desiredRatio: Ze,
							minimapLineCount: et,
						};
					}
					static c(De, Re) {
						const je = De.outerWidth,
							Ve = De.outerHeight,
							Ze = De.pixelRatio;
						if (!De.minimap.enabled)
							return {
								renderMinimap: J.None,
								minimapLeft: 0,
								minimapWidth: 0,
								minimapHeightIsEditorHeight: !1,
								minimapIsSampling: !1,
								minimapScale: 1,
								minimapLineHeight: 1,
								minimapCanvasInnerWidth: 0,
								minimapCanvasInnerHeight: Math.floor(Ze * Ve),
								minimapCanvasOuterWidth: 0,
								minimapCanvasOuterHeight: Ve,
							};
						const et = Re.stableMinimapLayoutInput,
							rt =
								et &&
								De.outerHeight === et.outerHeight &&
								De.lineHeight === et.lineHeight &&
								De.typicalHalfwidthCharacterWidth ===
									et.typicalHalfwidthCharacterWidth &&
								De.pixelRatio === et.pixelRatio &&
								De.scrollBeyondLastLine === et.scrollBeyondLastLine &&
								De.paddingTop === et.paddingTop &&
								De.paddingBottom === et.paddingBottom &&
								De.minimap.enabled === et.minimap.enabled &&
								De.minimap.side === et.minimap.side &&
								De.minimap.size === et.minimap.size &&
								De.minimap.showSlider === et.minimap.showSlider &&
								De.minimap.renderCharacters === et.minimap.renderCharacters &&
								De.minimap.maxColumn === et.minimap.maxColumn &&
								De.minimap.scale === et.minimap.scale &&
								De.verticalScrollbarWidth === et.verticalScrollbarWidth &&
								De.isViewportWrapping === et.isViewportWrapping,
							ft = De.lineHeight,
							bt = De.typicalHalfwidthCharacterWidth,
							nt = De.scrollBeyondLastLine,
							lt = De.minimap.renderCharacters;
						let ct =
							Ze >= 2 ? Math.round(De.minimap.scale * 2) : De.minimap.scale;
						const gt = De.minimap.maxColumn,
							ht = De.minimap.size,
							Rt = De.minimap.side,
							Nt = De.verticalScrollbarWidth,
							jt = De.viewLineCount,
							ti = De.remainingWidth,
							kt = De.isViewportWrapping,
							hi = lt ? 2 : 3;
						let Kt = Math.floor(Ze * Ve);
						const di = Kt / Ze;
						let Ye = !1,
							ze = !1,
							Xe = hi * ct,
							It = ct / Ze,
							Lt = 1;
						if (ht === "fill" || ht === "fit") {
							const {
								typicalViewportLineCount: ei,
								extraLinesBeforeFirstLine: mi,
								extraLinesBeyondLastLine: ii,
								desiredRatio: Dt,
								minimapLineCount: Jt,
							} = W.computeContainedMinimapLineCount({
								viewLineCount: jt,
								scrollBeyondLastLine: nt,
								paddingTop: De.paddingTop,
								paddingBottom: De.paddingBottom,
								height: Ve,
								lineHeight: ft,
								pixelRatio: Ze,
							});
							if (jt / Jt > 1)
								(Ye = !0), (ze = !0), (ct = 1), (Xe = 1), (It = ct / Ze);
							else {
								let Zt = !1,
									ci = ct + 1;
								if (ht === "fit") {
									const ri = Math.ceil((mi + jt + ii) * Xe);
									kt && rt && ti <= Re.stableFitRemainingWidth
										? ((Zt = !0), (ci = Re.stableFitMaxMinimapScale))
										: (Zt = ri > Kt);
								}
								if (ht === "fill" || Zt) {
									Ye = !0;
									const ri = ct;
									(Xe = Math.min(ft * Ze, Math.max(1, Math.floor(1 / Dt)))),
										kt &&
											rt &&
											ti <= Re.stableFitRemainingWidth &&
											(ci = Re.stableFitMaxMinimapScale),
										(ct = Math.min(ci, Math.max(1, Math.floor(Xe / hi)))),
										ct > ri && (Lt = Math.min(2, ct / ri)),
										(It = ct / Ze / Lt),
										(Kt = Math.ceil(Math.max(ei, mi + jt + ii) * Xe)),
										kt
											? ((Re.stableMinimapLayoutInput = De),
												(Re.stableFitRemainingWidth = ti),
												(Re.stableFitMaxMinimapScale = ct))
											: ((Re.stableMinimapLayoutInput = null),
												(Re.stableFitRemainingWidth = 0));
								}
							}
						}
						const xt = Math.floor(gt * It),
							Vt = Math.min(
								xt,
								Math.max(0, Math.floor(((ti - Nt - 2) * It) / (bt + It))) +
									e.MINIMAP_GUTTER_WIDTH,
							);
						let Bt = Math.floor(Ze * Vt);
						const Gt = Bt / Ze;
						Bt = Math.floor(Bt * Lt);
						const Mt = lt ? J.Text : J.Blocks,
							Ut = Rt === "left" ? 0 : je - Vt - Nt;
						return {
							renderMinimap: Mt,
							minimapLeft: Ut,
							minimapWidth: Vt,
							minimapHeightIsEditorHeight: Ye,
							minimapIsSampling: ze,
							minimapScale: ct,
							minimapLineHeight: Xe,
							minimapCanvasInnerWidth: Bt,
							minimapCanvasInnerHeight: Kt,
							minimapCanvasOuterWidth: Gt,
							minimapCanvasOuterHeight: di,
						};
					}
					static computeLayout(De, Re) {
						const je = Re.outerWidth | 0,
							Ve = Re.outerHeight | 0,
							Ze = Re.lineHeight | 0,
							et = Re.lineNumbersDigitCount | 0,
							rt = Re.typicalHalfwidthCharacterWidth,
							ft = Re.maxDigitWidth,
							bt = Re.pixelRatio,
							nt = Re.viewLineCount,
							lt = De.get(Ae.wordWrapOverride2),
							ct = lt === "inherit" ? De.get(Ae.wordWrapOverride1) : lt,
							gt = ct === "inherit" ? De.get(Ae.wordWrap) : ct,
							ht = De.get(Ae.wordWrapColumn),
							Rt = Re.isDominatedByLongLines,
							Nt = De.get(Ae.glyphMargin),
							jt = De.get(Ae.lineNumbers).renderType !== pe.Off,
							ti = De.get(Ae.lineNumbersMinChars),
							kt = De.get(Ae.scrollBeyondLastLine),
							hi = De.get(Ae.padding),
							Kt = De.get(Ae.minimap),
							di = De.get(Ae.scrollbar),
							Ye = di.verticalScrollbarSize,
							ze = di.verticalHasArrows,
							Xe = di.arrowSize,
							It = di.horizontalScrollbarSize,
							Lt = De.get(Ae.folding),
							xt = De.get(Ae.showFoldingControls) !== "never";
						let Vt = De.get(Ae.lineDecorationsWidth);
						Lt && xt && (Vt += 16);
						let Bt = 0;
						if (jt) {
							const Wt = Math.max(et, ti);
							Bt = Math.round(Wt * ft);
						}
						let Gt = 0;
						Nt && (Gt = Ze * Re.glyphMarginDecorationLaneCount);
						let Mt = 0,
							Ut = Mt + Gt,
							ei = Ut + Bt,
							mi = ei + Vt;
						const ii = je - Gt - Bt - Vt;
						let Dt = !1,
							Jt = !1,
							si = -1;
						ct === "inherit" && Rt
							? ((Dt = !0), (Jt = !0))
							: gt === "on" || gt === "bounded"
								? (Jt = !0)
								: gt === "wordWrapColumn" && (si = ht);
						const Zt = W.c(
							{
								outerWidth: je,
								outerHeight: Ve,
								lineHeight: Ze,
								typicalHalfwidthCharacterWidth: rt,
								pixelRatio: bt,
								scrollBeyondLastLine: kt,
								paddingTop: hi.top,
								paddingBottom: hi.bottom,
								minimap: Kt,
								verticalScrollbarWidth: Ye,
								viewLineCount: nt,
								remainingWidth: ii,
								isViewportWrapping: Jt,
							},
							Re.memory || new c(),
						);
						Zt.renderMinimap !== J.None &&
							Zt.minimapLeft === 0 &&
							((Mt += Zt.minimapWidth),
							(Ut += Zt.minimapWidth),
							(ei += Zt.minimapWidth),
							(mi += Zt.minimapWidth));
						const ci = ii - Zt.minimapWidth,
							ri = Math.max(1, Math.floor((ci - Ye - 2) / rt)),
							$i = ze ? Xe : 0;
						return (
							Jt &&
								((si = Math.max(1, ri)),
								gt === "bounded" && (si = Math.min(si, ht))),
							{
								width: je,
								height: Ve,
								glyphMarginLeft: Mt,
								glyphMarginWidth: Gt,
								glyphMarginDecorationLaneCount:
									Re.glyphMarginDecorationLaneCount,
								lineNumbersLeft: Ut,
								lineNumbersWidth: Bt,
								decorationsLeft: ei,
								decorationsWidth: Vt,
								contentLeft: mi,
								contentWidth: ci,
								minimap: Zt,
								viewportColumn: ri,
								isWordWrapMinified: Dt,
								isViewportWrapping: Jt,
								wrappingColumn: si,
								verticalScrollbarWidth: Ye,
								horizontalScrollbarHeight: It,
								overviewRuler: {
									top: $i,
									width: Ye,
									height: Ve - 2 * $i,
									right: 0,
								},
							}
						);
					}
				}
				e.EditorLayoutInfoComputer = W;
				class X extends n {
					constructor() {
						super(Ae.wrappingStrategy, "wrappingStrategy", "simple", {
							"editor.wrappingStrategy": {
								enumDescriptions: [
									r.localize(349, null),
									r.localize(350, null),
								],
								type: "string",
								enum: ["simple", "advanced"],
								default: "simple",
								description: r.localize(351, null),
							},
						});
					}
					validate(De) {
						return I(De, "simple", ["simple", "advanced"]);
					}
					compute(De, Re, je) {
						return Re.get(Ae.accessibilitySupport) ===
							u.AccessibilitySupport.Enabled
							? "advanced"
							: je;
					}
				}
				var Y;
				(function (Me) {
					(Me.Off = "off"), (Me.OnCode = "onCode"), (Me.On = "on");
				})(Y || (e.ShowLightbulbIconMode = Y = {}));
				class ie extends n {
					constructor() {
						const De = { enabled: Y.Off };
						super(Ae.lightbulb, "lightbulb", De, {
							"editor.lightbulb.enabled": {
								type: "string",
								tags: ["experimental"],
								enum: [Y.Off, Y.OnCode, Y.On],
								default: De.enabled,
								enumDescriptions: [
									r.localize(352, null),
									r.localize(353, null),
									r.localize(354, null),
								],
								description: r.localize(355, null),
							},
						});
					}
					validate(De) {
						return !De || typeof De != "object"
							? this.defaultValue
							: {
									enabled: I(De.enabled, this.defaultValue.enabled, [
										Y.Off,
										Y.OnCode,
										Y.On,
									]),
								};
					}
				}
				class ne extends n {
					constructor() {
						const De = {
							enabled: !0,
							maxLineCount: 5,
							defaultModel: "outlineModel",
							scrollWithEditor: !0,
						};
						super(Ae.stickyScroll, "stickyScroll", De, {
							"editor.stickyScroll.enabled": {
								type: "boolean",
								default: De.enabled,
								description: r.localize(356, null),
								tags: ["experimental"],
							},
							"editor.stickyScroll.maxLineCount": {
								type: "number",
								default: De.maxLineCount,
								minimum: 1,
								maximum: 20,
								description: r.localize(357, null),
							},
							"editor.stickyScroll.defaultModel": {
								type: "string",
								enum: [
									"outlineModel",
									"foldingProviderModel",
									"indentationModel",
								],
								default: De.defaultModel,
								description: r.localize(358, null),
							},
							"editor.stickyScroll.scrollWithEditor": {
								type: "boolean",
								default: De.scrollWithEditor,
								description: r.localize(359, null),
							},
						});
					}
					validate(De) {
						if (!De || typeof De != "object") return this.defaultValue;
						const Re = De;
						return {
							enabled: b(Re.enabled, this.defaultValue.enabled),
							maxLineCount: y.clampedInt(
								Re.maxLineCount,
								this.defaultValue.maxLineCount,
								1,
								20,
							),
							defaultModel: I(Re.defaultModel, this.defaultValue.defaultModel, [
								"outlineModel",
								"foldingProviderModel",
								"indentationModel",
							]),
							scrollWithEditor: b(
								Re.scrollWithEditor,
								this.defaultValue.scrollWithEditor,
							),
						};
					}
				}
				class ee extends n {
					constructor() {
						const De = {
							enabled: "on",
							fontSize: 0,
							fontFamily: "",
							padding: !1,
						};
						super(Ae.inlayHints, "inlayHints", De, {
							"editor.inlayHints.enabled": {
								type: "string",
								default: De.enabled,
								description: r.localize(360, null),
								enum: ["on", "onUnlessPressed", "offUnlessPressed", "off"],
								markdownEnumDescriptions: [
									r.localize(361, null),
									r.localize(362, null, w.$m ? "Ctrl+Option" : "Ctrl+Alt"),
									r.localize(363, null, w.$m ? "Ctrl+Option" : "Ctrl+Alt"),
									r.localize(364, null),
								],
							},
							"editor.inlayHints.fontSize": {
								type: "number",
								default: De.fontSize,
								markdownDescription: r.localize(
									365,
									null,
									"`#editor.fontSize#`",
									"`5`",
								),
							},
							"editor.inlayHints.fontFamily": {
								type: "string",
								default: De.fontFamily,
								markdownDescription: r.localize(
									366,
									null,
									"`#editor.fontFamily#`",
								),
							},
							"editor.inlayHints.padding": {
								type: "boolean",
								default: De.padding,
								description: r.localize(367, null),
							},
						});
					}
					validate(De) {
						if (!De || typeof De != "object") return this.defaultValue;
						const Re = De;
						return (
							typeof Re.enabled == "boolean" &&
								(Re.enabled = Re.enabled ? "on" : "off"),
							{
								enabled: I(Re.enabled, this.defaultValue.enabled, [
									"on",
									"off",
									"offUnlessPressed",
									"onUnlessPressed",
								]),
								fontSize: y.clampedInt(
									Re.fontSize,
									this.defaultValue.fontSize,
									0,
									100,
								),
								fontFamily: S.string(
									Re.fontFamily,
									this.defaultValue.fontFamily,
								),
								padding: b(Re.padding, this.defaultValue.padding),
							}
						);
					}
				}
				class _ extends n {
					constructor() {
						super(Ae.lineDecorationsWidth, "lineDecorationsWidth", 10);
					}
					validate(De) {
						return typeof De == "string" && /^\d+(\.\d+)?ch$/.test(De)
							? -parseFloat(De.substring(0, De.length - 2))
							: y.clampedInt(De, this.defaultValue, 0, 1e3);
					}
					compute(De, Re, je) {
						return je < 0
							? y.clampedInt(
									-je * De.fontInfo.typicalHalfwidthCharacterWidth,
									this.defaultValue,
									0,
									1e3,
								)
							: je;
					}
				}
				class te extends v {
					constructor() {
						super(
							Ae.lineHeight,
							"lineHeight",
							e.EDITOR_FONT_DEFAULTS.lineHeight,
							(De) => v.clamp(De, 0, 150),
							{ markdownDescription: r.localize(368, null) },
						);
					}
					compute(De, Re, je) {
						return De.fontInfo.lineHeight;
					}
				}
				class Q extends n {
					constructor() {
						const De = {
							enabled: !1,
							size: "proportional",
							side: "right",
							showSlider: "mouseover",
							autohide: !1,
							renderCharacters: !0,
							maxColumn: 120,
							scale: 1,
							showRegionSectionHeaders: !0,
							showMarkSectionHeaders: !0,
							sectionHeaderFontSize: 9,
							sectionHeaderLetterSpacing: 1,
						};
						super(Ae.minimap, "minimap", De, {
							"editor.minimap.enabled": {
								type: "boolean",
								default: De.enabled,
								description: r.localize(369, null),
							},
							"editor.minimap.autohide": {
								type: "boolean",
								default: De.autohide,
								description: r.localize(370, null),
							},
							"editor.minimap.size": {
								type: "string",
								enum: ["proportional", "fill", "fit"],
								enumDescriptions: [
									r.localize(371, null),
									r.localize(372, null),
									r.localize(373, null),
								],
								default: De.size,
								description: r.localize(374, null),
							},
							"editor.minimap.side": {
								type: "string",
								enum: ["left", "right"],
								default: De.side,
								description: r.localize(375, null),
							},
							"editor.minimap.showSlider": {
								type: "string",
								enum: ["always", "mouseover"],
								default: De.showSlider,
								description: r.localize(376, null),
							},
							"editor.minimap.scale": {
								type: "number",
								default: De.scale,
								minimum: 1,
								maximum: 3,
								enum: [1, 2, 3],
								description: r.localize(377, null),
							},
							"editor.minimap.renderCharacters": {
								type: "boolean",
								default: De.renderCharacters,
								description: r.localize(378, null),
							},
							"editor.minimap.maxColumn": {
								type: "number",
								default: De.maxColumn,
								description: r.localize(379, null),
							},
							"editor.minimap.showRegionSectionHeaders": {
								type: "boolean",
								default: De.showRegionSectionHeaders,
								description: r.localize(380, null),
							},
							"editor.minimap.showMarkSectionHeaders": {
								type: "boolean",
								default: De.showMarkSectionHeaders,
								description: r.localize(381, null),
							},
							"editor.minimap.sectionHeaderFontSize": {
								type: "number",
								default: De.sectionHeaderFontSize,
								description: r.localize(382, null),
							},
							"editor.minimap.sectionHeaderLetterSpacing": {
								type: "number",
								default: De.sectionHeaderLetterSpacing,
								description: r.localize(383, null),
							},
						});
					}
					validate(De) {
						if (!De || typeof De != "object") return this.defaultValue;
						const Re = De;
						return {
							enabled: b(Re.enabled, this.defaultValue.enabled),
							autohide: b(Re.autohide, this.defaultValue.autohide),
							size: I(Re.size, this.defaultValue.size, [
								"proportional",
								"fill",
								"fit",
							]),
							side: I(Re.side, this.defaultValue.side, ["right", "left"]),
							showSlider: I(Re.showSlider, this.defaultValue.showSlider, [
								"always",
								"mouseover",
							]),
							renderCharacters: b(
								Re.renderCharacters,
								this.defaultValue.renderCharacters,
							),
							scale: y.clampedInt(Re.scale, 1, 1, 3),
							maxColumn: y.clampedInt(
								Re.maxColumn,
								this.defaultValue.maxColumn,
								1,
								1e4,
							),
							showRegionSectionHeaders: b(
								Re.showRegionSectionHeaders,
								this.defaultValue.showRegionSectionHeaders,
							),
							showMarkSectionHeaders: b(
								Re.showMarkSectionHeaders,
								this.defaultValue.showMarkSectionHeaders,
							),
							sectionHeaderFontSize: v.clamp(
								Re.sectionHeaderFontSize ??
									this.defaultValue.sectionHeaderFontSize,
								4,
								32,
							),
							sectionHeaderLetterSpacing: v.clamp(
								Re.sectionHeaderLetterSpacing ??
									this.defaultValue.sectionHeaderLetterSpacing,
								0,
								5,
							),
						};
					}
				}
				function Z(Me) {
					return Me === "ctrlCmd" ? (w.$m ? "metaKey" : "ctrlKey") : "altKey";
				}
				class se extends n {
					constructor() {
						super(
							Ae.padding,
							"padding",
							{ top: 0, bottom: 0 },
							{
								"editor.padding.top": {
									type: "number",
									default: 0,
									minimum: 0,
									maximum: 1e3,
									description: r.localize(384, null),
								},
								"editor.padding.bottom": {
									type: "number",
									default: 0,
									minimum: 0,
									maximum: 1e3,
									description: r.localize(385, null),
								},
							},
						);
					}
					validate(De) {
						if (!De || typeof De != "object") return this.defaultValue;
						const Re = De;
						return {
							top: y.clampedInt(Re.top, 0, 0, 1e3),
							bottom: y.clampedInt(Re.bottom, 0, 0, 1e3),
						};
					}
				}
				class re extends n {
					constructor() {
						const De = { enabled: !0, cycle: !0 };
						super(Ae.parameterHints, "parameterHints", De, {
							"editor.parameterHints.enabled": {
								type: "boolean",
								default: De.enabled,
								description: r.localize(386, null),
							},
							"editor.parameterHints.cycle": {
								type: "boolean",
								default: De.cycle,
								description: r.localize(387, null),
							},
						});
					}
					validate(De) {
						if (!De || typeof De != "object") return this.defaultValue;
						const Re = De;
						return {
							enabled: b(Re.enabled, this.defaultValue.enabled),
							cycle: b(Re.cycle, this.defaultValue.cycle),
						};
					}
				}
				class le extends o {
					constructor() {
						super(Ae.pixelRatio);
					}
					compute(De, Re, je) {
						return De.pixelRatio;
					}
				}
				class oe extends n {
					constructor() {
						super(Ae.placeholder, "placeholder", void 0);
					}
					validate(De) {
						return typeof De > "u"
							? this.defaultValue
							: typeof De == "string"
								? De
								: this.defaultValue;
					}
				}
				class ae extends n {
					constructor() {
						const De = { other: "on", comments: "off", strings: "off" },
							Re = [
								{ type: "boolean" },
								{
									type: "string",
									enum: ["on", "inline", "off"],
									enumDescriptions: [
										r.localize(388, null),
										r.localize(389, null),
										r.localize(390, null),
									],
								},
							];
						super(Ae.quickSuggestions, "quickSuggestions", De, {
							type: "object",
							additionalProperties: !1,
							properties: {
								strings: {
									anyOf: Re,
									default: De.strings,
									description: r.localize(391, null),
								},
								comments: {
									anyOf: Re,
									default: De.comments,
									description: r.localize(392, null),
								},
								other: {
									anyOf: Re,
									default: De.other,
									description: r.localize(393, null),
								},
							},
							default: De,
							markdownDescription: r.localize(
								394,
								null,
								"`#editor.suggestOnTriggerCharacters#`",
							),
						}),
							(this.defaultValue = De);
					}
					validate(De) {
						if (typeof De == "boolean") {
							const bt = De ? "on" : "off";
							return { comments: bt, strings: bt, other: bt };
						}
						if (!De || typeof De != "object") return this.defaultValue;
						const { other: Re, comments: je, strings: Ve } = De,
							Ze = ["on", "inline", "off"];
						let et, rt, ft;
						return (
							typeof Re == "boolean"
								? (et = Re ? "on" : "off")
								: (et = I(Re, this.defaultValue.other, Ze)),
							typeof je == "boolean"
								? (rt = je ? "on" : "off")
								: (rt = I(je, this.defaultValue.comments, Ze)),
							typeof Ve == "boolean"
								? (ft = Ve ? "on" : "off")
								: (ft = I(Ve, this.defaultValue.strings, Ze)),
							{ other: et, comments: rt, strings: ft }
						);
					}
				}
				var pe;
				(function (Me) {
					(Me[(Me.Off = 0)] = "Off"),
						(Me[(Me.On = 1)] = "On"),
						(Me[(Me.Relative = 2)] = "Relative"),
						(Me[(Me.Interval = 3)] = "Interval"),
						(Me[(Me.Custom = 4)] = "Custom");
				})(pe || (e.RenderLineNumbersType = pe = {}));
				class $e extends n {
					constructor() {
						super(
							Ae.lineNumbers,
							"lineNumbers",
							{ renderType: pe.On, renderFn: null },
							{
								type: "string",
								enum: ["off", "on", "relative", "interval"],
								enumDescriptions: [
									r.localize(395, null),
									r.localize(396, null),
									r.localize(397, null),
									r.localize(398, null),
								],
								default: "on",
								description: r.localize(399, null),
							},
						);
					}
					validate(De) {
						let Re = this.defaultValue.renderType,
							je = this.defaultValue.renderFn;
						return (
							typeof De < "u" &&
								(typeof De == "function"
									? ((Re = pe.Custom), (je = De))
									: De === "interval"
										? (Re = pe.Interval)
										: De === "relative"
											? (Re = pe.Relative)
											: De === "on"
												? (Re = pe.On)
												: (Re = pe.Off)),
							{ renderType: Re, renderFn: je }
						);
					}
				}
				function ye(Me) {
					const De = Me.get(Ae.renderValidationDecorations);
					return De === "editable" ? Me.get(Ae.readOnly) : De !== "on";
				}
				class ue extends n {
					constructor() {
						const De = [],
							Re = { type: "number", description: r.localize(400, null) };
						super(Ae.rulers, "rulers", De, {
							type: "array",
							items: {
								anyOf: [
									Re,
									{
										type: ["object"],
										properties: {
											column: Re,
											color: {
												type: "string",
												description: r.localize(401, null),
												format: "color-hex",
											},
										},
									},
								],
							},
							default: De,
							description: r.localize(402, null),
						});
					}
					validate(De) {
						if (Array.isArray(De)) {
							const Re = [];
							for (const je of De)
								if (typeof je == "number")
									Re.push({ column: y.clampedInt(je, 0, 0, 1e4), color: null });
								else if (je && typeof je == "object") {
									const Ve = je;
									Re.push({
										column: y.clampedInt(Ve.column, 0, 0, 1e4),
										color: Ve.color,
									});
								}
							return Re.sort((je, Ve) => je.column - Ve.column), Re;
						}
						return this.defaultValue;
					}
				}
				class fe extends n {
					constructor() {
						super(Ae.readOnlyMessage, "readOnlyMessage", void 0);
					}
					validate(De) {
						return !De || typeof De != "object" ? this.defaultValue : De;
					}
				}
				function me(Me, De) {
					if (typeof Me != "string") return De;
					switch (Me) {
						case "hidden":
							return E.ScrollbarVisibility.Hidden;
						case "visible":
							return E.ScrollbarVisibility.Visible;
						default:
							return E.ScrollbarVisibility.Auto;
					}
				}
				class ve extends n {
					constructor() {
						const De = {
							vertical: E.ScrollbarVisibility.Auto,
							horizontal: E.ScrollbarVisibility.Auto,
							arrowSize: 11,
							useShadows: !0,
							verticalHasArrows: !1,
							horizontalHasArrows: !1,
							horizontalScrollbarSize: 12,
							horizontalSliderSize: 12,
							verticalScrollbarSize: 14,
							verticalSliderSize: 14,
							handleMouseWheel: !0,
							ignoreVerticalScrolling: !1,
							alwaysConsumeMouseWheel: !0,
							scrollByPage: !1,
							ignoreHorizontalScrollbarInContentHeight: !1,
						};
						super(Ae.scrollbar, "scrollbar", De, {
							"editor.scrollbar.vertical": {
								type: "string",
								enum: ["auto", "visible", "hidden"],
								enumDescriptions: [
									r.localize(403, null),
									r.localize(404, null),
									r.localize(405, null),
								],
								default: "auto",
								description: r.localize(406, null),
							},
							"editor.scrollbar.horizontal": {
								type: "string",
								enum: ["auto", "visible", "hidden"],
								enumDescriptions: [
									r.localize(407, null),
									r.localize(408, null),
									r.localize(409, null),
								],
								default: "auto",
								description: r.localize(410, null),
							},
							"editor.scrollbar.verticalScrollbarSize": {
								type: "number",
								default: De.verticalScrollbarSize,
								description: r.localize(411, null),
							},
							"editor.scrollbar.horizontalScrollbarSize": {
								type: "number",
								default: De.horizontalScrollbarSize,
								description: r.localize(412, null),
							},
							"editor.scrollbar.scrollByPage": {
								type: "boolean",
								default: De.scrollByPage,
								description: r.localize(413, null),
							},
							"editor.scrollbar.ignoreHorizontalScrollbarInContentHeight": {
								type: "boolean",
								default: De.ignoreHorizontalScrollbarInContentHeight,
								description: r.localize(414, null),
							},
						});
					}
					validate(De) {
						if (!De || typeof De != "object") return this.defaultValue;
						const Re = De,
							je = y.clampedInt(
								Re.horizontalScrollbarSize,
								this.defaultValue.horizontalScrollbarSize,
								0,
								1e3,
							),
							Ve = y.clampedInt(
								Re.verticalScrollbarSize,
								this.defaultValue.verticalScrollbarSize,
								0,
								1e3,
							);
						return {
							arrowSize: y.clampedInt(
								Re.arrowSize,
								this.defaultValue.arrowSize,
								0,
								1e3,
							),
							vertical: me(Re.vertical, this.defaultValue.vertical),
							horizontal: me(Re.horizontal, this.defaultValue.horizontal),
							useShadows: b(Re.useShadows, this.defaultValue.useShadows),
							verticalHasArrows: b(
								Re.verticalHasArrows,
								this.defaultValue.verticalHasArrows,
							),
							horizontalHasArrows: b(
								Re.horizontalHasArrows,
								this.defaultValue.horizontalHasArrows,
							),
							handleMouseWheel: b(
								Re.handleMouseWheel,
								this.defaultValue.handleMouseWheel,
							),
							ignoreVerticalScrolling: b(
								Re.ignoreVerticalScrolling,
								this.defaultValue.ignoreVerticalScrolling,
							),
							alwaysConsumeMouseWheel: b(
								Re.alwaysConsumeMouseWheel,
								this.defaultValue.alwaysConsumeMouseWheel,
							),
							horizontalScrollbarSize: je,
							horizontalSliderSize: y.clampedInt(
								Re.horizontalSliderSize,
								je,
								0,
								1e3,
							),
							verticalScrollbarSize: Ve,
							verticalSliderSize: y.clampedInt(
								Re.verticalSliderSize,
								Ve,
								0,
								1e3,
							),
							scrollByPage: b(Re.scrollByPage, this.defaultValue.scrollByPage),
							ignoreHorizontalScrollbarInContentHeight: b(
								Re.ignoreHorizontalScrollbarInContentHeight,
								this.defaultValue.ignoreHorizontalScrollbarInContentHeight,
							),
						};
					}
				}
				(e.inUntrustedWorkspace = "inUntrustedWorkspace"),
					(e.unicodeHighlightConfigKeys = {
						allowedCharacters: "editor.unicodeHighlight.allowedCharacters",
						invisibleCharacters: "editor.unicodeHighlight.invisibleCharacters",
						nonBasicASCII: "editor.unicodeHighlight.nonBasicASCII",
						ambiguousCharacters: "editor.unicodeHighlight.ambiguousCharacters",
						includeComments: "editor.unicodeHighlight.includeComments",
						includeStrings: "editor.unicodeHighlight.includeStrings",
						allowedLocales: "editor.unicodeHighlight.allowedLocales",
					});
				class ge extends n {
					constructor() {
						const De = {
							nonBasicASCII: e.inUntrustedWorkspace,
							invisibleCharacters: !0,
							ambiguousCharacters: !0,
							includeComments: e.inUntrustedWorkspace,
							includeStrings: !0,
							allowedCharacters: {},
							allowedLocales: { _os: !0, _vscode: !0 },
						};
						super(Ae.unicodeHighlighting, "unicodeHighlight", De, {
							[e.unicodeHighlightConfigKeys.nonBasicASCII]: {
								restricted: !0,
								type: ["boolean", "string"],
								enum: [!0, !1, e.inUntrustedWorkspace],
								default: De.nonBasicASCII,
								description: r.localize(415, null),
							},
							[e.unicodeHighlightConfigKeys.invisibleCharacters]: {
								restricted: !0,
								type: "boolean",
								default: De.invisibleCharacters,
								description: r.localize(416, null),
							},
							[e.unicodeHighlightConfigKeys.ambiguousCharacters]: {
								restricted: !0,
								type: "boolean",
								default: De.ambiguousCharacters,
								description: r.localize(417, null),
							},
							[e.unicodeHighlightConfigKeys.includeComments]: {
								restricted: !0,
								type: ["boolean", "string"],
								enum: [!0, !1, e.inUntrustedWorkspace],
								default: De.includeComments,
								description: r.localize(418, null),
							},
							[e.unicodeHighlightConfigKeys.includeStrings]: {
								restricted: !0,
								type: ["boolean", "string"],
								enum: [!0, !1, e.inUntrustedWorkspace],
								default: De.includeStrings,
								description: r.localize(419, null),
							},
							[e.unicodeHighlightConfigKeys.allowedCharacters]: {
								restricted: !0,
								type: "object",
								default: De.allowedCharacters,
								description: r.localize(420, null),
								additionalProperties: { type: "boolean" },
							},
							[e.unicodeHighlightConfigKeys.allowedLocales]: {
								restricted: !0,
								type: "object",
								additionalProperties: { type: "boolean" },
								default: De.allowedLocales,
								description: r.localize(421, null),
							},
						});
					}
					applyUpdate(De, Re) {
						let je = !1;
						Re.allowedCharacters &&
							De &&
							(i.$zo(De.allowedCharacters, Re.allowedCharacters) ||
								((De = { ...De, allowedCharacters: Re.allowedCharacters }),
								(je = !0))),
							Re.allowedLocales &&
								De &&
								(i.$zo(De.allowedLocales, Re.allowedLocales) ||
									((De = { ...De, allowedLocales: Re.allowedLocales }),
									(je = !0)));
						const Ve = super.applyUpdate(De, Re);
						return je ? new g(Ve.newValue, !0) : Ve;
					}
					validate(De) {
						if (!De || typeof De != "object") return this.defaultValue;
						const Re = De;
						return {
							nonBasicASCII: Oe(Re.nonBasicASCII, e.inUntrustedWorkspace, [
								!0,
								!1,
								e.inUntrustedWorkspace,
							]),
							invisibleCharacters: b(
								Re.invisibleCharacters,
								this.defaultValue.invisibleCharacters,
							),
							ambiguousCharacters: b(
								Re.ambiguousCharacters,
								this.defaultValue.ambiguousCharacters,
							),
							includeComments: Oe(Re.includeComments, e.inUntrustedWorkspace, [
								!0,
								!1,
								e.inUntrustedWorkspace,
							]),
							includeStrings: Oe(Re.includeStrings, e.inUntrustedWorkspace, [
								!0,
								!1,
								e.inUntrustedWorkspace,
							]),
							allowedCharacters: this.c(
								De.allowedCharacters,
								this.defaultValue.allowedCharacters,
							),
							allowedLocales: this.c(
								De.allowedLocales,
								this.defaultValue.allowedLocales,
							),
						};
					}
					c(De, Re) {
						if (typeof De != "object" || !De) return Re;
						const je = {};
						for (const [Ve, Ze] of Object.entries(De))
							Ze === !0 && (je[Ve] = !0);
						return je;
					}
				}
				class be extends n {
					constructor() {
						const De = {
							enabled: !0,
							mode: "subwordSmart",
							showToolbar: "onHover",
							suppressSuggestions: !1,
							keepOnBlur: !1,
							fontFamily: "default",
						};
						super(Ae.inlineSuggest, "inlineSuggest", De, {
							"editor.inlineSuggest.enabled": {
								type: "boolean",
								default: De.enabled,
								description: r.localize(422, null),
							},
							"editor.inlineSuggest.showToolbar": {
								type: "string",
								default: De.showToolbar,
								enum: ["always", "onHover", "never"],
								enumDescriptions: [
									r.localize(423, null),
									r.localize(424, null),
									r.localize(425, null),
								],
								description: r.localize(426, null),
							},
							"editor.inlineSuggest.suppressSuggestions": {
								type: "boolean",
								default: De.suppressSuggestions,
								description: r.localize(427, null),
							},
							"editor.inlineSuggest.fontFamily": {
								type: "string",
								default: De.fontFamily,
								description: r.localize(428, null),
							},
						});
					}
					validate(De) {
						if (!De || typeof De != "object") return this.defaultValue;
						const Re = De;
						return {
							enabled: b(Re.enabled, this.defaultValue.enabled),
							mode: I(Re.mode, this.defaultValue.mode, [
								"prefix",
								"subword",
								"subwordSmart",
							]),
							showToolbar: I(Re.showToolbar, this.defaultValue.showToolbar, [
								"always",
								"onHover",
								"never",
							]),
							suppressSuggestions: b(
								Re.suppressSuggestions,
								this.defaultValue.suppressSuggestions,
							),
							keepOnBlur: b(Re.keepOnBlur, this.defaultValue.keepOnBlur),
							fontFamily: S.string(Re.fontFamily, this.defaultValue.fontFamily),
						};
					}
				}
				class Ce extends n {
					constructor() {
						const De = {
							enabled: !1,
							showToolbar: "onHover",
							fontFamily: "default",
							keepOnBlur: !1,
						};
						super(Ae.inlineEdit, "experimentalInlineEdit", De, {
							"editor.experimentalInlineEdit.enabled": {
								type: "boolean",
								default: De.enabled,
								description: r.localize(429, null),
							},
							"editor.experimentalInlineEdit.showToolbar": {
								type: "string",
								default: De.showToolbar,
								enum: ["always", "onHover", "never"],
								enumDescriptions: [
									r.localize(430, null),
									r.localize(431, null),
									r.localize(432, null),
								],
								description: r.localize(433, null),
							},
							"editor.experimentalInlineEdit.fontFamily": {
								type: "string",
								default: De.fontFamily,
								description: r.localize(434, null),
							},
						});
					}
					validate(De) {
						if (!De || typeof De != "object") return this.defaultValue;
						const Re = De;
						return {
							enabled: b(Re.enabled, this.defaultValue.enabled),
							showToolbar: I(Re.showToolbar, this.defaultValue.showToolbar, [
								"always",
								"onHover",
								"never",
							]),
							fontFamily: S.string(Re.fontFamily, this.defaultValue.fontFamily),
							keepOnBlur: b(Re.keepOnBlur, this.defaultValue.keepOnBlur),
						};
					}
				}
				class Le extends n {
					constructor() {
						const De = {
							enabled: d.$RK.bracketPairColorizationOptions.enabled,
							independentColorPoolPerBracketType:
								d.$RK.bracketPairColorizationOptions
									.independentColorPoolPerBracketType,
						};
						super(Ae.bracketPairColorization, "bracketPairColorization", De, {
							"editor.bracketPairColorization.enabled": {
								type: "boolean",
								default: De.enabled,
								markdownDescription: r.localize(
									435,
									null,
									"`#workbench.colorCustomizations#`",
								),
							},
							"editor.bracketPairColorization.independentColorPoolPerBracketType":
								{
									type: "boolean",
									default: De.independentColorPoolPerBracketType,
									description: r.localize(436, null),
								},
						});
					}
					validate(De) {
						if (!De || typeof De != "object") return this.defaultValue;
						const Re = De;
						return {
							enabled: b(Re.enabled, this.defaultValue.enabled),
							independentColorPoolPerBracketType: b(
								Re.independentColorPoolPerBracketType,
								this.defaultValue.independentColorPoolPerBracketType,
							),
						};
					}
				}
				class Fe extends n {
					constructor() {
						const De = {
							bracketPairs: !1,
							bracketPairsHorizontal: "active",
							highlightActiveBracketPair: !0,
							indentation: !0,
							highlightActiveIndentation: !0,
						};
						super(Ae.guides, "guides", De, {
							"editor.guides.bracketPairs": {
								type: ["boolean", "string"],
								enum: [!0, "active", !1],
								enumDescriptions: [
									r.localize(437, null),
									r.localize(438, null),
									r.localize(439, null),
								],
								default: De.bracketPairs,
								description: r.localize(440, null),
							},
							"editor.guides.bracketPairsHorizontal": {
								type: ["boolean", "string"],
								enum: [!0, "active", !1],
								enumDescriptions: [
									r.localize(441, null),
									r.localize(442, null),
									r.localize(443, null),
								],
								default: De.bracketPairsHorizontal,
								description: r.localize(444, null),
							},
							"editor.guides.highlightActiveBracketPair": {
								type: "boolean",
								default: De.highlightActiveBracketPair,
								description: r.localize(445, null),
							},
							"editor.guides.indentation": {
								type: "boolean",
								default: De.indentation,
								description: r.localize(446, null),
							},
							"editor.guides.highlightActiveIndentation": {
								type: ["boolean", "string"],
								enum: [!0, "always", !1],
								enumDescriptions: [
									r.localize(447, null),
									r.localize(448, null),
									r.localize(449, null),
								],
								default: De.highlightActiveIndentation,
								description: r.localize(450, null),
							},
						});
					}
					validate(De) {
						if (!De || typeof De != "object") return this.defaultValue;
						const Re = De;
						return {
							bracketPairs: Oe(
								Re.bracketPairs,
								this.defaultValue.bracketPairs,
								[!0, !1, "active"],
							),
							bracketPairsHorizontal: Oe(
								Re.bracketPairsHorizontal,
								this.defaultValue.bracketPairsHorizontal,
								[!0, !1, "active"],
							),
							highlightActiveBracketPair: b(
								Re.highlightActiveBracketPair,
								this.defaultValue.highlightActiveBracketPair,
							),
							indentation: b(Re.indentation, this.defaultValue.indentation),
							highlightActiveIndentation: Oe(
								Re.highlightActiveIndentation,
								this.defaultValue.highlightActiveIndentation,
								[!0, !1, "always"],
							),
						};
					}
				}
				function Oe(Me, De, Re) {
					const je = Re.indexOf(Me);
					return je === -1 ? De : Re[je];
				}
				class xe extends n {
					constructor() {
						const De = {
							insertMode: "insert",
							filterGraceful: !0,
							snippetsPreventQuickSuggestions: !1,
							localityBonus: !1,
							shareSuggestSelections: !1,
							selectionMode: "always",
							showIcons: !0,
							showStatusBar: !1,
							preview: !1,
							previewMode: "subwordSmart",
							showInlineDetails: !0,
							showMethods: !0,
							showFunctions: !0,
							showConstructors: !0,
							showDeprecated: !0,
							matchOnWordStartOnly: !0,
							showFields: !0,
							showVariables: !0,
							showClasses: !0,
							showStructs: !0,
							showInterfaces: !0,
							showModules: !0,
							showProperties: !0,
							showEvents: !0,
							showOperators: !0,
							showUnits: !0,
							showValues: !0,
							showConstants: !0,
							showEnums: !0,
							showEnumMembers: !0,
							showKeywords: !0,
							showWords: !0,
							showColors: !0,
							showFiles: !0,
							showReferences: !0,
							showFolders: !0,
							showTypeParameters: !0,
							showSnippets: !0,
							showUsers: !0,
							showIssues: !0,
						};
						super(Ae.suggest, "suggest", De, {
							"editor.suggest.insertMode": {
								type: "string",
								enum: ["insert", "replace"],
								enumDescriptions: [
									r.localize(451, null),
									r.localize(452, null),
								],
								default: De.insertMode,
								description: r.localize(453, null),
							},
							"editor.suggest.filterGraceful": {
								type: "boolean",
								default: De.filterGraceful,
								description: r.localize(454, null),
							},
							"editor.suggest.localityBonus": {
								type: "boolean",
								default: De.localityBonus,
								description: r.localize(455, null),
							},
							"editor.suggest.shareSuggestSelections": {
								type: "boolean",
								default: De.shareSuggestSelections,
								markdownDescription: r.localize(456, null),
							},
							"editor.suggest.selectionMode": {
								type: "string",
								enum: [
									"always",
									"never",
									"whenTriggerCharacter",
									"whenQuickSuggestion",
								],
								enumDescriptions: [
									r.localize(457, null),
									r.localize(458, null),
									r.localize(459, null),
									r.localize(460, null),
								],
								default: De.selectionMode,
								markdownDescription: r.localize(
									461,
									null,
									"`#editor.quickSuggestions#`",
									"`#editor.suggestOnTriggerCharacters#`",
								),
							},
							"editor.suggest.snippetsPreventQuickSuggestions": {
								type: "boolean",
								default: De.snippetsPreventQuickSuggestions,
								description: r.localize(462, null),
							},
							"editor.suggest.showIcons": {
								type: "boolean",
								default: De.showIcons,
								description: r.localize(463, null),
							},
							"editor.suggest.showStatusBar": {
								type: "boolean",
								default: De.showStatusBar,
								description: r.localize(464, null),
							},
							"editor.suggest.preview": {
								type: "boolean",
								default: De.preview,
								description: r.localize(465, null),
							},
							"editor.suggest.showInlineDetails": {
								type: "boolean",
								default: De.showInlineDetails,
								description: r.localize(466, null),
							},
							"editor.suggest.maxVisibleSuggestions": {
								type: "number",
								deprecationMessage: r.localize(467, null),
							},
							"editor.suggest.filteredTypes": {
								type: "object",
								deprecationMessage: r.localize(468, null),
							},
							"editor.suggest.showMethods": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(469, null),
							},
							"editor.suggest.showFunctions": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(470, null),
							},
							"editor.suggest.showConstructors": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(471, null),
							},
							"editor.suggest.showDeprecated": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(472, null),
							},
							"editor.suggest.matchOnWordStartOnly": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(473, null),
							},
							"editor.suggest.showFields": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(474, null),
							},
							"editor.suggest.showVariables": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(475, null),
							},
							"editor.suggest.showClasses": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(476, null),
							},
							"editor.suggest.showStructs": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(477, null),
							},
							"editor.suggest.showInterfaces": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(478, null),
							},
							"editor.suggest.showModules": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(479, null),
							},
							"editor.suggest.showProperties": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(480, null),
							},
							"editor.suggest.showEvents": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(481, null),
							},
							"editor.suggest.showOperators": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(482, null),
							},
							"editor.suggest.showUnits": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(483, null),
							},
							"editor.suggest.showValues": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(484, null),
							},
							"editor.suggest.showConstants": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(485, null),
							},
							"editor.suggest.showEnums": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(486, null),
							},
							"editor.suggest.showEnumMembers": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(487, null),
							},
							"editor.suggest.showKeywords": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(488, null),
							},
							"editor.suggest.showWords": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(489, null),
							},
							"editor.suggest.showColors": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(490, null),
							},
							"editor.suggest.showFiles": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(491, null),
							},
							"editor.suggest.showReferences": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(492, null),
							},
							"editor.suggest.showCustomcolors": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(493, null),
							},
							"editor.suggest.showFolders": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(494, null),
							},
							"editor.suggest.showTypeParameters": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(495, null),
							},
							"editor.suggest.showSnippets": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(496, null),
							},
							"editor.suggest.showUsers": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(497, null),
							},
							"editor.suggest.showIssues": {
								type: "boolean",
								default: !0,
								markdownDescription: r.localize(498, null),
							},
						});
					}
					validate(De) {
						if (!De || typeof De != "object") return this.defaultValue;
						const Re = De;
						return {
							insertMode: I(Re.insertMode, this.defaultValue.insertMode, [
								"insert",
								"replace",
							]),
							filterGraceful: b(
								Re.filterGraceful,
								this.defaultValue.filterGraceful,
							),
							snippetsPreventQuickSuggestions: b(
								Re.snippetsPreventQuickSuggestions,
								this.defaultValue.filterGraceful,
							),
							localityBonus: b(
								Re.localityBonus,
								this.defaultValue.localityBonus,
							),
							shareSuggestSelections: b(
								Re.shareSuggestSelections,
								this.defaultValue.shareSuggestSelections,
							),
							selectionMode: I(
								Re.selectionMode,
								this.defaultValue.selectionMode,
								[
									"always",
									"never",
									"whenQuickSuggestion",
									"whenTriggerCharacter",
								],
							),
							showIcons: b(Re.showIcons, this.defaultValue.showIcons),
							showStatusBar: b(
								Re.showStatusBar,
								this.defaultValue.showStatusBar,
							),
							preview: b(Re.preview, this.defaultValue.preview),
							previewMode: I(Re.previewMode, this.defaultValue.previewMode, [
								"prefix",
								"subword",
								"subwordSmart",
							]),
							showInlineDetails: b(
								Re.showInlineDetails,
								this.defaultValue.showInlineDetails,
							),
							showMethods: b(Re.showMethods, this.defaultValue.showMethods),
							showFunctions: b(
								Re.showFunctions,
								this.defaultValue.showFunctions,
							),
							showConstructors: b(
								Re.showConstructors,
								this.defaultValue.showConstructors,
							),
							showDeprecated: b(
								Re.showDeprecated,
								this.defaultValue.showDeprecated,
							),
							matchOnWordStartOnly: b(
								Re.matchOnWordStartOnly,
								this.defaultValue.matchOnWordStartOnly,
							),
							showFields: b(Re.showFields, this.defaultValue.showFields),
							showVariables: b(
								Re.showVariables,
								this.defaultValue.showVariables,
							),
							showClasses: b(Re.showClasses, this.defaultValue.showClasses),
							showStructs: b(Re.showStructs, this.defaultValue.showStructs),
							showInterfaces: b(
								Re.showInterfaces,
								this.defaultValue.showInterfaces,
							),
							showModules: b(Re.showModules, this.defaultValue.showModules),
							showProperties: b(
								Re.showProperties,
								this.defaultValue.showProperties,
							),
							showEvents: b(Re.showEvents, this.defaultValue.showEvents),
							showOperators: b(
								Re.showOperators,
								this.defaultValue.showOperators,
							),
							showUnits: b(Re.showUnits, this.defaultValue.showUnits),
							showValues: b(Re.showValues, this.defaultValue.showValues),
							showConstants: b(
								Re.showConstants,
								this.defaultValue.showConstants,
							),
							showEnums: b(Re.showEnums, this.defaultValue.showEnums),
							showEnumMembers: b(
								Re.showEnumMembers,
								this.defaultValue.showEnumMembers,
							),
							showKeywords: b(Re.showKeywords, this.defaultValue.showKeywords),
							showWords: b(Re.showWords, this.defaultValue.showWords),
							showColors: b(Re.showColors, this.defaultValue.showColors),
							showFiles: b(Re.showFiles, this.defaultValue.showFiles),
							showReferences: b(
								Re.showReferences,
								this.defaultValue.showReferences,
							),
							showFolders: b(Re.showFolders, this.defaultValue.showFolders),
							showTypeParameters: b(
								Re.showTypeParameters,
								this.defaultValue.showTypeParameters,
							),
							showSnippets: b(Re.showSnippets, this.defaultValue.showSnippets),
							showUsers: b(Re.showUsers, this.defaultValue.showUsers),
							showIssues: b(Re.showIssues, this.defaultValue.showIssues),
						};
					}
				}
				class He extends n {
					constructor() {
						super(
							Ae.smartSelect,
							"smartSelect",
							{ selectLeadingAndTrailingWhitespace: !0, selectSubwords: !0 },
							{
								"editor.smartSelect.selectLeadingAndTrailingWhitespace": {
									description: r.localize(499, null),
									default: !0,
									type: "boolean",
								},
								"editor.smartSelect.selectSubwords": {
									description: r.localize(500, null),
									default: !0,
									type: "boolean",
								},
							},
						);
					}
					validate(De) {
						return !De || typeof De != "object"
							? this.defaultValue
							: {
									selectLeadingAndTrailingWhitespace: b(
										De.selectLeadingAndTrailingWhitespace,
										this.defaultValue.selectLeadingAndTrailingWhitespace,
									),
									selectSubwords: b(
										De.selectSubwords,
										this.defaultValue.selectSubwords,
									),
								};
					}
				}
				class Ke extends n {
					constructor() {
						const De = [];
						super(Ae.wordSegmenterLocales, "wordSegmenterLocales", De, {
							anyOf: [
								{ description: r.localize(501, null), type: "string" },
								{
									description: r.localize(502, null),
									type: "array",
									items: { type: "string" },
								},
							],
						});
					}
					validate(De) {
						if ((typeof De == "string" && (De = [De]), Array.isArray(De))) {
							const Re = [];
							for (const je of De)
								if (typeof je == "string")
									try {
										Intl.Segmenter.supportedLocalesOf(je).length > 0 &&
											Re.push(je);
									} catch {}
							return Re;
						}
						return this.defaultValue;
					}
				}
				var Je;
				(function (Me) {
					(Me[(Me.None = 0)] = "None"),
						(Me[(Me.Same = 1)] = "Same"),
						(Me[(Me.Indent = 2)] = "Indent"),
						(Me[(Me.DeepIndent = 3)] = "DeepIndent");
				})(Je || (e.WrappingIndent = Je = {}));
				class Te extends n {
					constructor() {
						super(Ae.wrappingIndent, "wrappingIndent", Je.Same, {
							"editor.wrappingIndent": {
								type: "string",
								enum: ["none", "same", "indent", "deepIndent"],
								enumDescriptions: [
									r.localize(503, null),
									r.localize(504, null),
									r.localize(505, null),
									r.localize(506, null),
								],
								description: r.localize(507, null),
								default: "same",
							},
						});
					}
					validate(De) {
						switch (De) {
							case "none":
								return Je.None;
							case "same":
								return Je.Same;
							case "indent":
								return Je.Indent;
							case "deepIndent":
								return Je.DeepIndent;
						}
						return Je.Same;
					}
					compute(De, Re, je) {
						return Re.get(Ae.accessibilitySupport) ===
							u.AccessibilitySupport.Enabled
							? Je.None
							: je;
					}
				}
				class Ee extends o {
					constructor() {
						super(Ae.wrappingInfo);
					}
					compute(De, Re, je) {
						const Ve = Re.get(Ae.layoutInfo);
						return {
							isDominatedByLongLines: De.isDominatedByLongLines,
							isWordWrapMinified: Ve.isWordWrapMinified,
							isViewportWrapping: Ve.isViewportWrapping,
							wrappingColumn: Ve.wrappingColumn,
						};
					}
				}
				class Ie extends n {
					constructor() {
						const De = { enabled: !0, showDropSelector: "afterDrop" };
						super(Ae.dropIntoEditor, "dropIntoEditor", De, {
							"editor.dropIntoEditor.enabled": {
								type: "boolean",
								default: De.enabled,
								markdownDescription: r.localize(508, null),
							},
							"editor.dropIntoEditor.showDropSelector": {
								type: "string",
								markdownDescription: r.localize(509, null),
								enum: ["afterDrop", "never"],
								enumDescriptions: [
									r.localize(510, null),
									r.localize(511, null),
								],
								default: "afterDrop",
							},
						});
					}
					validate(De) {
						if (!De || typeof De != "object") return this.defaultValue;
						const Re = De;
						return {
							enabled: b(Re.enabled, this.defaultValue.enabled),
							showDropSelector: I(
								Re.showDropSelector,
								this.defaultValue.showDropSelector,
								["afterDrop", "never"],
							),
						};
					}
				}
				class Be extends n {
					constructor() {
						const De = { enabled: !0, showPasteSelector: "afterPaste" };
						super(Ae.pasteAs, "pasteAs", De, {
							"editor.pasteAs.enabled": {
								type: "boolean",
								default: De.enabled,
								markdownDescription: r.localize(512, null),
							},
							"editor.pasteAs.showPasteSelector": {
								type: "string",
								markdownDescription: r.localize(513, null),
								enum: ["afterPaste", "never"],
								enumDescriptions: [
									r.localize(514, null),
									r.localize(515, null),
								],
								default: "afterPaste",
							},
						});
					}
					validate(De) {
						if (!De || typeof De != "object") return this.defaultValue;
						const Re = De;
						return {
							enabled: b(Re.enabled, this.defaultValue.enabled),
							showPasteSelector: I(
								Re.showPasteSelector,
								this.defaultValue.showPasteSelector,
								["afterPaste", "never"],
							),
						};
					}
				}
				const Se = "Consolas, 'Courier New', monospace",
					ke = "Menlo, Monaco, 'Courier New', monospace",
					Ue = "'Droid Sans Mono', 'monospace', monospace";
				(e.EDITOR_FONT_DEFAULTS = {
					fontFamily: w.$m ? ke : w.$n ? Ue : Se,
					fontWeight: "normal",
					fontSize: w.$m ? 12 : 14,
					lineHeight: 0,
					letterSpacing: 0,
				}),
					(e.editorOptionsRegistry = []);
				function qe(Me) {
					return (e.editorOptionsRegistry[Me.id] = Me), Me;
				}
				var Ae;
				(function (Me) {
					(Me[(Me.acceptSuggestionOnCommitCharacter = 0)] =
						"acceptSuggestionOnCommitCharacter"),
						(Me[(Me.acceptSuggestionOnEnter = 1)] = "acceptSuggestionOnEnter"),
						(Me[(Me.accessibilitySupport = 2)] = "accessibilitySupport"),
						(Me[(Me.accessibilityPageSize = 3)] = "accessibilityPageSize"),
						(Me[(Me.ariaLabel = 4)] = "ariaLabel"),
						(Me[(Me.ariaRequired = 5)] = "ariaRequired"),
						(Me[(Me.autoClosingBrackets = 6)] = "autoClosingBrackets"),
						(Me[(Me.autoClosingComments = 7)] = "autoClosingComments"),
						(Me[(Me.screenReaderAnnounceInlineSuggestion = 8)] =
							"screenReaderAnnounceInlineSuggestion"),
						(Me[(Me.autoClosingDelete = 9)] = "autoClosingDelete"),
						(Me[(Me.autoClosingOvertype = 10)] = "autoClosingOvertype"),
						(Me[(Me.autoClosingQuotes = 11)] = "autoClosingQuotes"),
						(Me[(Me.autoIndent = 12)] = "autoIndent"),
						(Me[(Me.automaticLayout = 13)] = "automaticLayout"),
						(Me[(Me.autoSurround = 14)] = "autoSurround"),
						(Me[(Me.bracketPairColorization = 15)] = "bracketPairColorization"),
						(Me[(Me.guides = 16)] = "guides"),
						(Me[(Me.codeLens = 17)] = "codeLens"),
						(Me[(Me.codeLensFontFamily = 18)] = "codeLensFontFamily"),
						(Me[(Me.codeLensFontSize = 19)] = "codeLensFontSize"),
						(Me[(Me.colorDecorators = 20)] = "colorDecorators"),
						(Me[(Me.colorDecoratorsLimit = 21)] = "colorDecoratorsLimit"),
						(Me[(Me.columnSelection = 22)] = "columnSelection"),
						(Me[(Me.comments = 23)] = "comments"),
						(Me[(Me.contextmenu = 24)] = "contextmenu"),
						(Me[(Me.copyWithSyntaxHighlighting = 25)] =
							"copyWithSyntaxHighlighting"),
						(Me[(Me.cursorBlinking = 26)] = "cursorBlinking"),
						(Me[(Me.cursorSmoothCaretAnimation = 27)] =
							"cursorSmoothCaretAnimation"),
						(Me[(Me.cursorStyle = 28)] = "cursorStyle"),
						(Me[(Me.cursorSurroundingLines = 29)] = "cursorSurroundingLines"),
						(Me[(Me.cursorSurroundingLinesStyle = 30)] =
							"cursorSurroundingLinesStyle"),
						(Me[(Me.cursorWidth = 31)] = "cursorWidth"),
						(Me[(Me.disableLayerHinting = 32)] = "disableLayerHinting"),
						(Me[(Me.disableMonospaceOptimizations = 33)] =
							"disableMonospaceOptimizations"),
						(Me[(Me.domReadOnly = 34)] = "domReadOnly"),
						(Me[(Me.dragAndDrop = 35)] = "dragAndDrop"),
						(Me[(Me.dropIntoEditor = 36)] = "dropIntoEditor"),
						(Me[(Me.emptySelectionClipboard = 37)] = "emptySelectionClipboard"),
						(Me[(Me.experimentalWhitespaceRendering = 38)] =
							"experimentalWhitespaceRendering"),
						(Me[(Me.extraEditorClassName = 39)] = "extraEditorClassName"),
						(Me[(Me.fastScrollSensitivity = 40)] = "fastScrollSensitivity"),
						(Me[(Me.find = 41)] = "find"),
						(Me[(Me.fixedOverflowWidgets = 42)] = "fixedOverflowWidgets"),
						(Me[(Me.folding = 43)] = "folding"),
						(Me[(Me.foldingStrategy = 44)] = "foldingStrategy"),
						(Me[(Me.foldingHighlight = 45)] = "foldingHighlight"),
						(Me[(Me.foldingImportsByDefault = 46)] = "foldingImportsByDefault"),
						(Me[(Me.foldingMaximumRegions = 47)] = "foldingMaximumRegions"),
						(Me[(Me.unfoldOnClickAfterEndOfLine = 48)] =
							"unfoldOnClickAfterEndOfLine"),
						(Me[(Me.fontFamily = 49)] = "fontFamily"),
						(Me[(Me.fontInfo = 50)] = "fontInfo"),
						(Me[(Me.fontLigatures = 51)] = "fontLigatures"),
						(Me[(Me.fontSize = 52)] = "fontSize"),
						(Me[(Me.fontWeight = 53)] = "fontWeight"),
						(Me[(Me.fontVariations = 54)] = "fontVariations"),
						(Me[(Me.formatOnPaste = 55)] = "formatOnPaste"),
						(Me[(Me.formatOnType = 56)] = "formatOnType"),
						(Me[(Me.glyphMargin = 57)] = "glyphMargin"),
						(Me[(Me.gotoLocation = 58)] = "gotoLocation"),
						(Me[(Me.hideCursorInOverviewRuler = 59)] =
							"hideCursorInOverviewRuler"),
						(Me[(Me.hover = 60)] = "hover"),
						(Me[(Me.inDiffEditor = 61)] = "inDiffEditor"),
						(Me[(Me.inlineSuggest = 62)] = "inlineSuggest"),
						(Me[(Me.inlineEdit = 63)] = "inlineEdit"),
						(Me[(Me.letterSpacing = 64)] = "letterSpacing"),
						(Me[(Me.lightbulb = 65)] = "lightbulb"),
						(Me[(Me.lineDecorationsWidth = 66)] = "lineDecorationsWidth"),
						(Me[(Me.lineHeight = 67)] = "lineHeight"),
						(Me[(Me.lineNumbers = 68)] = "lineNumbers"),
						(Me[(Me.lineNumbersMinChars = 69)] = "lineNumbersMinChars"),
						(Me[(Me.linkedEditing = 70)] = "linkedEditing"),
						(Me[(Me.links = 71)] = "links"),
						(Me[(Me.matchBrackets = 72)] = "matchBrackets"),
						(Me[(Me.minimap = 73)] = "minimap"),
						(Me[(Me.mouseStyle = 74)] = "mouseStyle"),
						(Me[(Me.mouseWheelScrollSensitivity = 75)] =
							"mouseWheelScrollSensitivity"),
						(Me[(Me.mouseWheelZoom = 76)] = "mouseWheelZoom"),
						(Me[(Me.multiCursorMergeOverlapping = 77)] =
							"multiCursorMergeOverlapping"),
						(Me[(Me.multiCursorModifier = 78)] = "multiCursorModifier"),
						(Me[(Me.multiCursorPaste = 79)] = "multiCursorPaste"),
						(Me[(Me.multiCursorLimit = 80)] = "multiCursorLimit"),
						(Me[(Me.occurrencesHighlight = 81)] = "occurrencesHighlight"),
						(Me[(Me.overviewRulerBorder = 82)] = "overviewRulerBorder"),
						(Me[(Me.overviewRulerLanes = 83)] = "overviewRulerLanes"),
						(Me[(Me.padding = 84)] = "padding"),
						(Me[(Me.pasteAs = 85)] = "pasteAs"),
						(Me[(Me.parameterHints = 86)] = "parameterHints"),
						(Me[(Me.peekWidgetDefaultFocus = 87)] = "peekWidgetDefaultFocus"),
						(Me[(Me.placeholder = 88)] = "placeholder"),
						(Me[(Me.definitionLinkOpensInPeek = 89)] =
							"definitionLinkOpensInPeek"),
						(Me[(Me.quickSuggestions = 90)] = "quickSuggestions"),
						(Me[(Me.quickSuggestionsDelay = 91)] = "quickSuggestionsDelay"),
						(Me[(Me.readOnly = 92)] = "readOnly"),
						(Me[(Me.readOnlyMessage = 93)] = "readOnlyMessage"),
						(Me[(Me.renameOnType = 94)] = "renameOnType"),
						(Me[(Me.renderControlCharacters = 95)] = "renderControlCharacters"),
						(Me[(Me.renderFinalNewline = 96)] = "renderFinalNewline"),
						(Me[(Me.renderLineHighlight = 97)] = "renderLineHighlight"),
						(Me[(Me.renderLineHighlightOnlyWhenFocus = 98)] =
							"renderLineHighlightOnlyWhenFocus"),
						(Me[(Me.renderValidationDecorations = 99)] =
							"renderValidationDecorations"),
						(Me[(Me.renderWhitespace = 100)] = "renderWhitespace"),
						(Me[(Me.revealHorizontalRightPadding = 101)] =
							"revealHorizontalRightPadding"),
						(Me[(Me.roundedSelection = 102)] = "roundedSelection"),
						(Me[(Me.rulers = 103)] = "rulers"),
						(Me[(Me.scrollbar = 104)] = "scrollbar"),
						(Me[(Me.scrollBeyondLastColumn = 105)] = "scrollBeyondLastColumn"),
						(Me[(Me.scrollBeyondLastLine = 106)] = "scrollBeyondLastLine"),
						(Me[(Me.scrollPredominantAxis = 107)] = "scrollPredominantAxis"),
						(Me[(Me.selectionClipboard = 108)] = "selectionClipboard"),
						(Me[(Me.selectionHighlight = 109)] = "selectionHighlight"),
						(Me[(Me.selectOnLineNumbers = 110)] = "selectOnLineNumbers"),
						(Me[(Me.showFoldingControls = 111)] = "showFoldingControls"),
						(Me[(Me.showUnused = 112)] = "showUnused"),
						(Me[(Me.snippetSuggestions = 113)] = "snippetSuggestions"),
						(Me[(Me.smartSelect = 114)] = "smartSelect"),
						(Me[(Me.smoothScrolling = 115)] = "smoothScrolling"),
						(Me[(Me.stickyScroll = 116)] = "stickyScroll"),
						(Me[(Me.stickyTabStops = 117)] = "stickyTabStops"),
						(Me[(Me.stopRenderingLineAfter = 118)] = "stopRenderingLineAfter"),
						(Me[(Me.suggest = 119)] = "suggest"),
						(Me[(Me.suggestFontSize = 120)] = "suggestFontSize"),
						(Me[(Me.suggestLineHeight = 121)] = "suggestLineHeight"),
						(Me[(Me.suggestOnTriggerCharacters = 122)] =
							"suggestOnTriggerCharacters"),
						(Me[(Me.suggestSelection = 123)] = "suggestSelection"),
						(Me[(Me.tabCompletion = 124)] = "tabCompletion"),
						(Me[(Me.tabIndex = 125)] = "tabIndex"),
						(Me[(Me.unicodeHighlighting = 126)] = "unicodeHighlighting"),
						(Me[(Me.unusualLineTerminators = 127)] = "unusualLineTerminators"),
						(Me[(Me.useShadowDOM = 128)] = "useShadowDOM"),
						(Me[(Me.useTabStops = 129)] = "useTabStops"),
						(Me[(Me.wordBreak = 130)] = "wordBreak"),
						(Me[(Me.wordSegmenterLocales = 131)] = "wordSegmenterLocales"),
						(Me[(Me.wordSeparators = 132)] = "wordSeparators"),
						(Me[(Me.wordWrap = 133)] = "wordWrap"),
						(Me[(Me.wordWrapBreakAfterCharacters = 134)] =
							"wordWrapBreakAfterCharacters"),
						(Me[(Me.wordWrapBreakBeforeCharacters = 135)] =
							"wordWrapBreakBeforeCharacters"),
						(Me[(Me.wordWrapColumn = 136)] = "wordWrapColumn"),
						(Me[(Me.wordWrapOverride1 = 137)] = "wordWrapOverride1"),
						(Me[(Me.wordWrapOverride2 = 138)] = "wordWrapOverride2"),
						(Me[(Me.wrappingIndent = 139)] = "wrappingIndent"),
						(Me[(Me.wrappingStrategy = 140)] = "wrappingStrategy"),
						(Me[(Me.showDeprecated = 141)] = "showDeprecated"),
						(Me[(Me.inlayHints = 142)] = "inlayHints"),
						(Me[(Me.editorClassName = 143)] = "editorClassName"),
						(Me[(Me.pixelRatio = 144)] = "pixelRatio"),
						(Me[(Me.tabFocusMode = 145)] = "tabFocusMode"),
						(Me[(Me.layoutInfo = 146)] = "layoutInfo"),
						(Me[(Me.wrappingInfo = 147)] = "wrappingInfo"),
						(Me[(Me.defaultColorDecorators = 148)] = "defaultColorDecorators"),
						(Me[(Me.colorDecoratorsActivatedOn = 149)] =
							"colorDecoratorsActivatedOn"),
						(Me[(Me.inlineCompletionsAccessibilityVerbose = 150)] =
							"inlineCompletionsAccessibilityVerbose"),
						(Me[(Me.automaticLayoutIgnoreHeight = 151)] =
							"automaticLayoutIgnoreHeight");
				})(Ae || (e.EditorOption = Ae = {})),
					(e.EditorOptions = {
						acceptSuggestionOnCommitCharacter: qe(
							new s(
								Ae.acceptSuggestionOnCommitCharacter,
								"acceptSuggestionOnCommitCharacter",
								!0,
								{ markdownDescription: r.localize(516, null) },
							),
						),
						acceptSuggestionOnEnter: qe(
							new T(
								Ae.acceptSuggestionOnEnter,
								"acceptSuggestionOnEnter",
								"on",
								["on", "smart", "off"],
								{
									markdownEnumDescriptions: ["", r.localize(517, null), ""],
									markdownDescription: r.localize(518, null),
								},
							),
						),
						accessibilitySupport: qe(new L()),
						accessibilityPageSize: qe(
							new y(
								Ae.accessibilityPageSize,
								"accessibilityPageSize",
								10,
								1,
								C.Constants.MAX_SAFE_SMALL_INTEGER,
								{ description: r.localize(519, null), tags: ["accessibility"] },
							),
						),
						ariaLabel: qe(
							new S(Ae.ariaLabel, "ariaLabel", r.localize(520, null)),
						),
						ariaRequired: qe(
							new s(Ae.ariaRequired, "ariaRequired", !1, void 0),
						),
						screenReaderAnnounceInlineSuggestion: qe(
							new s(
								Ae.screenReaderAnnounceInlineSuggestion,
								"screenReaderAnnounceInlineSuggestion",
								!0,
								{ description: r.localize(521, null), tags: ["accessibility"] },
							),
						),
						autoClosingBrackets: qe(
							new T(
								Ae.autoClosingBrackets,
								"autoClosingBrackets",
								"languageDefined",
								["always", "languageDefined", "beforeWhitespace", "never"],
								{
									enumDescriptions: [
										"",
										r.localize(522, null),
										r.localize(523, null),
										"",
									],
									description: r.localize(524, null),
								},
							),
						),
						autoClosingComments: qe(
							new T(
								Ae.autoClosingComments,
								"autoClosingComments",
								"languageDefined",
								["always", "languageDefined", "beforeWhitespace", "never"],
								{
									enumDescriptions: [
										"",
										r.localize(525, null),
										r.localize(526, null),
										"",
									],
									description: r.localize(527, null),
								},
							),
						),
						autoClosingDelete: qe(
							new T(
								Ae.autoClosingDelete,
								"autoClosingDelete",
								"auto",
								["always", "auto", "never"],
								{
									enumDescriptions: ["", r.localize(528, null), ""],
									description: r.localize(529, null),
								},
							),
						),
						autoClosingOvertype: qe(
							new T(
								Ae.autoClosingOvertype,
								"autoClosingOvertype",
								"auto",
								["always", "auto", "never"],
								{
									enumDescriptions: ["", r.localize(530, null), ""],
									description: r.localize(531, null),
								},
							),
						),
						autoClosingQuotes: qe(
							new T(
								Ae.autoClosingQuotes,
								"autoClosingQuotes",
								"languageDefined",
								["always", "languageDefined", "beforeWhitespace", "never"],
								{
									enumDescriptions: [
										"",
										r.localize(532, null),
										r.localize(533, null),
										"",
									],
									description: r.localize(534, null),
								},
							),
						),
						autoIndent: qe(
							new P(
								Ae.autoIndent,
								"autoIndent",
								a.Full,
								"full",
								["none", "keep", "brackets", "advanced", "full"],
								k,
								{
									enumDescriptions: [
										r.localize(535, null),
										r.localize(536, null),
										r.localize(537, null),
										r.localize(538, null),
										r.localize(539, null),
									],
									description: r.localize(540, null),
								},
							),
						),
						automaticLayout: qe(
							new s(Ae.automaticLayout, "automaticLayout", !1),
						),
						autoSurround: qe(
							new T(
								Ae.autoSurround,
								"autoSurround",
								"languageDefined",
								["languageDefined", "quotes", "brackets", "never"],
								{
									enumDescriptions: [
										r.localize(541, null),
										r.localize(542, null),
										r.localize(543, null),
										"",
									],
									description: r.localize(544, null),
								},
							),
						),
						bracketPairColorization: qe(new Le()),
						bracketPairGuides: qe(new Fe()),
						stickyTabStops: qe(
							new s(Ae.stickyTabStops, "stickyTabStops", !1, {
								description: r.localize(545, null),
							}),
						),
						codeLens: qe(
							new s(Ae.codeLens, "codeLens", !0, {
								description: r.localize(546, null),
							}),
						),
						codeLensFontFamily: qe(
							new S(Ae.codeLensFontFamily, "codeLensFontFamily", "", {
								description: r.localize(547, null),
							}),
						),
						codeLensFontSize: qe(
							new y(Ae.codeLensFontSize, "codeLensFontSize", 0, 0, 100, {
								type: "number",
								default: 0,
								minimum: 0,
								maximum: 100,
								markdownDescription: r.localize(548, null),
							}),
						),
						colorDecorators: qe(
							new s(Ae.colorDecorators, "colorDecorators", !0, {
								description: r.localize(549, null),
							}),
						),
						colorDecoratorActivatedOn: qe(
							new T(
								Ae.colorDecoratorsActivatedOn,
								"colorDecoratorsActivatedOn",
								"clickAndHover",
								["clickAndHover", "hover", "click"],
								{
									enumDescriptions: [
										r.localize(550, null),
										r.localize(551, null),
										r.localize(552, null),
									],
									description: r.localize(553, null),
								},
							),
						),
						colorDecoratorsLimit: qe(
							new y(
								Ae.colorDecoratorsLimit,
								"colorDecoratorsLimit",
								500,
								1,
								1e6,
								{ markdownDescription: r.localize(554, null) },
							),
						),
						columnSelection: qe(
							new s(Ae.columnSelection, "columnSelection", !1, {
								description: r.localize(555, null),
							}),
						),
						comments: qe(new D()),
						contextmenu: qe(new s(Ae.contextmenu, "contextmenu", !0)),
						copyWithSyntaxHighlighting: qe(
							new s(
								Ae.copyWithSyntaxHighlighting,
								"copyWithSyntaxHighlighting",
								!0,
								{ description: r.localize(556, null) },
							),
						),
						cursorBlinking: qe(
							new P(
								Ae.cursorBlinking,
								"cursorBlinking",
								M.Blink,
								"blink",
								["blink", "smooth", "phase", "expand", "solid"],
								N,
								{ description: r.localize(557, null) },
							),
						),
						cursorSmoothCaretAnimation: qe(
							new T(
								Ae.cursorSmoothCaretAnimation,
								"cursorSmoothCaretAnimation",
								"off",
								["off", "explicit", "on"],
								{
									enumDescriptions: [
										r.localize(558, null),
										r.localize(559, null),
										r.localize(560, null),
									],
									description: r.localize(561, null),
								},
							),
						),
						cursorStyle: qe(
							new P(
								Ae.cursorStyle,
								"cursorStyle",
								A.Line,
								"line",
								[
									"line",
									"block",
									"underline",
									"line-thin",
									"block-outline",
									"underline-thin",
								],
								O,
								{ description: r.localize(562, null) },
							),
						),
						cursorSurroundingLines: qe(
							new y(
								Ae.cursorSurroundingLines,
								"cursorSurroundingLines",
								0,
								0,
								C.Constants.MAX_SAFE_SMALL_INTEGER,
								{ description: r.localize(563, null) },
							),
						),
						cursorSurroundingLinesStyle: qe(
							new T(
								Ae.cursorSurroundingLinesStyle,
								"cursorSurroundingLinesStyle",
								"default",
								["default", "all"],
								{
									enumDescriptions: [
										r.localize(564, null),
										r.localize(565, null),
									],
									markdownDescription: r.localize(566, null),
								},
							),
						),
						cursorWidth: qe(
							new y(
								Ae.cursorWidth,
								"cursorWidth",
								0,
								0,
								C.Constants.MAX_SAFE_SMALL_INTEGER,
								{ markdownDescription: r.localize(567, null) },
							),
						),
						disableLayerHinting: qe(
							new s(Ae.disableLayerHinting, "disableLayerHinting", !1),
						),
						disableMonospaceOptimizations: qe(
							new s(
								Ae.disableMonospaceOptimizations,
								"disableMonospaceOptimizations",
								!1,
							),
						),
						domReadOnly: qe(new s(Ae.domReadOnly, "domReadOnly", !1)),
						dragAndDrop: qe(
							new s(Ae.dragAndDrop, "dragAndDrop", !0, {
								description: r.localize(568, null),
							}),
						),
						emptySelectionClipboard: qe(new U()),
						dropIntoEditor: qe(new Ie()),
						stickyScroll: qe(new ne()),
						experimentalWhitespaceRendering: qe(
							new T(
								Ae.experimentalWhitespaceRendering,
								"experimentalWhitespaceRendering",
								"svg",
								["svg", "font", "off"],
								{
									enumDescriptions: [
										r.localize(569, null),
										r.localize(570, null),
										r.localize(571, null),
									],
									description: r.localize(572, null),
								},
							),
						),
						extraEditorClassName: qe(
							new S(Ae.extraEditorClassName, "extraEditorClassName", ""),
						),
						fastScrollSensitivity: qe(
							new v(
								Ae.fastScrollSensitivity,
								"fastScrollSensitivity",
								5,
								(Me) => (Me <= 0 ? 5 : Me),
								{ markdownDescription: r.localize(573, null) },
							),
						),
						find: qe(new z()),
						fixedOverflowWidgets: qe(
							new s(Ae.fixedOverflowWidgets, "fixedOverflowWidgets", !1),
						),
						folding: qe(
							new s(Ae.folding, "folding", !0, {
								description: r.localize(574, null),
							}),
						),
						foldingStrategy: qe(
							new T(
								Ae.foldingStrategy,
								"foldingStrategy",
								"auto",
								["auto", "indentation"],
								{
									enumDescriptions: [
										r.localize(575, null),
										r.localize(576, null),
									],
									description: r.localize(577, null),
								},
							),
						),
						foldingHighlight: qe(
							new s(Ae.foldingHighlight, "foldingHighlight", !0, {
								description: r.localize(578, null),
							}),
						),
						foldingImportsByDefault: qe(
							new s(Ae.foldingImportsByDefault, "foldingImportsByDefault", !1, {
								description: r.localize(579, null),
							}),
						),
						foldingMaximumRegions: qe(
							new y(
								Ae.foldingMaximumRegions,
								"foldingMaximumRegions",
								5e3,
								10,
								65e3,
								{ description: r.localize(580, null) },
							),
						),
						unfoldOnClickAfterEndOfLine: qe(
							new s(
								Ae.unfoldOnClickAfterEndOfLine,
								"unfoldOnClickAfterEndOfLine",
								!1,
								{ description: r.localize(581, null) },
							),
						),
						fontFamily: qe(
							new S(
								Ae.fontFamily,
								"fontFamily",
								e.EDITOR_FONT_DEFAULTS.fontFamily,
								{ description: r.localize(582, null) },
							),
						),
						fontInfo: qe(new H()),
						fontLigatures2: qe(new F()),
						fontSize: qe(new q()),
						fontWeight: qe(new V()),
						fontVariations: qe(new x()),
						formatOnPaste: qe(
							new s(Ae.formatOnPaste, "formatOnPaste", !1, {
								description: r.localize(583, null),
							}),
						),
						formatOnType: qe(
							new s(Ae.formatOnType, "formatOnType", !1, {
								description: r.localize(584, null),
							}),
						),
						glyphMargin: qe(
							new s(Ae.glyphMargin, "glyphMargin", !0, {
								description: r.localize(585, null),
							}),
						),
						gotoLocation: qe(new G()),
						hideCursorInOverviewRuler: qe(
							new s(
								Ae.hideCursorInOverviewRuler,
								"hideCursorInOverviewRuler",
								!1,
								{ description: r.localize(586, null) },
							),
						),
						hover: qe(new K()),
						inDiffEditor: qe(new s(Ae.inDiffEditor, "inDiffEditor", !1)),
						letterSpacing: qe(
							new v(
								Ae.letterSpacing,
								"letterSpacing",
								e.EDITOR_FONT_DEFAULTS.letterSpacing,
								(Me) => v.clamp(Me, -5, 20),
								{ description: r.localize(587, null) },
							),
						),
						lightbulb: qe(new ie()),
						lineDecorationsWidth: qe(new _()),
						lineHeight: qe(new te()),
						lineNumbers: qe(new $e()),
						lineNumbersMinChars: qe(
							new y(Ae.lineNumbersMinChars, "lineNumbersMinChars", 5, 1, 300),
						),
						linkedEditing: qe(
							new s(Ae.linkedEditing, "linkedEditing", !1, {
								description: r.localize(588, null),
							}),
						),
						links: qe(
							new s(Ae.links, "links", !0, {
								description: r.localize(589, null),
							}),
						),
						matchBrackets: qe(
							new T(
								Ae.matchBrackets,
								"matchBrackets",
								"always",
								["always", "near", "never"],
								{ description: r.localize(590, null) },
							),
						),
						minimap: qe(new Q()),
						mouseStyle: qe(
							new T(Ae.mouseStyle, "mouseStyle", "text", [
								"text",
								"default",
								"copy",
							]),
						),
						mouseWheelScrollSensitivity: qe(
							new v(
								Ae.mouseWheelScrollSensitivity,
								"mouseWheelScrollSensitivity",
								1,
								(Me) => (Me === 0 ? 1 : Me),
								{ markdownDescription: r.localize(591, null) },
							),
						),
						mouseWheelZoom: qe(
							new s(Ae.mouseWheelZoom, "mouseWheelZoom", !1, {
								markdownDescription: w.$m
									? r.localize(592, null)
									: r.localize(593, null),
							}),
						),
						multiCursorMergeOverlapping: qe(
							new s(
								Ae.multiCursorMergeOverlapping,
								"multiCursorMergeOverlapping",
								!0,
								{ description: r.localize(594, null) },
							),
						),
						multiCursorModifier: qe(
							new P(
								Ae.multiCursorModifier,
								"multiCursorModifier",
								"altKey",
								"alt",
								["ctrlCmd", "alt"],
								Z,
								{
									markdownEnumDescriptions: [
										r.localize(595, null),
										r.localize(596, null),
									],
									markdownDescription: r.localize(597, null),
								},
							),
						),
						multiCursorPaste: qe(
							new T(
								Ae.multiCursorPaste,
								"multiCursorPaste",
								"spread",
								["spread", "full"],
								{
									markdownEnumDescriptions: [
										r.localize(598, null),
										r.localize(599, null),
									],
									markdownDescription: r.localize(600, null),
								},
							),
						),
						multiCursorLimit: qe(
							new y(Ae.multiCursorLimit, "multiCursorLimit", 1e4, 1, 1e5, {
								markdownDescription: r.localize(601, null),
							}),
						),
						occurrencesHighlight: qe(
							new T(
								Ae.occurrencesHighlight,
								"occurrencesHighlight",
								"singleFile",
								["off", "singleFile", "multiFile"],
								{
									markdownEnumDescriptions: [
										r.localize(602, null),
										r.localize(603, null),
										r.localize(604, null),
									],
									markdownDescription: r.localize(605, null),
								},
							),
						),
						overviewRulerBorder: qe(
							new s(Ae.overviewRulerBorder, "overviewRulerBorder", !0, {
								description: r.localize(606, null),
							}),
						),
						overviewRulerLanes: qe(
							new y(Ae.overviewRulerLanes, "overviewRulerLanes", 3, 0, 3),
						),
						padding: qe(new se()),
						pasteAs: qe(new Be()),
						parameterHints: qe(new re()),
						peekWidgetDefaultFocus: qe(
							new T(
								Ae.peekWidgetDefaultFocus,
								"peekWidgetDefaultFocus",
								"tree",
								["tree", "editor"],
								{
									enumDescriptions: [
										r.localize(607, null),
										r.localize(608, null),
									],
									description: r.localize(609, null),
								},
							),
						),
						placeholder: qe(new oe()),
						definitionLinkOpensInPeek: qe(
							new s(
								Ae.definitionLinkOpensInPeek,
								"definitionLinkOpensInPeek",
								!1,
								{ description: r.localize(610, null) },
							),
						),
						quickSuggestions: qe(new ae()),
						quickSuggestionsDelay: qe(
							new y(
								Ae.quickSuggestionsDelay,
								"quickSuggestionsDelay",
								10,
								0,
								C.Constants.MAX_SAFE_SMALL_INTEGER,
								{ description: r.localize(611, null) },
							),
						),
						readOnly: qe(new s(Ae.readOnly, "readOnly", !1)),
						readOnlyMessage: qe(new fe()),
						renameOnType: qe(
							new s(Ae.renameOnType, "renameOnType", !1, {
								description: r.localize(612, null),
								markdownDeprecationMessage: r.localize(613, null),
							}),
						),
						renderControlCharacters: qe(
							new s(Ae.renderControlCharacters, "renderControlCharacters", !0, {
								description: r.localize(614, null),
								restricted: !0,
							}),
						),
						renderFinalNewline: qe(
							new T(
								Ae.renderFinalNewline,
								"renderFinalNewline",
								w.$n ? "dimmed" : "on",
								["off", "on", "dimmed"],
								{ description: r.localize(615, null) },
							),
						),
						renderLineHighlight: qe(
							new T(
								Ae.renderLineHighlight,
								"renderLineHighlight",
								"line",
								["none", "gutter", "line", "all"],
								{
									enumDescriptions: ["", "", "", r.localize(616, null)],
									description: r.localize(617, null),
								},
							),
						),
						renderLineHighlightOnlyWhenFocus: qe(
							new s(
								Ae.renderLineHighlightOnlyWhenFocus,
								"renderLineHighlightOnlyWhenFocus",
								!1,
								{ description: r.localize(618, null) },
							),
						),
						renderValidationDecorations: qe(
							new T(
								Ae.renderValidationDecorations,
								"renderValidationDecorations",
								"editable",
								["editable", "on", "off"],
							),
						),
						renderWhitespace: qe(
							new T(
								Ae.renderWhitespace,
								"renderWhitespace",
								"selection",
								["none", "boundary", "selection", "trailing", "all"],
								{
									enumDescriptions: [
										"",
										r.localize(619, null),
										r.localize(620, null),
										r.localize(621, null),
										"",
									],
									description: r.localize(622, null),
								},
							),
						),
						revealHorizontalRightPadding: qe(
							new y(
								Ae.revealHorizontalRightPadding,
								"revealHorizontalRightPadding",
								15,
								0,
								1e3,
							),
						),
						roundedSelection: qe(
							new s(Ae.roundedSelection, "roundedSelection", !0, {
								description: r.localize(623, null),
							}),
						),
						rulers: qe(new ue()),
						scrollbar: qe(new ve()),
						scrollBeyondLastColumn: qe(
							new y(
								Ae.scrollBeyondLastColumn,
								"scrollBeyondLastColumn",
								4,
								0,
								C.Constants.MAX_SAFE_SMALL_INTEGER,
								{ description: r.localize(624, null) },
							),
						),
						scrollBeyondLastLine: qe(
							new s(Ae.scrollBeyondLastLine, "scrollBeyondLastLine", !0, {
								description: r.localize(625, null),
							}),
						),
						scrollPredominantAxis: qe(
							new s(Ae.scrollPredominantAxis, "scrollPredominantAxis", !0, {
								description: r.localize(626, null),
							}),
						),
						selectionClipboard: qe(
							new s(Ae.selectionClipboard, "selectionClipboard", !0, {
								description: r.localize(627, null),
								included: w.$n,
							}),
						),
						selectionHighlight: qe(
							new s(Ae.selectionHighlight, "selectionHighlight", !0, {
								description: r.localize(628, null),
							}),
						),
						selectOnLineNumbers: qe(
							new s(Ae.selectOnLineNumbers, "selectOnLineNumbers", !0),
						),
						showFoldingControls: qe(
							new T(
								Ae.showFoldingControls,
								"showFoldingControls",
								"mouseover",
								["always", "never", "mouseover"],
								{
									enumDescriptions: [
										r.localize(629, null),
										r.localize(630, null),
										r.localize(631, null),
									],
									description: r.localize(632, null),
								},
							),
						),
						showUnused: qe(
							new s(Ae.showUnused, "showUnused", !0, {
								description: r.localize(633, null),
							}),
						),
						showDeprecated: qe(
							new s(Ae.showDeprecated, "showDeprecated", !0, {
								description: r.localize(634, null),
							}),
						),
						inlayHints: qe(new ee()),
						snippetSuggestions: qe(
							new T(
								Ae.snippetSuggestions,
								"snippetSuggestions",
								"inline",
								["top", "bottom", "inline", "none"],
								{
									enumDescriptions: [
										r.localize(635, null),
										r.localize(636, null),
										r.localize(637, null),
										r.localize(638, null),
									],
									description: r.localize(639, null),
								},
							),
						),
						smartSelect: qe(new He()),
						smoothScrolling: qe(
							new s(Ae.smoothScrolling, "smoothScrolling", !1, {
								description: r.localize(640, null),
							}),
						),
						stopRenderingLineAfter: qe(
							new y(
								Ae.stopRenderingLineAfter,
								"stopRenderingLineAfter",
								1e4,
								-1,
								C.Constants.MAX_SAFE_SMALL_INTEGER,
							),
						),
						suggest: qe(new xe()),
						inlineSuggest: qe(new be()),
						inlineEdit: qe(new Ce()),
						inlineCompletionsAccessibilityVerbose: qe(
							new s(
								Ae.inlineCompletionsAccessibilityVerbose,
								"inlineCompletionsAccessibilityVerbose",
								!1,
								{ description: r.localize(641, null) },
							),
						),
						automaticLayoutIgnoreHeight: qe(
							new s(
								Ae.automaticLayoutIgnoreHeight,
								"automaticLayoutIgnoreHeight",
								!1,
							),
						),
						suggestFontSize: qe(
							new y(Ae.suggestFontSize, "suggestFontSize", 0, 0, 1e3, {
								markdownDescription: r.localize(
									642,
									null,
									"`0`",
									"`#editor.fontSize#`",
								),
							}),
						),
						suggestLineHeight: qe(
							new y(Ae.suggestLineHeight, "suggestLineHeight", 0, 0, 1e3, {
								markdownDescription: r.localize(
									643,
									null,
									"`0`",
									"`#editor.lineHeight#`",
								),
							}),
						),
						suggestOnTriggerCharacters: qe(
							new s(
								Ae.suggestOnTriggerCharacters,
								"suggestOnTriggerCharacters",
								!0,
								{ description: r.localize(644, null) },
							),
						),
						suggestSelection: qe(
							new T(
								Ae.suggestSelection,
								"suggestSelection",
								"first",
								["first", "recentlyUsed", "recentlyUsedByPrefix"],
								{
									markdownEnumDescriptions: [
										r.localize(645, null),
										r.localize(646, null),
										r.localize(647, null),
									],
									description: r.localize(648, null),
								},
							),
						),
						tabCompletion: qe(
							new T(
								Ae.tabCompletion,
								"tabCompletion",
								"off",
								["on", "off", "onlySnippets"],
								{
									enumDescriptions: [
										r.localize(649, null),
										r.localize(650, null),
										r.localize(651, null),
									],
									description: r.localize(652, null),
								},
							),
						),
						tabIndex: qe(
							new y(
								Ae.tabIndex,
								"tabIndex",
								0,
								-1,
								C.Constants.MAX_SAFE_SMALL_INTEGER,
							),
						),
						unicodeHighlight: qe(new ge()),
						unusualLineTerminators: qe(
							new T(
								Ae.unusualLineTerminators,
								"unusualLineTerminators",
								"prompt",
								["auto", "off", "prompt"],
								{
									enumDescriptions: [
										r.localize(653, null),
										r.localize(654, null),
										r.localize(655, null),
									],
									description: r.localize(656, null),
								},
							),
						),
						useShadowDOM: qe(new s(Ae.useShadowDOM, "useShadowDOM", !0)),
						useTabStops: qe(
							new s(Ae.useTabStops, "useTabStops", !0, {
								description: r.localize(657, null),
							}),
						),
						wordBreak: qe(
							new T(
								Ae.wordBreak,
								"wordBreak",
								"normal",
								["normal", "keepAll"],
								{
									markdownEnumDescriptions: [
										r.localize(658, null),
										r.localize(659, null),
									],
									description: r.localize(660, null),
								},
							),
						),
						wordSegmenterLocales: qe(new Ke()),
						wordSeparators: qe(
							new S(Ae.wordSeparators, "wordSeparators", m.$SK, {
								description: r.localize(661, null),
							}),
						),
						wordWrap: qe(
							new T(
								Ae.wordWrap,
								"wordWrap",
								"off",
								["off", "on", "wordWrapColumn", "bounded"],
								{
									markdownEnumDescriptions: [
										r.localize(662, null),
										r.localize(663, null),
										r.localize(664, null),
										r.localize(665, null),
									],
									description: r.localize(666, null),
								},
							),
						),
						wordWrapBreakAfterCharacters: qe(
							new S(
								Ae.wordWrapBreakAfterCharacters,
								"wordWrapBreakAfterCharacters",
								" 	})]?|/&.,;\xA2\xB0\u2032\u2033\u2030\u2103\u3001\u3002\uFF61\uFF64\uFFE0\uFF0C\uFF0E\uFF1A\uFF1B\uFF1F\uFF01\uFF05\u30FB\uFF65\u309D\u309E\u30FD\u30FE\u30FC\u30A1\u30A3\u30A5\u30A7\u30A9\u30C3\u30E3\u30E5\u30E7\u30EE\u30F5\u30F6\u3041\u3043\u3045\u3047\u3049\u3063\u3083\u3085\u3087\u308E\u3095\u3096\u31F0\u31F1\u31F2\u31F3\u31F4\u31F5\u31F6\u31F7\u31F8\u31F9\u31FA\u31FB\u31FC\u31FD\u31FE\u31FF\u3005\u303B\uFF67\uFF68\uFF69\uFF6A\uFF6B\uFF6C\uFF6D\uFF6E\uFF6F\uFF70\u201D\u3009\u300B\u300D\u300F\u3011\u3015\uFF09\uFF3D\uFF5D\uFF63",
							),
						),
						wordWrapBreakBeforeCharacters: qe(
							new S(
								Ae.wordWrapBreakBeforeCharacters,
								"wordWrapBreakBeforeCharacters",
								"([{\u2018\u201C\u3008\u300A\u300C\u300E\u3010\u3014\uFF08\uFF3B\uFF5B\uFF62\xA3\xA5\uFF04\uFFE1\uFFE5+\uFF0B",
							),
						),
						wordWrapColumn: qe(
							new y(
								Ae.wordWrapColumn,
								"wordWrapColumn",
								80,
								1,
								C.Constants.MAX_SAFE_SMALL_INTEGER,
								{ markdownDescription: r.localize(667, null) },
							),
						),
						wordWrapOverride1: qe(
							new T(Ae.wordWrapOverride1, "wordWrapOverride1", "inherit", [
								"off",
								"on",
								"inherit",
							]),
						),
						wordWrapOverride2: qe(
							new T(Ae.wordWrapOverride2, "wordWrapOverride2", "inherit", [
								"off",
								"on",
								"inherit",
							]),
						),
						editorClassName: qe(new B()),
						defaultColorDecorators: qe(
							new s(Ae.defaultColorDecorators, "defaultColorDecorators", !1, {
								markdownDescription: r.localize(668, null),
							}),
						),
						pixelRatio: qe(new le()),
						tabFocusMode: qe(
							new s(Ae.tabFocusMode, "tabFocusMode", !1, {
								markdownDescription: r.localize(669, null),
							}),
						),
						layoutInfo: qe(new W()),
						wrappingInfo: qe(new Ee()),
						wrappingIndent: qe(new Te()),
						wrappingStrategy: qe(new X()),
					});
			},
		),
		