define(
			de[74],
			he([1, 0, 14, 9, 188, 17, 2571, 4]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.InlineEditTriggerKind =
						e.ExternalUriOpenerPriority =
						e.$mM =
						e.$lM =
						e.$kM =
						e.InlayHintKind =
						e.CommentState =
						e.CommentMode =
						e.CommentThreadApplicability =
						e.CommentThreadState =
						e.CommentThreadCollapsibleState =
						e.Command =
						e.NewSymbolNameTriggerKind =
						e.NewSymbolNameTag =
						e.$jM =
						e.$iM =
						e.SymbolKinds =
						e.SymbolTag =
						e.$gM =
						e.SymbolKind =
						e.DocumentHighlightKind =
						e.SignatureHelpTriggerKind =
						e.DocumentPasteTriggerKind =
						e.CodeActionTriggerType =
						e.$eM =
						e.InlineCompletionTriggerKind =
						e.CompletionTriggerKind =
						e.PartialAcceptTriggerKind =
						e.CompletionItemInsertTextRule =
						e.CompletionItemTag =
						e.CompletionItemKinds =
						e.CompletionItemKind =
						e.HoverVerbosityAction =
						e.$dM =
						e.$cM =
						e.$bM =
							void 0),
					(e.$fM = v),
					(e.$hM = I);
				class m {
					constructor(V, G, K) {
						(this.offset = V),
							(this.type = G),
							(this.language = K),
							(this._tokenBrand = void 0);
					}
					toString() {
						return "(" + this.offset + ", " + this.type + ")";
					}
				}
				e.$bM = m;
				class r {
					constructor(V, G) {
						(this.tokens = V),
							(this.endState = G),
							(this._tokenizationResultBrand = void 0);
					}
				}
				e.$cM = r;
				class u {
					constructor(V, G) {
						(this.tokens = V),
							(this.endState = G),
							(this._encodedTokenizationResultBrand = void 0);
					}
				}
				e.$dM = u;
				var a;
				(function (q) {
					(q[(q.Increase = 0)] = "Increase"),
						(q[(q.Decrease = 1)] = "Decrease");
				})(a || (e.HoverVerbosityAction = a = {}));
				var h;
				(function (q) {
					(q[(q.Method = 0)] = "Method"),
						(q[(q.Function = 1)] = "Function"),
						(q[(q.Constructor = 2)] = "Constructor"),
						(q[(q.Field = 3)] = "Field"),
						(q[(q.Variable = 4)] = "Variable"),
						(q[(q.Class = 5)] = "Class"),
						(q[(q.Struct = 6)] = "Struct"),
						(q[(q.Interface = 7)] = "Interface"),
						(q[(q.Module = 8)] = "Module"),
						(q[(q.Property = 9)] = "Property"),
						(q[(q.Event = 10)] = "Event"),
						(q[(q.Operator = 11)] = "Operator"),
						(q[(q.Unit = 12)] = "Unit"),
						(q[(q.Value = 13)] = "Value"),
						(q[(q.Constant = 14)] = "Constant"),
						(q[(q.Enum = 15)] = "Enum"),
						(q[(q.EnumMember = 16)] = "EnumMember"),
						(q[(q.Keyword = 17)] = "Keyword"),
						(q[(q.Text = 18)] = "Text"),
						(q[(q.Color = 19)] = "Color"),
						(q[(q.File = 20)] = "File"),
						(q[(q.Reference = 21)] = "Reference"),
						(q[(q.Customcolor = 22)] = "Customcolor"),
						(q[(q.Folder = 23)] = "Folder"),
						(q[(q.TypeParameter = 24)] = "TypeParameter"),
						(q[(q.User = 25)] = "User"),
						(q[(q.Issue = 26)] = "Issue"),
						(q[(q.Snippet = 27)] = "Snippet");
				})(h || (e.CompletionItemKind = h = {}));
				var c;
				(function (q) {
					const V = new Map();
					V.set(h.Method, t.$ak.symbolMethod),
						V.set(h.Function, t.$ak.symbolFunction),
						V.set(h.Constructor, t.$ak.symbolConstructor),
						V.set(h.Field, t.$ak.symbolField),
						V.set(h.Variable, t.$ak.symbolVariable),
						V.set(h.Class, t.$ak.symbolClass),
						V.set(h.Struct, t.$ak.symbolStruct),
						V.set(h.Interface, t.$ak.symbolInterface),
						V.set(h.Module, t.$ak.symbolModule),
						V.set(h.Property, t.$ak.symbolProperty),
						V.set(h.Event, t.$ak.symbolEvent),
						V.set(h.Operator, t.$ak.symbolOperator),
						V.set(h.Unit, t.$ak.symbolUnit),
						V.set(h.Value, t.$ak.symbolValue),
						V.set(h.Enum, t.$ak.symbolEnum),
						V.set(h.Constant, t.$ak.symbolConstant),
						V.set(h.Enum, t.$ak.symbolEnum),
						V.set(h.EnumMember, t.$ak.symbolEnumMember),
						V.set(h.Keyword, t.$ak.symbolKeyword),
						V.set(h.Snippet, t.$ak.symbolSnippet),
						V.set(h.Text, t.$ak.symbolText),
						V.set(h.Color, t.$ak.symbolColor),
						V.set(h.File, t.$ak.symbolFile),
						V.set(h.Reference, t.$ak.symbolReference),
						V.set(h.Customcolor, t.$ak.symbolCustomColor),
						V.set(h.Folder, t.$ak.symbolFolder),
						V.set(h.TypeParameter, t.$ak.symbolTypeParameter),
						V.set(h.User, t.$ak.account),
						V.set(h.Issue, t.$ak.issues);
					function G(W) {
						let X = V.get(W);
						return (
							X ||
								(console.info("No codicon found for CompletionItemKind " + W),
								(X = t.$ak.symbolProperty)),
							X
						);
					}
					q.toIcon = G;
					const K = new Map();
					K.set("method", h.Method),
						K.set("function", h.Function),
						K.set("constructor", h.Constructor),
						K.set("field", h.Field),
						K.set("variable", h.Variable),
						K.set("class", h.Class),
						K.set("struct", h.Struct),
						K.set("interface", h.Interface),
						K.set("module", h.Module),
						K.set("property", h.Property),
						K.set("event", h.Event),
						K.set("operator", h.Operator),
						K.set("unit", h.Unit),
						K.set("value", h.Value),
						K.set("constant", h.Constant),
						K.set("enum", h.Enum),
						K.set("enum-member", h.EnumMember),
						K.set("enumMember", h.EnumMember),
						K.set("keyword", h.Keyword),
						K.set("snippet", h.Snippet),
						K.set("text", h.Text),
						K.set("color", h.Color),
						K.set("file", h.File),
						K.set("reference", h.Reference),
						K.set("customcolor", h.Customcolor),
						K.set("folder", h.Folder),
						K.set("type-parameter", h.TypeParameter),
						K.set("typeParameter", h.TypeParameter),
						K.set("account", h.User),
						K.set("issue", h.Issue);
					function J(W, X) {
						let Y = K.get(W);
						return typeof Y > "u" && !X && (Y = h.Property), Y;
					}
					q.fromString = J;
				})(c || (e.CompletionItemKinds = c = {}));
				var n;
				(function (q) {
					q[(q.Deprecated = 1)] = "Deprecated";
				})(n || (e.CompletionItemTag = n = {}));
				var g;
				(function (q) {
					(q[(q.None = 0)] = "None"),
						(q[(q.KeepWhitespace = 1)] = "KeepWhitespace"),
						(q[(q.InsertAsSnippet = 4)] = "InsertAsSnippet");
				})(g || (e.CompletionItemInsertTextRule = g = {}));
				var p;
				(function (q) {
					(q[(q.Word = 0)] = "Word"),
						(q[(q.Line = 1)] = "Line"),
						(q[(q.Suggest = 2)] = "Suggest");
				})(p || (e.PartialAcceptTriggerKind = p = {}));
				var o;
				(function (q) {
					(q[(q.Invoke = 0)] = "Invoke"),
						(q[(q.TriggerCharacter = 1)] = "TriggerCharacter"),
						(q[(q.TriggerForIncompleteCompletions = 2)] =
							"TriggerForIncompleteCompletions");
				})(o || (e.CompletionTriggerKind = o = {}));
				var f;
				(function (q) {
					(q[(q.Automatic = 0)] = "Automatic"),
						(q[(q.Explicit = 1)] = "Explicit");
				})(f || (e.InlineCompletionTriggerKind = f = {}));
				class b {
					constructor(V, G, K, J) {
						(this.range = V),
							(this.text = G),
							(this.completionKind = K),
							(this.isSnippetText = J);
					}
					equals(V) {
						return (
							E.$iL.lift(this.range).equalsRange(V.range) &&
							this.text === V.text &&
							this.completionKind === V.completionKind &&
							this.isSnippetText === V.isSnippetText
						);
					}
				}
				e.$eM = b;
				var s;
				(function (q) {
					(q[(q.Invoke = 1)] = "Invoke"), (q[(q.Auto = 2)] = "Auto");
				})(s || (e.CodeActionTriggerType = s = {}));
				var l;
				(function (q) {
					(q[(q.Automatic = 0)] = "Automatic"),
						(q[(q.PasteAs = 1)] = "PasteAs");
				})(l || (e.DocumentPasteTriggerKind = l = {}));
				var y;
				(function (q) {
					(q[(q.Invoke = 1)] = "Invoke"),
						(q[(q.TriggerCharacter = 2)] = "TriggerCharacter"),
						(q[(q.ContentChange = 3)] = "ContentChange");
				})(y || (e.SignatureHelpTriggerKind = y = {}));
				var $;
				(function (q) {
					(q[(q.Text = 0)] = "Text"),
						(q[(q.Read = 1)] = "Read"),
						(q[(q.Write = 2)] = "Write");
				})($ || (e.DocumentHighlightKind = $ = {}));
				function v(q) {
					return (
						q &&
						i.URI.isUri(q.uri) &&
						E.$iL.isIRange(q.range) &&
						(E.$iL.isIRange(q.originSelectionRange) ||
							E.$iL.isIRange(q.targetSelectionRange))
					);
				}
				var S;
				(function (q) {
					(q[(q.File = 0)] = "File"),
						(q[(q.Module = 1)] = "Module"),
						(q[(q.Namespace = 2)] = "Namespace"),
						(q[(q.Package = 3)] = "Package"),
						(q[(q.Class = 4)] = "Class"),
						(q[(q.Method = 5)] = "Method"),
						(q[(q.Property = 6)] = "Property"),
						(q[(q.Field = 7)] = "Field"),
						(q[(q.Constructor = 8)] = "Constructor"),
						(q[(q.Enum = 9)] = "Enum"),
						(q[(q.Interface = 10)] = "Interface"),
						(q[(q.Function = 11)] = "Function"),
						(q[(q.Variable = 12)] = "Variable"),
						(q[(q.Constant = 13)] = "Constant"),
						(q[(q.String = 14)] = "String"),
						(q[(q.Number = 15)] = "Number"),
						(q[(q.Boolean = 16)] = "Boolean"),
						(q[(q.Array = 17)] = "Array"),
						(q[(q.Object = 18)] = "Object"),
						(q[(q.Key = 19)] = "Key"),
						(q[(q.Null = 20)] = "Null"),
						(q[(q.EnumMember = 21)] = "EnumMember"),
						(q[(q.Struct = 22)] = "Struct"),
						(q[(q.Event = 23)] = "Event"),
						(q[(q.Operator = 24)] = "Operator"),
						(q[(q.TypeParameter = 25)] = "TypeParameter");
				})(S || (e.SymbolKind = S = {})),
					(e.$gM = {
						[S.Array]: (0, d.localize)(790, null),
						[S.Boolean]: (0, d.localize)(791, null),
						[S.Class]: (0, d.localize)(792, null),
						[S.Constant]: (0, d.localize)(793, null),
						[S.Constructor]: (0, d.localize)(794, null),
						[S.Enum]: (0, d.localize)(795, null),
						[S.EnumMember]: (0, d.localize)(796, null),
						[S.Event]: (0, d.localize)(797, null),
						[S.Field]: (0, d.localize)(798, null),
						[S.File]: (0, d.localize)(799, null),
						[S.Function]: (0, d.localize)(800, null),
						[S.Interface]: (0, d.localize)(801, null),
						[S.Key]: (0, d.localize)(802, null),
						[S.Method]: (0, d.localize)(803, null),
						[S.Module]: (0, d.localize)(804, null),
						[S.Namespace]: (0, d.localize)(805, null),
						[S.Null]: (0, d.localize)(806, null),
						[S.Number]: (0, d.localize)(807, null),
						[S.Object]: (0, d.localize)(808, null),
						[S.Operator]: (0, d.localize)(809, null),
						[S.Package]: (0, d.localize)(810, null),
						[S.Property]: (0, d.localize)(811, null),
						[S.String]: (0, d.localize)(812, null),
						[S.Struct]: (0, d.localize)(813, null),
						[S.TypeParameter]: (0, d.localize)(814, null),
						[S.Variable]: (0, d.localize)(815, null),
					});
				function I(q, V) {
					return (0, d.localize)(816, null, q, e.$gM[V]);
				}
				var T;
				(function (q) {
					q[(q.Deprecated = 1)] = "Deprecated";
				})(T || (e.SymbolTag = T = {}));
				var P;
				(function (q) {
					const V = new Map();
					V.set(S.File, t.$ak.symbolFile),
						V.set(S.Module, t.$ak.symbolModule),
						V.set(S.Namespace, t.$ak.symbolNamespace),
						V.set(S.Package, t.$ak.symbolPackage),
						V.set(S.Class, t.$ak.symbolClass),
						V.set(S.Method, t.$ak.symbolMethod),
						V.set(S.Property, t.$ak.symbolProperty),
						V.set(S.Field, t.$ak.symbolField),
						V.set(S.Constructor, t.$ak.symbolConstructor),
						V.set(S.Enum, t.$ak.symbolEnum),
						V.set(S.Interface, t.$ak.symbolInterface),
						V.set(S.Function, t.$ak.symbolFunction),
						V.set(S.Variable, t.$ak.symbolVariable),
						V.set(S.Constant, t.$ak.symbolConstant),
						V.set(S.String, t.$ak.symbolString),
						V.set(S.Number, t.$ak.symbolNumber),
						V.set(S.Boolean, t.$ak.symbolBoolean),
						V.set(S.Array, t.$ak.symbolArray),
						V.set(S.Object, t.$ak.symbolObject),
						V.set(S.Key, t.$ak.symbolKey),
						V.set(S.Null, t.$ak.symbolNull),
						V.set(S.EnumMember, t.$ak.symbolEnumMember),
						V.set(S.Struct, t.$ak.symbolStruct),
						V.set(S.Event, t.$ak.symbolEvent),
						V.set(S.Operator, t.$ak.symbolOperator),
						V.set(S.TypeParameter, t.$ak.symbolTypeParameter);
					function G(K) {
						let J = V.get(K);
						return (
							J ||
								(console.info("No codicon found for SymbolKind " + K),
								(J = t.$ak.symbolProperty)),
							J
						);
					}
					q.toIcon = G;
				})(P || (e.SymbolKinds = P = {}));
				class k {
					static asEditOperation(V) {
						return w.$jL.replace(E.$iL.lift(V.range), V.text);
					}
				}
				e.$iM = k;
				class L {
					static {
						this.Comment = new L("comment");
					}
					static {
						this.Imports = new L("imports");
					}
					static {
						this.Region = new L("region");
					}
					static fromValue(V) {
						switch (V) {
							case "comment":
								return L.Comment;
							case "imports":
								return L.Imports;
							case "region":
								return L.Region;
						}
						return new L(V);
					}
					constructor(V) {
						this.value = V;
					}
				}
				e.$jM = L;
				var D;
				(function (q) {
					q[(q.AIGenerated = 1)] = "AIGenerated";
				})(D || (e.NewSymbolNameTag = D = {}));
				var M;
				(function (q) {
					(q[(q.Invoke = 0)] = "Invoke"), (q[(q.Automatic = 1)] = "Automatic");
				})(M || (e.NewSymbolNameTriggerKind = M = {}));
				var N;
				(function (q) {
					function V(G) {
						return !G || typeof G != "object"
							? !1
							: typeof G.id == "string" && typeof G.title == "string";
					}
					q.is = V;
				})(N || (e.Command = N = {}));
				var A;
				(function (q) {
					(q[(q.Collapsed = 0)] = "Collapsed"),
						(q[(q.Expanded = 1)] = "Expanded");
				})(A || (e.CommentThreadCollapsibleState = A = {}));
				var R;
				(function (q) {
					(q[(q.Unresolved = 0)] = "Unresolved"),
						(q[(q.Resolved = 1)] = "Resolved");
				})(R || (e.CommentThreadState = R = {}));
				var O;
				(function (q) {
					(q[(q.Current = 0)] = "Current"), (q[(q.Outdated = 1)] = "Outdated");
				})(O || (e.CommentThreadApplicability = O = {}));
				var B;
				(function (q) {
					(q[(q.Editing = 0)] = "Editing"), (q[(q.Preview = 1)] = "Preview");
				})(B || (e.CommentMode = B = {}));
				var U;
				(function (q) {
					(q[(q.Published = 0)] = "Published"), (q[(q.Draft = 1)] = "Draft");
				})(U || (e.CommentState = U = {}));
				var z;
				(function (q) {
					(q[(q.Type = 1)] = "Type"), (q[(q.Parameter = 2)] = "Parameter");
				})(z || (e.InlayHintKind = z = {}));
				class F {
					constructor(V) {
						(this.b = V), (this.a = null);
					}
					dispose() {
						this.a &&
							this.a.then((V) => {
								V && V.dispose();
							});
					}
					get tokenizationSupport() {
						return this.a || (this.a = this.b()), this.a;
					}
				}
				(e.$kM = F), (e.$lM = new C.$5L()), (e.$mM = new C.$5L());
				var x;
				(function (q) {
					(q[(q.None = 0)] = "None"),
						(q[(q.Option = 1)] = "Option"),
						(q[(q.Default = 2)] = "Default"),
						(q[(q.Preferred = 3)] = "Preferred");
				})(x || (e.ExternalUriOpenerPriority = x = {}));
				var H;
				(function (q) {
					(q[(q.Invoke = 0)] = "Invoke"), (q[(q.Automatic = 1)] = "Automatic");
				})(H || (e.InlineEditTriggerKind = H = {}));
			},
		),
		