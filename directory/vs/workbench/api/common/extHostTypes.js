import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/errors.js';
import '../../../base/common/htmlContent.js';
import '../../../base/common/map.js';
import '../../../base/common/mime.js';
import '../../../base/common/strings.js';
import '../../../base/common/types.js';
import '../../../base/common/uri.js';
import '../../../base/common/uuid.js';
import '../../../platform/extensions/common/extensions.js';
import '../../../platform/files/common/files.js';
import '../../../platform/remote/common/remoteAuthorityResolver.js';
import '../../contrib/notebook/common/notebookCommon.js';
define(
			de[1028],
			he([1, 0, 24, 29, 94, 59, 266, 37, 28, 9, 47, 109, 22, 211, 70]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				var g, p, o, f, b, s, l, y, $, v, S, I, T, P, k, L, D;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.InlineEditTriggerKind =
						e.$Ndb =
						e.KeywordRecognitionStatus =
						e.TextToSpeechStatus =
						e.SpeechToTextStatus =
						e.RelatedInformationType =
						e.$Mdb =
						e.$Ldb =
						e.$Kdb =
						e.$Jdb =
						e.$Idb =
						e.$Hdb =
						e.$Gdb =
						e.$Fdb =
						e.LanguageModelChatMessageRole =
						e.$Edb =
						e.$Ddb =
						e.ChatResponseReferencePartStatusKind =
						e.ChatLocation =
						e.$Cdb =
						e.$Bdb =
						e.$Adb =
						e.$zdb =
						e.$ydb =
						e.$xdb =
						e.$wdb =
						e.$vdb =
						e.$udb =
						e.$tdb =
						e.$sdb =
						e.$rdb =
						e.$qdb =
						e.$pdb =
						e.$odb =
						e.$ndb =
						e.ChatResultFeedbackKind =
						e.InteractiveEditorResponseFeedbackKind =
						e.$mdb =
						e.ChatVariableLevel =
						e.ChatCopyKind =
						e.InteractiveSessionVoteDirection =
						e.$ldb =
						e.$kdb =
						e.$jdb =
						e.$idb =
						e.$hdb =
						e.$gdb =
						e.$fdb =
						e.$edb =
						e.$ddb =
						e.$cdb =
						e.$bdb =
						e.$adb =
						e.PortAutoForwardAction =
						e.WorkspaceTrustState =
						e.ExternalUriOpenerPriority =
						e.$_cb =
						e.$$cb =
						e.$0cb =
						e.$9cb =
						e.$7cb =
						e.$6cb =
						e.$5cb =
						e.$4cb =
						e.$3cb =
						e.TestRunProfileKind =
						e.TestResultState =
						e.$2cb =
						e.$1cb =
						e.StandardTokenType =
						e.ExtensionRuntime =
						e.ExtensionMode =
						e.$Zcb =
						e.NotebookVariablesRequestKind =
						e.$Ycb =
						e.$Xcb =
						e.NotebookControllerAffinity2 =
						e.NotebookControllerAffinity =
						e.$Wcb =
						e.NotebookEditorRevealType =
						e.NotebookCellStatusBarAlignment =
						e.NotebookCellExecutionState =
						e.NotebookCellKind =
						e.$Vcb =
						e.$Ucb =
						e.$Tcb =
						e.$Scb =
						e.$Rcb =
						e.ColorThemeKind =
						e.$Qcb =
						e.$Pcb =
						e.ExtensionKind =
						e.InputBoxValidationSeverity =
						e.QuickPickItemKind =
						e.$Ocb =
						e.QuickInputButtonLocation =
						e.$Ncb =
						e.DebugConsoleMode =
						e.$Mcb =
						e.$Lcb =
						e.$Kcb =
						e.$Jcb =
						e.$Icb =
						e.CommentThreadFocus =
						e.CommentThreadApplicability =
						e.CommentThreadState =
						e.CommentState =
						e.CommentMode =
						e.CommentThreadCollapsibleState =
						e.FoldingRangeKind =
						e.$Hcb =
						e.$Gcb =
						e.FileChangeType =
						e.$Fcb =
						e.NewSymbolNameTriggerKind =
						e.NewSymbolNameTag =
						e.$Ecb =
						e.$Dcb =
						e.$Ccb =
						e.$Bcb =
						e.InlineCompletionTriggerKind =
						e.$Acb =
						e.$zcb =
						e.$ycb =
						e.$xcb =
						e.$wcb =
						e.$vcb =
						e.$ucb =
						e.$tcb =
						e.$scb =
						e.$rcb =
						e.$qcb =
						e.$ocb =
						e.ConfigurationTarget =
						e.$ncb =
						e.$mcb =
						e.$lcb =
						e.$kcb =
						e.DocumentPasteTriggerKind =
						e.$jcb =
						e.$icb =
						e.$hcb =
						e.$gcb =
						e.$fcb =
						e.$ecb =
						e.TreeItemCheckboxState =
						e.TreeItemCollapsibleState =
						e.$dcb =
						e.ViewBadge =
						e.ProgressLocation =
						e.Task =
						e.$bcb =
						e.TaskScope =
						e.ShellQuoting =
						e.$acb =
						e.$_bb =
						e.$$bb =
						e.TaskPanelKind =
						e.TaskRevealKind =
						e.$0bb =
						e.TerminalLocation =
						e.$9bb =
						e.$8bb =
						e.$7bb =
						e.TerminalShellExecutionCommandLineConfidence =
						e.TerminalExitReason =
						e.SourceControlInputBoxValidationType =
						e.ColorFormat =
						e.$6bb =
						e.$5bb =
						e.$4bb =
						e.$3bb =
						e.SyntaxTokenType =
						e.DecorationRangeBehavior =
						e.TextDocumentChangeReason =
						e.TextEditorSelectionChangeKind =
						e.TextEditorRevealType =
						e.TextDocumentSaveReason =
						e.TextEditorLineNumbersStyle =
						e.StatusBarAlignment =
						e.ViewColumn =
						e.PartialAcceptTriggerKind =
						e.$1bb =
						e.$Zbb =
						e.$Ybb =
						e.$Xbb =
						e.CompletionItemTag =
						e.CompletionItemKind =
						e.CompletionTriggerKind =
						e.$Wbb =
						e.$Vbb =
						e.InlayHintKind =
						e.SignatureHelpTriggerKind =
						e.$Ubb =
						e.$Tbb =
						e.$Sbb =
						e.$Rbb =
						e.$Qbb =
						e.LanguageStatusSeverity =
						e.$Pbb =
						e.$Obb =
						e.$Nbb =
						e.$Mbb =
						e.$Lbb =
						e.$Kbb =
						e.CodeActionTriggerKind =
						e.$Jbb =
						e.$Ibb =
						e.SymbolTag =
						e.SymbolKind =
						e.$Hbb =
						e.$Gbb =
						e.DocumentHighlightKind =
						e.HoverVerbosityAction =
						e.$Fbb =
						e.$Ebb =
						e.$Dbb =
						e.$Cbb =
						e.$Bbb =
						e.DiagnosticSeverity =
						e.DiagnosticTag =
						e.$Abb =
						e.$zbb =
						e.FileEditType =
						e.$ybb =
						e.$xbb =
						e.$wbb =
						e.EnvironmentVariableMutatorType =
						e.EndOfLine =
						e.$vbb =
						e.$ubb =
						e.$tbb =
						e.$qbb =
						e.$pbb =
						e.$obb =
						e.$nbb =
						e.TerminalQuickFixType =
						e.TerminalOutputAnchor =
							void 0),
					(e.$rbb = z),
					(e.$sbb = F),
					(e.$2bb = et),
					(e.$pcb = Ai),
					(e.$8cb = Jn);
				function M(St) {
					return Object.assign(St, {
						apply: function (...oi) {
							if (oi.length === 0) return Reflect.construct(St, []);
							{
								const Ei = oi.length === 1 ? [] : oi[1];
								return Reflect.construct(St, Ei, oi[0].constructor);
							}
						},
						call: function (...oi) {
							if (oi.length === 0) return Reflect.construct(St, []);
							{
								const [Ei, ...tn] = oi;
								return Reflect.construct(St, tn, Ei.constructor);
							}
						},
					});
				}
				var N;
				(function (St) {
					(St[(St.Top = 0)] = "Top"), (St[(St.Bottom = 1)] = "Bottom");
				})(N || (e.TerminalOutputAnchor = N = {}));
				var A;
				(function (St) {
					(St[(St.TerminalCommand = 0)] = "TerminalCommand"),
						(St[(St.Opener = 1)] = "Opener"),
						(St[(St.Command = 3)] = "Command");
				})(A || (e.TerminalQuickFixType = A = {}));
				let R = (g = class {
					static from(...vt) {
						let oi = vt;
						return new g(function () {
							if (oi) {
								for (const Ei of oi)
									Ei && typeof Ei.dispose == "function" && Ei.dispose();
								oi = void 0;
							}
						});
					}
					#e;
					constructor(vt) {
						this.#e = vt;
					}
					dispose() {
						typeof this.#e == "function" && (this.#e(), (this.#e = void 0));
					}
				});
				(e.$nbb = R), (e.$nbb = R = g = Ne([M], R));
				let O = (p = class {
					static Min(...vt) {
						if (vt.length === 0) throw new TypeError();
						let oi = vt[0];
						for (let Ei = 1; Ei < vt.length; Ei++) {
							const tn = vt[Ei];
							tn.isBefore(oi) && (oi = tn);
						}
						return oi;
					}
					static Max(...vt) {
						if (vt.length === 0) throw new TypeError();
						let oi = vt[0];
						for (let Ei = 1; Ei < vt.length; Ei++) {
							const tn = vt[Ei];
							tn.isAfter(oi) && (oi = tn);
						}
						return oi;
					}
					static isPosition(vt) {
						if (!vt) return !1;
						if (vt instanceof p) return !0;
						const { line: oi, character: Ei } = vt;
						return typeof oi == "number" && typeof Ei == "number";
					}
					static of(vt) {
						if (vt instanceof p) return vt;
						if (this.isPosition(vt)) return new p(vt.line, vt.character);
						throw new Error("Invalid argument, is NOT a position-like object");
					}
					get line() {
						return this.c;
					}
					get character() {
						return this.e;
					}
					constructor(vt, oi) {
						if (vt < 0) throw (0, i.$$)("line must be non-negative");
						if (oi < 0) throw (0, i.$$)("character must be non-negative");
						(this.c = vt), (this.e = oi);
					}
					isBefore(vt) {
						return this.c < vt.c ? !0 : vt.c < this.c ? !1 : this.e < vt.e;
					}
					isBeforeOrEqual(vt) {
						return this.c < vt.c ? !0 : vt.c < this.c ? !1 : this.e <= vt.e;
					}
					isAfter(vt) {
						return !this.isBeforeOrEqual(vt);
					}
					isAfterOrEqual(vt) {
						return !this.isBefore(vt);
					}
					isEqual(vt) {
						return this.c === vt.c && this.e === vt.e;
					}
					compareTo(vt) {
						return this.c < vt.c
							? -1
							: this.c > vt.line
								? 1
								: this.e < vt.e
									? -1
									: this.e > vt.e
										? 1
										: 0;
					}
					translate(vt, oi = 0) {
						if (vt === null || oi === null) throw (0, i.$$)();
						let Ei;
						return (
							typeof vt > "u"
								? (Ei = 0)
								: typeof vt == "number"
									? (Ei = vt)
									: ((Ei = typeof vt.lineDelta == "number" ? vt.lineDelta : 0),
										(oi =
											typeof vt.characterDelta == "number"
												? vt.characterDelta
												: 0)),
							Ei === 0 && oi === 0
								? this
								: new p(this.line + Ei, this.character + oi)
						);
					}
					with(vt, oi = this.character) {
						if (vt === null || oi === null) throw (0, i.$$)();
						let Ei;
						return (
							typeof vt > "u"
								? (Ei = this.line)
								: typeof vt == "number"
									? (Ei = vt)
									: ((Ei = typeof vt.line == "number" ? vt.line : this.line),
										(oi =
											typeof vt.character == "number"
												? vt.character
												: this.character)),
							Ei === this.line && oi === this.character ? this : new p(Ei, oi)
						);
					}
					toJSON() {
						return { line: this.line, character: this.character };
					}
					[Symbol.for("debug.description")]() {
						return `(${this.line}:${this.character})`;
					}
				});
				(e.$obb = O), (e.$obb = O = p = Ne([M], O));
				let B = (o = class {
					static isRange(vt) {
						return vt instanceof o
							? !0
							: vt
								? O.isPosition(vt.start) && O.isPosition(vt.end)
								: !1;
					}
					static of(vt) {
						if (vt instanceof o) return vt;
						if (this.isRange(vt)) return new o(vt.start, vt.end);
						throw new Error("Invalid argument, is NOT a range-like object");
					}
					get start() {
						return this.c;
					}
					get end() {
						return this.e;
					}
					constructor(vt, oi, Ei, tn) {
						let hn, In;
						if (
							(typeof vt == "number" &&
							typeof oi == "number" &&
							typeof Ei == "number" &&
							typeof tn == "number"
								? ((hn = new O(vt, oi)), (In = new O(Ei, tn)))
								: O.isPosition(vt) &&
									O.isPosition(oi) &&
									((hn = O.of(vt)), (In = O.of(oi))),
							!hn || !In)
						)
							throw new Error("Invalid arguments");
						hn.isBefore(In)
							? ((this.c = hn), (this.e = In))
							: ((this.c = In), (this.e = hn));
					}
					contains(vt) {
						return o.isRange(vt)
							? this.contains(vt.start) && this.contains(vt.end)
							: O.isPosition(vt)
								? !(O.of(vt).isBefore(this.c) || this.e.isBefore(vt))
								: !1;
					}
					isEqual(vt) {
						return this.c.isEqual(vt.c) && this.e.isEqual(vt.e);
					}
					intersection(vt) {
						const oi = O.Max(vt.start, this.c),
							Ei = O.Min(vt.end, this.e);
						if (!oi.isAfter(Ei)) return new o(oi, Ei);
					}
					union(vt) {
						if (this.contains(vt)) return this;
						if (vt.contains(this)) return vt;
						const oi = O.Min(vt.start, this.c),
							Ei = O.Max(vt.end, this.end);
						return new o(oi, Ei);
					}
					get isEmpty() {
						return this.c.isEqual(this.e);
					}
					get isSingleLine() {
						return this.c.line === this.e.line;
					}
					with(vt, oi = this.end) {
						if (vt === null || oi === null) throw (0, i.$$)();
						let Ei;
						return (
							vt
								? O.isPosition(vt)
									? (Ei = vt)
									: ((Ei = vt.start || this.start), (oi = vt.end || this.end))
								: (Ei = this.start),
							Ei.isEqual(this.c) && oi.isEqual(this.end) ? this : new o(Ei, oi)
						);
					}
					toJSON() {
						return [this.start, this.end];
					}
					[Symbol.for("debug.description")]() {
						return z(this);
					}
				});
				(e.$pbb = B), (e.$pbb = B = o = Ne([M], B));
				let U = (f = class extends B {
					static isSelection(vt) {
						return vt instanceof f
							? !0
							: vt
								? B.isRange(vt) &&
									O.isPosition(vt.anchor) &&
									O.isPosition(vt.active) &&
									typeof vt.isReversed == "boolean"
								: !1;
					}
					get anchor() {
						return this.f;
					}
					get active() {
						return this.g;
					}
					constructor(vt, oi, Ei, tn) {
						let hn, In;
						if (
							(typeof vt == "number" &&
							typeof oi == "number" &&
							typeof Ei == "number" &&
							typeof tn == "number"
								? ((hn = new O(vt, oi)), (In = new O(Ei, tn)))
								: O.isPosition(vt) &&
									O.isPosition(oi) &&
									((hn = O.of(vt)), (In = O.of(oi))),
							!hn || !In)
						)
							throw new Error("Invalid arguments");
						super(hn, In), (this.f = hn), (this.g = In);
					}
					get isReversed() {
						return this.f === this.e;
					}
					toJSON() {
						return {
							start: this.start,
							end: this.end,
							active: this.active,
							anchor: this.anchor,
						};
					}
					[Symbol.for("debug.description")]() {
						return F(this);
					}
				});
				(e.$qbb = U), (e.$qbb = U = f = Ne([M], U));
				function z(St) {
					return St.isEmpty
						? `[${St.start.line}:${St.start.character})`
						: `[${St.start.line}:${St.start.character} -> ${St.end.line}:${St.end.character})`;
				}
				function F(St) {
					let vt = z(St);
					return (
						St.isEmpty ||
							(St.active.isEqual(St.start) ? (vt = `|${vt}`) : (vt = `${vt}|`)),
						vt
					);
				}
				const x = (St) => {
					if (
						typeof St != "string" ||
						St.length === 0 ||
						!/^[0-9A-Za-z_\-]+$/.test(St)
					)
						throw (0, i.$$)("connectionToken");
				};
				class H {
					static isResolvedAuthority(vt) {
						return (
							vt &&
							typeof vt == "object" &&
							typeof vt.host == "string" &&
							typeof vt.port == "number" &&
							(vt.connectionToken === void 0 ||
								typeof vt.connectionToken == "string")
						);
					}
					constructor(vt, oi, Ei) {
						if (typeof vt != "string" || vt.length === 0)
							throw (0, i.$$)("host");
						if (typeof oi != "number" || oi === 0 || Math.round(oi) !== oi)
							throw (0, i.$$)("port");
						typeof Ei < "u" && x(Ei),
							(this.host = vt),
							(this.port = Math.round(oi)),
							(this.connectionToken = Ei);
					}
				}
				e.$tbb = H;
				class q {
					static isManagedResolvedAuthority(vt) {
						return (
							vt &&
							typeof vt == "object" &&
							typeof vt.makeConnection == "function" &&
							(vt.connectionToken === void 0 ||
								typeof vt.connectionToken == "string")
						);
					}
					constructor(vt, oi) {
						(this.makeConnection = vt),
							(this.connectionToken = oi),
							typeof oi < "u" && x(oi);
					}
				}
				e.$ubb = q;
				class V extends Error {
					static NotAvailable(vt, oi) {
						return new V(
							vt,
							c.RemoteAuthorityResolverErrorCode.NotAvailable,
							oi,
						);
					}
					static TemporarilyNotAvailable(vt) {
						return new V(
							vt,
							c.RemoteAuthorityResolverErrorCode.TemporarilyNotAvailable,
						);
					}
					constructor(vt, oi = c.RemoteAuthorityResolverErrorCode.Unknown, Ei) {
						super(vt),
							(this._message = vt),
							(this._code = oi),
							(this._detail = Ei),
							Object.setPrototypeOf(this, V.prototype);
					}
				}
				e.$vbb = V;
				var G;
				(function (St) {
					(St[(St.LF = 1)] = "LF"), (St[(St.CRLF = 2)] = "CRLF");
				})(G || (e.EndOfLine = G = {}));
				var K;
				(function (St) {
					(St[(St.Replace = 1)] = "Replace"),
						(St[(St.Append = 2)] = "Append"),
						(St[(St.Prepend = 3)] = "Prepend");
				})(K || (e.EnvironmentVariableMutatorType = K = {}));
				let J = (b = class {
					static isTextEdit(vt) {
						return vt instanceof b
							? !0
							: vt
								? B.isRange(vt) && typeof vt.newText == "string"
								: !1;
					}
					static replace(vt, oi) {
						return new b(vt, oi);
					}
					static insert(vt, oi) {
						return b.replace(new B(vt, vt), oi);
					}
					static delete(vt) {
						return b.replace(vt, "");
					}
					static setEndOfLine(vt) {
						const oi = new b(new B(new O(0, 0), new O(0, 0)), "");
						return (oi.newEol = vt), oi;
					}
					get range() {
						return this.c;
					}
					set range(vt) {
						if (vt && !B.isRange(vt)) throw (0, i.$$)("range");
						this.c = vt;
					}
					get newText() {
						return this.e || "";
					}
					set newText(vt) {
						if (vt && typeof vt != "string") throw (0, i.$$)("newText");
						this.e = vt;
					}
					get newEol() {
						return this.f;
					}
					set newEol(vt) {
						if (vt && typeof vt != "number") throw (0, i.$$)("newEol");
						this.f = vt;
					}
					constructor(vt, oi) {
						(this.c = vt), (this.e = oi);
					}
					toJSON() {
						return { range: this.range, newText: this.newText, newEol: this.f };
					}
				});
				(e.$wbb = J), (e.$wbb = J = b = Ne([M], J));
				let W = (s = class {
					static isNotebookCellEdit(vt) {
						return vt instanceof s
							? !0
							: vt
								? jn.isNotebookRange(vt) && Array.isArray(vt.newCells)
								: !1;
					}
					static replaceCells(vt, oi) {
						return new s(vt, oi);
					}
					static insertCells(vt, oi) {
						return new s(new jn(vt, vt), oi);
					}
					static deleteCells(vt) {
						return new s(vt, []);
					}
					static updateCellMetadata(vt, oi) {
						const Ei = new s(new jn(vt, vt), []);
						return (Ei.newCellMetadata = oi), Ei;
					}
					static updateNotebookMetadata(vt) {
						const oi = new s(new jn(0, 0), []);
						return (oi.newNotebookMetadata = vt), oi;
					}
					constructor(vt, oi) {
						(this.range = vt), (this.newCells = oi);
					}
				});
				(e.$xbb = W), (e.$xbb = W = s = Ne([M], W));
				class X {
					static isSnippetTextEdit(vt) {
						return vt instanceof X
							? !0
							: vt
								? B.isRange(vt.range) && ne.isSnippetString(vt.snippet)
								: !1;
					}
					static replace(vt, oi) {
						return new X(vt, oi);
					}
					static insert(vt, oi) {
						return X.replace(new B(vt, vt), oi);
					}
					constructor(vt, oi) {
						(this.range = vt), (this.snippet = oi);
					}
				}
				e.$ybb = X;
				var Y;
				(function (St) {
					(St[(St.File = 1)] = "File"),
						(St[(St.Text = 2)] = "Text"),
						(St[(St.Cell = 3)] = "Cell"),
						(St[(St.CellReplace = 5)] = "CellReplace"),
						(St[(St.Snippet = 6)] = "Snippet");
				})(Y || (e.FileEditType = Y = {}));
				let ie = class {
					constructor() {
						this.c = [];
					}
					_allEntries() {
						return this.c;
					}
					renameFile(vt, oi, Ei, tn) {
						this.c.push({
							_type: Y.File,
							from: vt,
							to: oi,
							options: Ei,
							metadata: tn,
						});
					}
					createFile(vt, oi, Ei) {
						this.c.push({
							_type: Y.File,
							from: void 0,
							to: vt,
							options: oi,
							metadata: Ei,
						});
					}
					deleteFile(vt, oi, Ei) {
						this.c.push({
							_type: Y.File,
							from: vt,
							to: void 0,
							options: oi,
							metadata: Ei,
						});
					}
					e(vt, oi, Ei) {
						this.c.push({
							_type: Y.Cell,
							metadata: Ei,
							uri: vt,
							edit: { editType: n.CellEditType.DocumentMetadata, metadata: oi },
							notebookMetadata: oi,
						});
					}
					f(vt, oi, Ei, tn) {
						const hn = oi.start,
							In = oi.end;
						(hn !== In || Ei.length > 0) &&
							this.c.push({
								_type: Y.CellReplace,
								uri: vt,
								index: hn,
								count: In - hn,
								cells: Ei,
								metadata: tn,
							});
					}
					g(vt, oi, Ei, tn) {
						this.c.push({
							_type: Y.Cell,
							metadata: tn,
							uri: vt,
							edit: {
								editType: n.CellEditType.Metadata,
								index: oi,
								metadata: Ei,
							},
						});
					}
					replace(vt, oi, Ei, tn) {
						this.c.push({
							_type: Y.Text,
							uri: vt,
							edit: new J(oi, Ei),
							metadata: tn,
						});
					}
					insert(vt, oi, Ei, tn) {
						this.replace(vt, new B(oi, oi), Ei, tn);
					}
					delete(vt, oi, Ei) {
						this.replace(vt, oi, "", Ei);
					}
					has(vt) {
						return this.c.some(
							(oi) =>
								oi._type === Y.Text && oi.uri.toString() === vt.toString(),
						);
					}
					set(vt, oi) {
						if (oi)
							for (const Ei of oi) {
								if (!Ei) continue;
								let tn, hn;
								Array.isArray(Ei) ? ((tn = Ei[0]), (hn = Ei[1])) : (tn = Ei),
									W.isNotebookCellEdit(tn)
										? tn.newCellMetadata
											? this.g(vt, tn.range.start, tn.newCellMetadata, hn)
											: tn.newNotebookMetadata
												? this.e(vt, tn.newNotebookMetadata, hn)
												: this.f(vt, tn.range, tn.newCells, hn)
										: X.isSnippetTextEdit(tn)
											? this.c.push({
													_type: Y.Snippet,
													uri: vt,
													range: tn.range,
													edit: tn.snippet,
													metadata: hn,
												})
											: this.c.push({
													_type: Y.Text,
													uri: vt,
													edit: tn,
													metadata: hn,
												});
							}
						else {
							for (let Ei = 0; Ei < this.c.length; Ei++) {
								const tn = this.c[Ei];
								switch (tn._type) {
									case Y.Text:
									case Y.Snippet:
									case Y.Cell:
									case Y.CellReplace:
										tn.uri.toString() === vt.toString() &&
											(this.c[Ei] = void 0);
										break;
								}
							}
							(0, t.$Mb)(this.c);
						}
					}
					get(vt) {
						const oi = [];
						for (const Ei of this.c)
							Ei._type === Y.Text &&
								Ei.uri.toString() === vt.toString() &&
								oi.push(Ei.edit);
						return oi;
					}
					entries() {
						const vt = new E.$Gc();
						for (const oi of this.c)
							if (oi._type === Y.Text) {
								let Ei = vt.get(oi.uri);
								Ei || ((Ei = [oi.uri, []]), vt.set(oi.uri, Ei)),
									Ei[1].push(oi.edit);
							}
						return [...vt.values()];
					}
					get size() {
						return this.entries().length;
					}
					toJSON() {
						return this.entries();
					}
				};
				(e.$zbb = ie), (e.$zbb = ie = Ne([M], ie));
				let ne = (l = class {
					static isSnippetString(vt) {
						return vt instanceof l ? !0 : vt ? typeof vt.value == "string" : !1;
					}
					static c(vt) {
						return vt.replace(/\$|}|\\/g, "\\$&");
					}
					constructor(vt) {
						(this.e = 1), (this.value = vt || "");
					}
					appendText(vt) {
						return (this.value += l.c(vt)), this;
					}
					appendTabstop(vt = this.e++) {
						return (this.value += "$"), (this.value += vt), this;
					}
					appendPlaceholder(vt, oi = this.e++) {
						if (typeof vt == "function") {
							const Ei = new l();
							(Ei.e = this.e), vt(Ei), (this.e = Ei.e), (vt = Ei.value);
						} else vt = l.c(vt);
						return (
							(this.value += "${"),
							(this.value += oi),
							(this.value += ":"),
							(this.value += vt),
							(this.value += "}"),
							this
						);
					}
					appendChoice(vt, oi = this.e++) {
						const Ei = vt
							.map((tn) => tn.replaceAll(/[|\\,]/g, "\\$&"))
							.join(",");
						return (
							(this.value += "${"),
							(this.value += oi),
							(this.value += "|"),
							(this.value += Ei),
							(this.value += "|}"),
							this
						);
					}
					appendVariable(vt, oi) {
						if (typeof oi == "function") {
							const Ei = new l();
							(Ei.e = this.e), oi(Ei), (this.e = Ei.e), (oi = Ei.value);
						} else typeof oi == "string" && (oi = oi.replace(/\$|}/g, "\\$&"));
						return (
							(this.value += "${"),
							(this.value += vt),
							oi && ((this.value += ":"), (this.value += oi)),
							(this.value += "}"),
							this
						);
					}
				});
				(e.$Abb = ne), (e.$Abb = ne = l = Ne([M], ne));
				var ee;
				(function (St) {
					(St[(St.Unnecessary = 1)] = "Unnecessary"),
						(St[(St.Deprecated = 2)] = "Deprecated");
				})(ee || (e.DiagnosticTag = ee = {}));
				var _;
				(function (St) {
					(St[(St.Hint = 3)] = "Hint"),
						(St[(St.Information = 2)] = "Information"),
						(St[(St.Warning = 1)] = "Warning"),
						(St[(St.Error = 0)] = "Error");
				})(_ || (e.DiagnosticSeverity = _ = {}));
				let te = (y = class {
					static isLocation(vt) {
						return vt instanceof y
							? !0
							: vt
								? B.isRange(vt.range) && r.URI.isUri(vt.uri)
								: !1;
					}
					constructor(vt, oi) {
						if (((this.uri = vt), oi))
							if (B.isRange(oi)) this.range = B.of(oi);
							else if (O.isPosition(oi)) this.range = new B(oi, oi);
							else throw new Error("Illegal argument");
					}
					toJSON() {
						return { uri: this.uri, range: this.range };
					}
				});
				(e.$Bbb = te), (e.$Bbb = te = y = Ne([M], te));
				let Q = class {
					static is(vt) {
						return vt
							? typeof vt.message == "string" &&
									vt.location &&
									B.isRange(vt.location.range) &&
									r.URI.isUri(vt.location.uri)
							: !1;
					}
					constructor(vt, oi) {
						(this.location = vt), (this.message = oi);
					}
					static isEqual(vt, oi) {
						return vt === oi
							? !0
							: !vt || !oi
								? !1
								: vt.message === oi.message &&
									vt.location.range.isEqual(oi.location.range) &&
									vt.location.uri.toString() === oi.location.uri.toString();
					}
				};
				(e.$Cbb = Q), (e.$Cbb = Q = Ne([M], Q));
				let Z = class {
					constructor(vt, oi, Ei = _.Error) {
						if (!B.isRange(vt)) throw new TypeError("range must be set");
						if (!oi) throw new TypeError("message must be set");
						(this.range = vt), (this.message = oi), (this.severity = Ei);
					}
					toJSON() {
						return {
							severity: _[this.severity],
							message: this.message,
							range: this.range,
							source: this.source,
							code: this.code,
						};
					}
					static isEqual(vt, oi) {
						return vt === oi
							? !0
							: !vt || !oi
								? !1
								: vt.message === oi.message &&
									vt.severity === oi.severity &&
									vt.code === oi.code &&
									vt.severity === oi.severity &&
									vt.source === oi.source &&
									vt.range.isEqual(oi.range) &&
									(0, t.$yb)(vt.tags, oi.tags) &&
									(0, t.$yb)(
										vt.relatedInformation,
										oi.relatedInformation,
										Q.isEqual,
									);
					}
				};
				(e.$Dbb = Z), (e.$Dbb = Z = Ne([M], Z));
				let se = class {
					constructor(vt, oi) {
						if (!vt)
							throw new Error("Illegal argument, contents must be defined");
						Array.isArray(vt) ? (this.contents = vt) : (this.contents = [vt]),
							(this.range = oi);
					}
				};
				(e.$Ebb = se), (e.$Ebb = se = Ne([M], se));
				let re = class extends se {
					constructor(vt, oi, Ei, tn) {
						super(vt, oi),
							(this.canIncreaseVerbosity = Ei),
							(this.canDecreaseVerbosity = tn);
					}
				};
				(e.$Fbb = re), (e.$Fbb = re = Ne([M], re));
				var le;
				(function (St) {
					(St[(St.Increase = 0)] = "Increase"),
						(St[(St.Decrease = 1)] = "Decrease");
				})(le || (e.HoverVerbosityAction = le = {}));
				var oe;
				(function (St) {
					(St[(St.Text = 0)] = "Text"),
						(St[(St.Read = 1)] = "Read"),
						(St[(St.Write = 2)] = "Write");
				})(oe || (e.DocumentHighlightKind = oe = {}));
				let ae = class {
					constructor(vt, oi = oe.Text) {
						(this.range = vt), (this.kind = oi);
					}
					toJSON() {
						return { range: this.range, kind: oe[this.kind] };
					}
				};
				(e.$Gbb = ae), (e.$Gbb = ae = Ne([M], ae));
				let pe = class {
					constructor(vt, oi) {
						(this.uri = vt), (this.highlights = oi);
					}
					toJSON() {
						return {
							uri: this.uri,
							highlights: this.highlights.map((vt) => vt.toJSON()),
						};
					}
				};
				(e.$Hbb = pe), (e.$Hbb = pe = Ne([M], pe));
				var $e;
				(function (St) {
					(St[(St.File = 0)] = "File"),
						(St[(St.Module = 1)] = "Module"),
						(St[(St.Namespace = 2)] = "Namespace"),
						(St[(St.Package = 3)] = "Package"),
						(St[(St.Class = 4)] = "Class"),
						(St[(St.Method = 5)] = "Method"),
						(St[(St.Property = 6)] = "Property"),
						(St[(St.Field = 7)] = "Field"),
						(St[(St.Constructor = 8)] = "Constructor"),
						(St[(St.Enum = 9)] = "Enum"),
						(St[(St.Interface = 10)] = "Interface"),
						(St[(St.Function = 11)] = "Function"),
						(St[(St.Variable = 12)] = "Variable"),
						(St[(St.Constant = 13)] = "Constant"),
						(St[(St.String = 14)] = "String"),
						(St[(St.Number = 15)] = "Number"),
						(St[(St.Boolean = 16)] = "Boolean"),
						(St[(St.Array = 17)] = "Array"),
						(St[(St.Object = 18)] = "Object"),
						(St[(St.Key = 19)] = "Key"),
						(St[(St.Null = 20)] = "Null"),
						(St[(St.EnumMember = 21)] = "EnumMember"),
						(St[(St.Struct = 22)] = "Struct"),
						(St[(St.Event = 23)] = "Event"),
						(St[(St.Operator = 24)] = "Operator"),
						(St[(St.TypeParameter = 25)] = "TypeParameter");
				})($e || (e.SymbolKind = $e = {}));
				var ye;
				(function (St) {
					St[(St.Deprecated = 1)] = "Deprecated";
				})(ye || (e.SymbolTag = ye = {}));
				let ue = ($ = class {
					static validate(vt) {
						if (!vt.name) throw new Error("name must not be falsy");
					}
					constructor(vt, oi, Ei, tn, hn) {
						(this.name = vt),
							(this.kind = oi),
							(this.containerName = hn),
							typeof Ei == "string" && (this.containerName = Ei),
							tn instanceof te
								? (this.location = tn)
								: Ei instanceof B && (this.location = new te(tn, Ei)),
							$.validate(this);
					}
					toJSON() {
						return {
							name: this.name,
							kind: $e[this.kind],
							location: this.location,
							containerName: this.containerName,
						};
					}
				});
				(e.$Ibb = ue), (e.$Ibb = ue = $ = Ne([M], ue));
				let fe = (v = class {
					static validate(vt) {
						if (!vt.name) throw new Error("name must not be falsy");
						if (!vt.range.contains(vt.selectionRange))
							throw new Error("selectionRange must be contained in fullRange");
						vt.children?.forEach(v.validate);
					}
					constructor(vt, oi, Ei, tn, hn) {
						(this.name = vt),
							(this.detail = oi),
							(this.kind = Ei),
							(this.range = tn),
							(this.selectionRange = hn),
							(this.children = []),
							v.validate(this);
					}
				});
				(e.$Jbb = fe), (e.$Jbb = fe = v = Ne([M], fe));
				var me;
				(function (St) {
					(St[(St.Invoke = 1)] = "Invoke"),
						(St[(St.Automatic = 2)] = "Automatic");
				})(me || (e.CodeActionTriggerKind = me = {}));
				let ve = class {
					constructor(vt, oi) {
						(this.title = vt), (this.kind = oi);
					}
				};
				(e.$Kbb = ve), (e.$Kbb = ve = Ne([M], ve));
				let ge = class {
					static {
						S = this;
					}
					static {
						this.c = ".";
					}
					constructor(vt) {
						this.value = vt;
					}
					append(vt) {
						return new S(this.value ? this.value + S.c + vt : vt);
					}
					intersects(vt) {
						return this.contains(vt) || vt.contains(this);
					}
					contains(vt) {
						return (
							this.value === vt.value || vt.value.startsWith(this.value + S.c)
						);
					}
				};
				(e.$Lbb = ge),
					(e.$Lbb = ge = S = Ne([M], ge)),
					(ge.Empty = new ge("")),
					(ge.QuickFix = ge.Empty.append("quickfix")),
					(ge.Refactor = ge.Empty.append("refactor")),
					(ge.RefactorExtract = ge.Refactor.append("extract")),
					(ge.RefactorInline = ge.Refactor.append("inline")),
					(ge.RefactorMove = ge.Refactor.append("move")),
					(ge.RefactorRewrite = ge.Refactor.append("rewrite")),
					(ge.Source = ge.Empty.append("source")),
					(ge.SourceOrganizeImports = ge.Source.append("organizeImports")),
					(ge.SourceFixAll = ge.Source.append("fixAll")),
					(ge.Notebook = ge.Empty.append("notebook"));
				let be = class {
					constructor(vt, oi) {
						if (
							((this.range = vt),
							(this.parent = oi),
							oi && !oi.range.contains(this.range))
						)
							throw new Error(
								"Invalid argument: parent must contain this range",
							);
					}
				};
				(e.$Mbb = be), (e.$Mbb = be = Ne([M], be));
				class Ce {
					constructor(vt, oi, Ei, tn, hn, In) {
						(this.kind = vt),
							(this.name = oi),
							(this.detail = Ei),
							(this.uri = tn),
							(this.range = hn),
							(this.selectionRange = In);
					}
				}
				e.$Nbb = Ce;
				class Le {
					constructor(vt, oi) {
						(this.fromRanges = oi), (this.from = vt);
					}
				}
				e.$Obb = Le;
				class Fe {
					constructor(vt, oi) {
						(this.fromRanges = oi), (this.to = vt);
					}
				}
				e.$Pbb = Fe;
				var Oe;
				(function (St) {
					(St[(St.Information = 0)] = "Information"),
						(St[(St.Warning = 1)] = "Warning"),
						(St[(St.Error = 2)] = "Error");
				})(Oe || (e.LanguageStatusSeverity = Oe = {}));
				let xe = class {
					constructor(vt, oi) {
						(this.range = vt), (this.command = oi);
					}
					get isResolved() {
						return !!this.command;
					}
				};
				(e.$Qbb = xe), (e.$Qbb = xe = Ne([M], xe));
				let He = (I = class {
					#e;
					static isMarkdownString(vt) {
						return vt instanceof I
							? !0
							: vt &&
									vt.appendCodeblock &&
									vt.appendMarkdown &&
									vt.appendText &&
									vt.value !== void 0;
					}
					constructor(vt, oi = !1) {
						this.#e = new w.$cl(vt, { supportThemeIcons: oi });
					}
					get value() {
						return this.#e.value;
					}
					set value(vt) {
						this.#e.value = vt;
					}
					get isTrusted() {
						return this.#e.isTrusted;
					}
					set isTrusted(vt) {
						this.#e.isTrusted = vt;
					}
					get supportThemeIcons() {
						return this.#e.supportThemeIcons;
					}
					set supportThemeIcons(vt) {
						this.#e.supportThemeIcons = vt;
					}
					get supportHtml() {
						return this.#e.supportHtml;
					}
					set supportHtml(vt) {
						this.#e.supportHtml = vt;
					}
					get baseUri() {
						return this.#e.baseUri;
					}
					set baseUri(vt) {
						this.#e.baseUri = vt;
					}
					appendText(vt) {
						return this.#e.appendText(vt), this;
					}
					appendMarkdown(vt) {
						return this.#e.appendMarkdown(vt), this;
					}
					appendCodeblock(vt, oi) {
						return this.#e.appendCodeblock(oi ?? "", vt), this;
					}
				});
				(e.$Rbb = He), (e.$Rbb = He = I = Ne([M], He));
				let Ke = class {
					constructor(vt, oi) {
						(this.label = vt), (this.documentation = oi);
					}
				};
				(e.$Sbb = Ke), (e.$Sbb = Ke = Ne([M], Ke));
				let Je = class {
					constructor(vt, oi) {
						(this.label = vt),
							(this.documentation = oi),
							(this.parameters = []);
					}
				};
				(e.$Tbb = Je), (e.$Tbb = Je = Ne([M], Je));
				let Te = class {
					constructor() {
						(this.activeSignature = 0),
							(this.activeParameter = 0),
							(this.signatures = []);
					}
				};
				(e.$Ubb = Te), (e.$Ubb = Te = Ne([M], Te));
				var Ee;
				(function (St) {
					(St[(St.Invoke = 1)] = "Invoke"),
						(St[(St.TriggerCharacter = 2)] = "TriggerCharacter"),
						(St[(St.ContentChange = 3)] = "ContentChange");
				})(Ee || (e.SignatureHelpTriggerKind = Ee = {}));
				var Ie;
				(function (St) {
					(St[(St.Type = 1)] = "Type"), (St[(St.Parameter = 2)] = "Parameter");
				})(Ie || (e.InlayHintKind = Ie = {}));
				let Be = class {
					constructor(vt) {
						this.value = vt;
					}
				};
				(e.$Vbb = Be), (e.$Vbb = Be = Ne([M], Be));
				let Se = class {
					constructor(vt, oi, Ei) {
						(this.position = vt), (this.label = oi), (this.kind = Ei);
					}
				};
				(e.$Wbb = Se), (e.$Wbb = Se = Ne([M], Se));
				var ke;
				(function (St) {
					(St[(St.Invoke = 0)] = "Invoke"),
						(St[(St.TriggerCharacter = 1)] = "TriggerCharacter"),
						(St[(St.TriggerForIncompleteCompletions = 2)] =
							"TriggerForIncompleteCompletions");
				})(ke || (e.CompletionTriggerKind = ke = {}));
				var Ue;
				(function (St) {
					(St[(St.Text = 0)] = "Text"),
						(St[(St.Method = 1)] = "Method"),
						(St[(St.Function = 2)] = "Function"),
						(St[(St.Constructor = 3)] = "Constructor"),
						(St[(St.Field = 4)] = "Field"),
						(St[(St.Variable = 5)] = "Variable"),
						(St[(St.Class = 6)] = "Class"),
						(St[(St.Interface = 7)] = "Interface"),
						(St[(St.Module = 8)] = "Module"),
						(St[(St.Property = 9)] = "Property"),
						(St[(St.Unit = 10)] = "Unit"),
						(St[(St.Value = 11)] = "Value"),
						(St[(St.Enum = 12)] = "Enum"),
						(St[(St.Keyword = 13)] = "Keyword"),
						(St[(St.Snippet = 14)] = "Snippet"),
						(St[(St.Color = 15)] = "Color"),
						(St[(St.File = 16)] = "File"),
						(St[(St.Reference = 17)] = "Reference"),
						(St[(St.Folder = 18)] = "Folder"),
						(St[(St.EnumMember = 19)] = "EnumMember"),
						(St[(St.Constant = 20)] = "Constant"),
						(St[(St.Struct = 21)] = "Struct"),
						(St[(St.Event = 22)] = "Event"),
						(St[(St.Operator = 23)] = "Operator"),
						(St[(St.TypeParameter = 24)] = "TypeParameter"),
						(St[(St.User = 25)] = "User"),
						(St[(St.Issue = 26)] = "Issue");
				})(Ue || (e.CompletionItemKind = Ue = {}));
				var qe;
				(function (St) {
					St[(St.Deprecated = 1)] = "Deprecated";
				})(qe || (e.CompletionItemTag = qe = {}));
				let Ae = class {
					constructor(vt, oi) {
						(this.label = vt), (this.kind = oi);
					}
					toJSON() {
						return {
							label: this.label,
							kind: this.kind && Ue[this.kind],
							detail: this.detail,
							documentation: this.documentation,
							sortText: this.sortText,
							filterText: this.filterText,
							preselect: this.preselect,
							insertText: this.insertText,
							textEdit: this.textEdit,
						};
					}
				};
				(e.$Xbb = Ae), (e.$Xbb = Ae = Ne([M], Ae));
				let Me = class {
					constructor(vt = [], oi = !1) {
						(this.items = vt), (this.isIncomplete = oi);
					}
				};
				(e.$Ybb = Me), (e.$Ybb = Me = Ne([M], Me));
				let De = class {
					constructor(vt, oi, Ei) {
						(this.insertText = vt), (this.range = oi), (this.command = Ei);
					}
				};
				(e.$Zbb = De), (e.$Zbb = De = Ne([M], De));
				let Re = class {
					constructor(vt) {
						(this.commands = void 0),
							(this.suppressSuggestions = void 0),
							(this.items = vt);
					}
				};
				(e.$1bb = Re), (e.$1bb = Re = Ne([M], Re));
				var je;
				(function (St) {
					(St[(St.Unknown = 0)] = "Unknown"),
						(St[(St.Word = 1)] = "Word"),
						(St[(St.Line = 2)] = "Line"),
						(St[(St.Suggest = 3)] = "Suggest");
				})(je || (e.PartialAcceptTriggerKind = je = {}));
				var Ve;
				(function (St) {
					(St[(St.Active = -1)] = "Active"),
						(St[(St.Beside = -2)] = "Beside"),
						(St[(St.One = 1)] = "One"),
						(St[(St.Two = 2)] = "Two"),
						(St[(St.Three = 3)] = "Three"),
						(St[(St.Four = 4)] = "Four"),
						(St[(St.Five = 5)] = "Five"),
						(St[(St.Six = 6)] = "Six"),
						(St[(St.Seven = 7)] = "Seven"),
						(St[(St.Eight = 8)] = "Eight"),
						(St[(St.Nine = 9)] = "Nine");
				})(Ve || (e.ViewColumn = Ve = {}));
				var Ze;
				(function (St) {
					(St[(St.Left = 1)] = "Left"), (St[(St.Right = 2)] = "Right");
				})(Ze || (e.StatusBarAlignment = Ze = {}));
				function et(St, vt) {
					return `${a.$Gn.toKey(St)}.${vt}`;
				}
				var rt;
				(function (St) {
					(St[(St.Off = 0)] = "Off"),
						(St[(St.On = 1)] = "On"),
						(St[(St.Relative = 2)] = "Relative"),
						(St[(St.Interval = 3)] = "Interval");
				})(rt || (e.TextEditorLineNumbersStyle = rt = {}));
				var ft;
				(function (St) {
					(St[(St.Manual = 1)] = "Manual"),
						(St[(St.AfterDelay = 2)] = "AfterDelay"),
						(St[(St.FocusOut = 3)] = "FocusOut");
				})(ft || (e.TextDocumentSaveReason = ft = {}));
				var bt;
				(function (St) {
					(St[(St.Default = 0)] = "Default"),
						(St[(St.InCenter = 1)] = "InCenter"),
						(St[(St.InCenterIfOutsideViewport = 2)] =
							"InCenterIfOutsideViewport"),
						(St[(St.AtTop = 3)] = "AtTop");
				})(bt || (e.TextEditorRevealType = bt = {}));
				var nt;
				(function (St) {
					(St[(St.Keyboard = 1)] = "Keyboard"),
						(St[(St.Mouse = 2)] = "Mouse"),
						(St[(St.Command = 3)] = "Command");
				})(nt || (e.TextEditorSelectionChangeKind = nt = {}));
				var lt;
				(function (St) {
					(St[(St.Undo = 1)] = "Undo"), (St[(St.Redo = 2)] = "Redo");
				})(lt || (e.TextDocumentChangeReason = lt = {}));
				var ct;
				(function (St) {
					(St[(St.OpenOpen = 0)] = "OpenOpen"),
						(St[(St.ClosedClosed = 1)] = "ClosedClosed"),
						(St[(St.OpenClosed = 2)] = "OpenClosed"),
						(St[(St.ClosedOpen = 3)] = "ClosedOpen");
				})(ct || (e.DecorationRangeBehavior = ct = {})),
					(function (St) {
						function vt(oi) {
							switch (oi) {
								case "keyboard":
									return St.Keyboard;
								case "mouse":
									return St.Mouse;
								case "api":
									return St.Command;
							}
						}
						St.fromValue = vt;
					})(nt || (e.TextEditorSelectionChangeKind = nt = {}));
				var gt;
				(function (St) {
					(St[(St.Other = 0)] = "Other"),
						(St[(St.Comment = 1)] = "Comment"),
						(St[(St.String = 2)] = "String"),
						(St[(St.RegEx = 3)] = "RegEx");
				})(gt || (e.SyntaxTokenType = gt = {})),
					(function (St) {
						function vt(oi) {
							switch (oi) {
								case St.Other:
									return "other";
								case St.Comment:
									return "comment";
								case St.String:
									return "string";
								case St.RegEx:
									return "regex";
							}
							return "other";
						}
						St.toString = vt;
					})(gt || (e.SyntaxTokenType = gt = {}));
				let ht = class {
					constructor(vt, oi) {
						if (oi && !r.URI.isUri(oi)) throw (0, i.$$)("target");
						if (!B.isRange(vt) || vt.isEmpty) throw (0, i.$$)("range");
						(this.range = vt), (this.target = oi);
					}
				};
				(e.$3bb = ht), (e.$3bb = ht = Ne([M], ht));
				let Rt = class {
					constructor(vt, oi, Ei, tn) {
						(this.red = vt),
							(this.green = oi),
							(this.blue = Ei),
							(this.alpha = tn);
					}
				};
				(e.$4bb = Rt), (e.$4bb = Rt = Ne([M], Rt));
				let Nt = class {
					constructor(vt, oi) {
						if (oi && !(oi instanceof Rt)) throw (0, i.$$)("color");
						if (!B.isRange(vt) || vt.isEmpty) throw (0, i.$$)("range");
						(this.range = vt), (this.color = oi);
					}
				};
				(e.$5bb = Nt), (e.$5bb = Nt = Ne([M], Nt));
				let jt = class {
					constructor(vt) {
						if (!vt || typeof vt != "string") throw (0, i.$$)("label");
						this.label = vt;
					}
				};
				(e.$6bb = jt), (e.$6bb = jt = Ne([M], jt));
				var ti;
				(function (St) {
					(St[(St.RGB = 0)] = "RGB"),
						(St[(St.HEX = 1)] = "HEX"),
						(St[(St.HSL = 2)] = "HSL");
				})(ti || (e.ColorFormat = ti = {}));
				var kt;
				(function (St) {
					(St[(St.Error = 0)] = "Error"),
						(St[(St.Warning = 1)] = "Warning"),
						(St[(St.Information = 2)] = "Information");
				})(kt || (e.SourceControlInputBoxValidationType = kt = {}));
				var hi;
				(function (St) {
					(St[(St.Unknown = 0)] = "Unknown"),
						(St[(St.Shutdown = 1)] = "Shutdown"),
						(St[(St.Process = 2)] = "Process"),
						(St[(St.User = 3)] = "User"),
						(St[(St.Extension = 4)] = "Extension");
				})(hi || (e.TerminalExitReason = hi = {}));
				var Kt;
				(function (St) {
					(St[(St.Low = 0)] = "Low"),
						(St[(St.Medium = 1)] = "Medium"),
						(St[(St.High = 2)] = "High");
				})(Kt || (e.TerminalShellExecutionCommandLineConfidence = Kt = {}));
				class di {
					constructor(vt, oi, Ei) {
						if (
							((this.startIndex = vt),
							(this.length = oi),
							(this.tooltip = Ei),
							typeof vt != "number" || vt < 0)
						)
							throw (0, i.$$)("startIndex");
						if (typeof oi != "number" || oi < 1) throw (0, i.$$)("length");
						if (Ei !== void 0 && typeof Ei != "string")
							throw (0, i.$$)("tooltip");
					}
				}
				e.$7bb = di;
				class Ye {
					constructor(vt) {
						this.uri = vt;
					}
				}
				e.$8bb = Ye;
				class ze {
					constructor(vt) {
						this.terminalCommand = vt;
					}
				}
				e.$9bb = ze;
				var Xe;
				(function (St) {
					(St[(St.Panel = 1)] = "Panel"), (St[(St.Editor = 2)] = "Editor");
				})(Xe || (e.TerminalLocation = Xe = {}));
				class It {
					constructor(vt) {
						if (((this.options = vt), typeof vt != "object"))
							throw (0, i.$$)("options");
					}
				}
				e.$0bb = It;
				var Lt;
				(function (St) {
					(St[(St.Always = 1)] = "Always"),
						(St[(St.Silent = 2)] = "Silent"),
						(St[(St.Never = 3)] = "Never");
				})(Lt || (e.TaskRevealKind = Lt = {}));
				var xt;
				(function (St) {
					(St[(St.Shared = 1)] = "Shared"),
						(St[(St.Dedicated = 2)] = "Dedicated"),
						(St[(St.New = 3)] = "New");
				})(xt || (e.TaskPanelKind = xt = {}));
				let Vt = class {
					static {
						T = this;
					}
					static {
						this.Clean = new T("clean", "Clean");
					}
					static {
						this.Build = new T("build", "Build");
					}
					static {
						this.Rebuild = new T("rebuild", "Rebuild");
					}
					static {
						this.Test = new T("test", "Test");
					}
					static from(vt) {
						switch (vt) {
							case "clean":
								return T.Clean;
							case "build":
								return T.Build;
							case "rebuild":
								return T.Rebuild;
							case "test":
								return T.Test;
							default:
								return;
						}
					}
					constructor(vt, oi) {
						if (
							((this.label = oi),
							typeof vt != "string" || typeof oi != "string")
						)
							throw (0, i.$$)("name");
						this.c = vt;
					}
					get id() {
						return this.c;
					}
				};
				(e.$$bb = Vt), (e.$$bb = Vt = T = Ne([M], Vt));
				function Bt(St) {
					let vt = "";
					for (let oi = 0; oi < St.length; oi++)
						vt += St[oi].replace(/,/g, ",,") + ",";
					return vt;
				}
				let Gt = class {
					constructor(vt, oi, Ei) {
						if (typeof vt != "string") throw (0, i.$$)("process");
						(this.e = []),
							(this.c = vt),
							oi !== void 0 &&
								(Array.isArray(oi)
									? ((this.e = oi), (this.f = Ei))
									: (this.f = oi));
					}
					get process() {
						return this.c;
					}
					set process(vt) {
						if (typeof vt != "string") throw (0, i.$$)("process");
						this.c = vt;
					}
					get args() {
						return this.e;
					}
					set args(vt) {
						Array.isArray(vt) || (vt = []), (this.e = vt);
					}
					get options() {
						return this.f;
					}
					set options(vt) {
						this.f = vt;
					}
					computeId() {
						const vt = [];
						if (
							(vt.push("process"),
							this.c !== void 0 && vt.push(this.c),
							this.e && this.e.length > 0)
						)
							for (const oi of this.e) vt.push(oi);
						return Bt(vt);
					}
				};
				(e.$_bb = Gt), (e.$_bb = Gt = Ne([M], Gt));
				let Mt = class {
					constructor(vt, oi, Ei) {
						if (((this.f = []), Array.isArray(oi))) {
							if (!vt) throw (0, i.$$)("command can't be undefined or null");
							if (typeof vt != "string" && typeof vt.value != "string")
								throw (0, i.$$)("command");
							(this.e = vt), (this.f = oi), (this.g = Ei);
						} else {
							if (typeof vt != "string") throw (0, i.$$)("commandLine");
							(this.c = vt), (this.g = oi);
						}
					}
					get commandLine() {
						return this.c;
					}
					set commandLine(vt) {
						if (typeof vt != "string") throw (0, i.$$)("commandLine");
						this.c = vt;
					}
					get command() {
						return this.e ? this.e : "";
					}
					set command(vt) {
						if (typeof vt != "string" && typeof vt.value != "string")
							throw (0, i.$$)("command");
						this.e = vt;
					}
					get args() {
						return this.f;
					}
					set args(vt) {
						this.f = vt || [];
					}
					get options() {
						return this.g;
					}
					set options(vt) {
						this.g = vt;
					}
					computeId() {
						const vt = [];
						if (
							(vt.push("shell"),
							this.c !== void 0 && vt.push(this.c),
							this.e !== void 0 &&
								vt.push(typeof this.e == "string" ? this.e : this.e.value),
							this.f && this.f.length > 0)
						)
							for (const oi of this.f)
								vt.push(typeof oi == "string" ? oi : oi.value);
						return Bt(vt);
					}
				};
				(e.$acb = Mt), (e.$acb = Mt = Ne([M], Mt));
				var Ut;
				(function (St) {
					(St[(St.Escape = 1)] = "Escape"),
						(St[(St.Strong = 2)] = "Strong"),
						(St[(St.Weak = 3)] = "Weak");
				})(Ut || (e.ShellQuoting = Ut = {}));
				var ei;
				(function (St) {
					(St[(St.Global = 1)] = "Global"),
						(St[(St.Workspace = 2)] = "Workspace");
				})(ei || (e.TaskScope = ei = {}));
				class mi {
					constructor(vt) {
						this.c = vt;
					}
					computeId() {
						return "customExecution" + (0, u.$9g)();
					}
					set callback(vt) {
						this.c = vt;
					}
					get callback() {
						return this.c;
					}
				}
				e.$bcb = mi;
				let ii = class {
					static {
						P = this;
					}
					static {
						this.c = "customExecution";
					}
					static {
						this.e = "process";
					}
					static {
						this.f = "shell";
					}
					static {
						this.g = "$empty";
					}
					constructor(vt, oi, Ei, tn, hn, In) {
						(this.k = !1), (this.l = this.definition = vt);
						let kn;
						typeof oi == "string"
							? ((this.o = this.name = oi),
								(this.w = this.source = Ei),
								(this.execution = tn),
								(kn = hn),
								(this.k = !0))
							: oi === ei.Global || oi === ei.Workspace
								? ((this.target = oi),
									(this.o = this.name = Ei),
									(this.w = this.source = tn),
									(this.execution = hn),
									(kn = In))
								: ((this.target = oi),
									(this.o = this.name = Ei),
									(this.w = this.source = tn),
									(this.execution = hn),
									(kn = In)),
							typeof kn == "string"
								? ((this.r = [kn]), (this.t = !0))
								: Array.isArray(kn)
									? ((this.r = kn), (this.t = !0))
									: ((this.r = []), (this.t = !1)),
							(this.u = !1),
							(this.y = Object.create(null)),
							(this.z = Object.create(null));
					}
					get _id() {
						return this.j;
					}
					set _id(vt) {
						this.j = vt;
					}
					get _deprecated() {
						return this.k;
					}
					B() {
						this.j !== void 0 &&
							((this.j = void 0), (this.m = void 0), this.C());
					}
					C() {
						this.q instanceof Gt
							? (this.l = { type: P.e, id: this.q.computeId() })
							: this.q instanceof Mt
								? (this.l = { type: P.f, id: this.q.computeId() })
								: this.q instanceof mi
									? (this.l = { type: P.c, id: this.q.computeId() })
									: (this.l = { type: P.g, id: (0, u.$9g)() });
					}
					get definition() {
						return this.l;
					}
					set definition(vt) {
						if (vt == null) throw (0, i.$$)("Kind can't be undefined or null");
						this.B(), (this.l = vt);
					}
					get scope() {
						return this.m;
					}
					set target(vt) {
						this.B(), (this.m = vt);
					}
					get name() {
						return this.o;
					}
					set name(vt) {
						if (typeof vt != "string") throw (0, i.$$)("name");
						this.B(), (this.o = vt);
					}
					get execution() {
						return this.q;
					}
					set execution(vt) {
						vt === null && (vt = void 0), this.B(), (this.q = vt);
						const oi = this.l.type;
						(P.g === oi || P.e === oi || P.f === oi || P.c === oi) && this.C();
					}
					get problemMatchers() {
						return this.r;
					}
					set problemMatchers(vt) {
						if (Array.isArray(vt)) this.B(), (this.r = vt), (this.t = !0);
						else {
							this.B(), (this.r = []), (this.t = !1);
							return;
						}
					}
					get hasDefinedMatchers() {
						return this.t;
					}
					get isBackground() {
						return this.u;
					}
					set isBackground(vt) {
						vt !== !0 && vt !== !1 && (vt = !1), this.B(), (this.u = vt);
					}
					get source() {
						return this.w;
					}
					set source(vt) {
						if (typeof vt != "string" || vt.length === 0)
							throw (0, i.$$)("source must be a string of length > 0");
						this.B(), (this.w = vt);
					}
					get group() {
						return this.x;
					}
					set group(vt) {
						vt === null && (vt = void 0), this.B(), (this.x = vt);
					}
					get detail() {
						return this.A;
					}
					set detail(vt) {
						vt === null && (vt = void 0), (this.A = vt);
					}
					get presentationOptions() {
						return this.y;
					}
					set presentationOptions(vt) {
						vt == null && (vt = Object.create(null)), this.B(), (this.y = vt);
					}
					get runOptions() {
						return this.z;
					}
					set runOptions(vt) {
						vt == null && (vt = Object.create(null)), this.B(), (this.z = vt);
					}
				};
				(e.Task = ii), (e.Task = ii = P = Ne([M], ii));
				var Dt;
				(function (St) {
					(St[(St.SourceControl = 1)] = "SourceControl"),
						(St[(St.Window = 10)] = "Window"),
						(St[(St.Notification = 15)] = "Notification");
				})(Dt || (e.ProgressLocation = Dt = {}));
				var Jt;
				(function (St) {
					function vt(oi) {
						const Ei = oi;
						return (0, m.$pg)(Ei.value)
							? Ei.tooltip && !(0, m.$lg)(Ei.tooltip)
								? (console.log(
										"INVALID view badge, invalid tooltip",
										Ei.tooltip,
									),
									!1)
								: !0
							: (console.log("INVALID view badge, invalid value", Ei.value),
								!1);
					}
					St.isViewBadge = vt;
				})(Jt || (e.ViewBadge = Jt = {}));
				let si = (k = class {
					static isTreeItem(vt, oi) {
						const Ei = vt;
						if (Ei.checkboxState !== void 0) {
							const tn = (0, m.$pg)(Ei.checkboxState)
									? Ei.checkboxState
									: (0, m.$ng)(Ei.checkboxState) &&
											(0, m.$pg)(Ei.checkboxState.state)
										? Ei.checkboxState.state
										: void 0,
								hn =
									!(0, m.$pg)(Ei.checkboxState) && (0, m.$ng)(Ei.checkboxState)
										? Ei.checkboxState.tooltip
										: void 0;
							if (
								tn === void 0 ||
								(tn !== ci.Checked && tn !== ci.Unchecked) ||
								(hn !== void 0 && !(0, m.$lg)(hn))
							)
								return (
									console.log(
										"INVALID tree item, invalid checkboxState",
										Ei.checkboxState,
									),
									!1
								);
						}
						if (vt instanceof k) return !0;
						if (
							Ei.label !== void 0 &&
							!(0, m.$lg)(Ei.label) &&
							!Ei.label?.label
						)
							return (
								console.log("INVALID tree item, invalid label", Ei.label), !1
							);
						if (Ei.id !== void 0 && !(0, m.$lg)(Ei.id))
							return console.log("INVALID tree item, invalid id", Ei.id), !1;
						if (
							Ei.iconPath !== void 0 &&
							!(0, m.$lg)(Ei.iconPath) &&
							!r.URI.isUri(Ei.iconPath) &&
							(!Ei.iconPath || !(0, m.$lg)(Ei.iconPath.id))
						) {
							const tn = Ei.iconPath;
							if (
								!tn ||
								(!(0, m.$lg)(tn.light) &&
									!r.URI.isUri(tn.light) &&
									!(0, m.$lg)(tn.dark) &&
									!r.URI.isUri(tn.dark))
							)
								return (
									console.log(
										"INVALID tree item, invalid iconPath",
										Ei.iconPath,
									),
									!1
								);
						}
						return Ei.description !== void 0 &&
							!(0, m.$lg)(Ei.description) &&
							typeof Ei.description != "boolean"
							? (console.log(
									"INVALID tree item, invalid description",
									Ei.description,
								),
								!1)
							: Ei.resourceUri !== void 0 && !r.URI.isUri(Ei.resourceUri)
								? (console.log(
										"INVALID tree item, invalid resourceUri",
										Ei.resourceUri,
									),
									!1)
								: Ei.tooltip !== void 0 &&
										!(0, m.$lg)(Ei.tooltip) &&
										!(Ei.tooltip instanceof He)
									? (console.log(
											"INVALID tree item, invalid tooltip",
											Ei.tooltip,
										),
										!1)
									: Ei.command !== void 0 && !Ei.command.command
										? (console.log(
												"INVALID tree item, invalid command",
												Ei.command,
											),
											!1)
										: Ei.collapsibleState !== void 0 &&
												Ei.collapsibleState < Zt.None &&
												Ei.collapsibleState > Zt.Expanded
											? (console.log(
													"INVALID tree item, invalid collapsibleState",
													Ei.collapsibleState,
												),
												!1)
											: Ei.contextValue !== void 0 &&
													!(0, m.$lg)(Ei.contextValue)
												? (console.log(
														"INVALID tree item, invalid contextValue",
														Ei.contextValue,
													),
													!1)
												: Ei.accessibilityInformation !== void 0 &&
														!Ei.accessibilityInformation?.label
													? (console.log(
															"INVALID tree item, invalid accessibilityInformation",
															Ei.accessibilityInformation,
														),
														!1)
													: !0;
					}
					constructor(vt, oi = Zt.None) {
						(this.collapsibleState = oi),
							r.URI.isUri(vt) ? (this.resourceUri = vt) : (this.label = vt);
					}
				});
				(e.$dcb = si), (e.$dcb = si = k = Ne([M], si));
				var Zt;
				(function (St) {
					(St[(St.None = 0)] = "None"),
						(St[(St.Collapsed = 1)] = "Collapsed"),
						(St[(St.Expanded = 2)] = "Expanded");
				})(Zt || (e.TreeItemCollapsibleState = Zt = {}));
				var ci;
				(function (St) {
					(St[(St.Unchecked = 0)] = "Unchecked"),
						(St[(St.Checked = 1)] = "Checked");
				})(ci || (e.TreeItemCheckboxState = ci = {}));
				let ri = class {
					async asString() {
						return typeof this.value == "string"
							? this.value
							: JSON.stringify(this.value);
					}
					asFile() {}
					constructor(vt) {
						this.value = vt;
					}
				};
				(e.$ecb = ri), (e.$ecb = ri = Ne([M], ri));
				class $i extends ri {}
				e.$fcb = $i;
				class Wt extends $i {
					#e;
					constructor(vt) {
						super(""), (this.#e = vt);
					}
					asFile() {
						return this.#e;
					}
				}
				e.$gcb = Wt;
				class tt {
					constructor(vt, oi, Ei, tn) {
						(this.name = vt),
							(this.uri = oi),
							(this._itemId = Ei),
							(this.c = tn);
					}
					data() {
						return this.c();
					}
				}
				e.$hcb = tt;
				let at = class {
					#e = new Map();
					constructor(vt) {
						for (const [oi, Ei] of vt ?? []) {
							const tn = this.#e.get(this.#t(oi));
							tn ? tn.push(Ei) : this.#e.set(this.#t(oi), [Ei]);
						}
					}
					get(vt) {
						return this.#e.get(this.#t(vt))?.[0];
					}
					set(vt, oi) {
						this.#e.set(this.#t(vt), [oi]);
					}
					forEach(vt, oi) {
						for (const [Ei, tn] of this.#e)
							for (const hn of tn) vt.call(oi, hn, Ei, this);
					}
					*[Symbol.iterator]() {
						for (const [vt, oi] of this.#e) for (const Ei of oi) yield [vt, Ei];
					}
					#t(vt) {
						return vt.toLowerCase();
					}
				};
				(e.$icb = at), (e.$icb = at = Ne([M], at));
				let pi = class {
					constructor(vt, oi, Ei) {
						(this.insertText = vt), (this.title = oi), (this.kind = Ei);
					}
				};
				(e.$jcb = pi), (e.$jcb = pi = Ne([M], pi));
				var Li;
				(function (St) {
					(St[(St.Automatic = 0)] = "Automatic"),
						(St[(St.PasteAs = 1)] = "PasteAs");
				})(Li || (e.DocumentPasteTriggerKind = Li = {}));
				class Di {
					static {
						this.c = ".";
					}
					constructor(vt) {
						this.value = vt;
					}
					append(...vt) {
						return new Di((this.value ? [this.value, ...vt] : vt).join(Di.c));
					}
					intersects(vt) {
						return this.contains(vt) || vt.contains(this);
					}
					contains(vt) {
						return (
							this.value === vt.value || vt.value.startsWith(this.value + Di.c)
						);
					}
				}
				(e.$kcb = Di), (Di.Empty = new Di(""));
				class Ui {
					constructor(vt, oi, Ei) {
						(this.title = oi), (this.insertText = vt), (this.kind = Ei);
					}
				}
				e.$lcb = Ui;
				let Wi = class {
					constructor(vt, oi) {
						(this.id = vt), (this.color = oi);
					}
					static isThemeIcon(vt) {
						return typeof vt.id != "string"
							? (console.log("INVALID ThemeIcon, invalid id", vt.id), !1)
							: !0;
					}
				};
				(e.$mcb = Wi),
					(e.$mcb = Wi = Ne([M], Wi)),
					(Wi.File = new Wi("file")),
					(Wi.Folder = new Wi("folder"));
				let Gi = class {
					constructor(vt) {
						this.id = vt;
					}
				};
				(e.$ncb = Gi), (e.$ncb = Gi = Ne([M], Gi));
				var qi;
				(function (St) {
					(St[(St.Global = 1)] = "Global"),
						(St[(St.Workspace = 2)] = "Workspace"),
						(St[(St.WorkspaceFolder = 3)] = "WorkspaceFolder");
				})(qi || (e.ConfigurationTarget = qi = {}));
				let Oi = class {
					get base() {
						return this.c;
					}
					set base(vt) {
						(this.c = vt), (this.e = r.URI.file(vt));
					}
					get baseUri() {
						return this.e;
					}
					set baseUri(vt) {
						(this.e = vt), (this.c = vt.fsPath);
					}
					constructor(vt, oi) {
						if (
							typeof vt != "string" &&
							(!vt || (!r.URI.isUri(vt) && !r.URI.isUri(vt.uri)))
						)
							throw (0, i.$$)("base");
						if (typeof oi != "string") throw (0, i.$$)("pattern");
						typeof vt == "string"
							? (this.baseUri = r.URI.file(vt))
							: r.URI.isUri(vt)
								? (this.baseUri = vt)
								: (this.baseUri = vt.uri),
							(this.pattern = oi);
					}
					toJSON() {
						return {
							pattern: this.pattern,
							base: this.base,
							baseUri: this.baseUri.toJSON(),
						};
					}
				};
				(e.$ocb = Oi), (e.$ocb = Oi = Ne([M], Oi));
				const yi = new WeakMap();
				function Ai(St, vt) {
					yi.set(St, vt);
				}
				let li = class {
					constructor(vt, oi, Ei, tn, hn) {
						(this.enabled = typeof vt == "boolean" ? vt : !0),
							typeof oi == "string" && (this.condition = oi),
							typeof Ei == "string" && (this.hitCondition = Ei),
							typeof tn == "string" && (this.logMessage = tn),
							typeof hn == "string" && (this.mode = hn);
					}
					get id() {
						return this.c || (this.c = yi.get(this) ?? (0, u.$9g)()), this.c;
					}
				};
				(e.$qcb = li), (e.$qcb = li = Ne([M], li));
				let Vi = class extends li {
					constructor(vt, oi, Ei, tn, hn, In) {
						if ((super(oi, Ei, tn, hn, In), vt === null))
							throw (0, i.$$)("location");
						this.location = vt;
					}
				};
				(e.$rcb = Vi), (e.$rcb = Vi = Ne([M], Vi));
				let wi = class extends li {
					constructor(vt, oi, Ei, tn, hn, In) {
						super(oi, Ei, tn, hn, In), (this.functionName = vt);
					}
				};
				(e.$scb = wi), (e.$scb = wi = Ne([M], wi));
				let _t = class extends li {
					constructor(vt, oi, Ei, tn, hn, In, kn, Wn) {
						if ((super(tn, hn, In, kn, Wn), !oi)) throw (0, i.$$)("dataId");
						(this.label = vt), (this.dataId = oi), (this.canPersist = Ei);
					}
				};
				(e.$tcb = _t), (e.$tcb = _t = Ne([M], _t));
				let ai = class {
					constructor(vt, oi, Ei) {
						(this.command = vt), (this.args = oi || []), (this.options = Ei);
					}
				};
				(e.$ucb = ai), (e.$ucb = ai = Ne([M], ai));
				let Ft = class {
					constructor(vt, oi) {
						(this.port = vt), (this.host = oi);
					}
				};
				(e.$vcb = Ft), (e.$vcb = Ft = Ne([M], Ft));
				let Xt = class {
					constructor(vt) {
						this.path = vt;
					}
				};
				(e.$wcb = Xt), (e.$wcb = Xt = Ne([M], Xt));
				let $t = class {
					constructor(vt) {
						this.implementation = vt;
					}
				};
				(e.$xcb = $t), (e.$xcb = $t = Ne([M], $t));
				class ut {
					constructor(vt, oi, Ei) {
						(this.session = vt), (this.threadId = oi), (this.frameId = Ei);
					}
				}
				e.$ycb = ut;
				class Et {
					constructor(vt, oi) {
						(this.session = vt), (this.threadId = oi);
					}
				}
				e.$zcb = Et;
				let Tt = class {
					constructor(vt, oi) {
						(this.range = vt), (this.expression = oi);
					}
				};
				(e.$Acb = Tt), (e.$Acb = Tt = Ne([M], Tt));
				var qt;
				(function (St) {
					(St[(St.Invoke = 0)] = "Invoke"),
						(St[(St.Automatic = 1)] = "Automatic");
				})(qt || (e.InlineCompletionTriggerKind = qt = {}));
				let At = class {
					constructor(vt, oi) {
						(this.range = vt), (this.text = oi);
					}
				};
				(e.$Bcb = At), (e.$Bcb = At = Ne([M], At));
				let Yt = class {
					constructor(vt, oi, Ei = !0) {
						(this.range = vt),
							(this.variableName = oi),
							(this.caseSensitiveLookup = Ei);
					}
				};
				(e.$Ccb = Yt), (e.$Ccb = Yt = Ne([M], Yt));
				let ni = class {
					constructor(vt, oi) {
						(this.range = vt), (this.expression = oi);
					}
				};
				(e.$Dcb = ni), (e.$Dcb = ni = Ne([M], ni));
				let bi = class {
					constructor(vt, oi) {
						(this.frameId = vt), (this.stoppedLocation = oi);
					}
				};
				(e.$Ecb = bi), (e.$Ecb = bi = Ne([M], bi));
				var fi;
				(function (St) {
					St[(St.AIGenerated = 1)] = "AIGenerated";
				})(fi || (e.NewSymbolNameTag = fi = {}));
				var Ti;
				(function (St) {
					(St[(St.Invoke = 0)] = "Invoke"),
						(St[(St.Automatic = 1)] = "Automatic");
				})(Ti || (e.NewSymbolNameTriggerKind = Ti = {}));
				class wt {
					constructor(vt, oi) {
						(this.newSymbolName = vt), (this.tags = oi);
					}
				}
				e.$Fcb = wt;
				var We;
				(function (St) {
					(St[(St.Changed = 1)] = "Changed"),
						(St[(St.Created = 2)] = "Created"),
						(St[(St.Deleted = 3)] = "Deleted");
				})(We || (e.FileChangeType = We = {}));
				let _e = (L = class extends Error {
					static FileExists(vt) {
						return new L(
							vt,
							h.FileSystemProviderErrorCode.FileExists,
							L.FileExists,
						);
					}
					static FileNotFound(vt) {
						return new L(
							vt,
							h.FileSystemProviderErrorCode.FileNotFound,
							L.FileNotFound,
						);
					}
					static FileNotADirectory(vt) {
						return new L(
							vt,
							h.FileSystemProviderErrorCode.FileNotADirectory,
							L.FileNotADirectory,
						);
					}
					static FileIsADirectory(vt) {
						return new L(
							vt,
							h.FileSystemProviderErrorCode.FileIsADirectory,
							L.FileIsADirectory,
						);
					}
					static NoPermissions(vt) {
						return new L(
							vt,
							h.FileSystemProviderErrorCode.NoPermissions,
							L.NoPermissions,
						);
					}
					static Unavailable(vt) {
						return new L(
							vt,
							h.FileSystemProviderErrorCode.Unavailable,
							L.Unavailable,
						);
					}
					constructor(vt, oi = h.FileSystemProviderErrorCode.Unknown, Ei) {
						super(r.URI.isUri(vt) ? vt.toString(!0) : vt),
							(this.code = Ei?.name ?? "Unknown"),
							(0, h.$Al)(this, oi),
							Object.setPrototypeOf(this, L.prototype),
							typeof Error.captureStackTrace == "function" &&
								typeof Ei == "function" &&
								Error.captureStackTrace(this, Ei);
					}
				});
				(e.$Gcb = _e), (e.$Gcb = _e = L = Ne([M], _e));
				let Si = class {
					constructor(vt, oi, Ei) {
						(this.start = vt), (this.end = oi), (this.kind = Ei);
					}
				};
				(e.$Hcb = Si), (e.$Hcb = Si = Ne([M], Si));
				var gi;
				(function (St) {
					(St[(St.Comment = 1)] = "Comment"),
						(St[(St.Imports = 2)] = "Imports"),
						(St[(St.Region = 3)] = "Region");
				})(gi || (e.FoldingRangeKind = gi = {}));
				var ki;
				(function (St) {
					(St[(St.Collapsed = 0)] = "Collapsed"),
						(St[(St.Expanded = 1)] = "Expanded");
				})(ki || (e.CommentThreadCollapsibleState = ki = {}));
				var Pi;
				(function (St) {
					(St[(St.Editing = 0)] = "Editing"),
						(St[(St.Preview = 1)] = "Preview");
				})(Pi || (e.CommentMode = Pi = {}));
				var Hi;
				(function (St) {
					(St[(St.Published = 0)] = "Published"),
						(St[(St.Draft = 1)] = "Draft");
				})(Hi || (e.CommentState = Hi = {}));
				var Ji;
				(function (St) {
					(St[(St.Unresolved = 0)] = "Unresolved"),
						(St[(St.Resolved = 1)] = "Resolved");
				})(Ji || (e.CommentThreadState = Ji = {}));
				var cn;
				(function (St) {
					(St[(St.Current = 0)] = "Current"),
						(St[(St.Outdated = 1)] = "Outdated");
				})(cn || (e.CommentThreadApplicability = cn = {}));
				var un;
				(function (St) {
					(St[(St.Reply = 1)] = "Reply"), (St[(St.Comment = 2)] = "Comment");
				})(un || (e.CommentThreadFocus = un = {}));
				class yn {
					constructor(vt, oi = []) {
						(this.tokenTypes = vt), (this.tokenModifiers = oi);
					}
				}
				e.$Icb = yn;
				function Rn(St) {
					return typeof St > "u" || (0, m.$mg)(St);
				}
				class _i {
					constructor(vt) {
						if (
							((this.c = 0),
							(this.e = 0),
							(this.f = !0),
							(this.g = []),
							(this.j = 0),
							(this.k = new Map()),
							(this.l = new Map()),
							(this.m = !1),
							vt)
						) {
							this.m = !0;
							for (let oi = 0, Ei = vt.tokenTypes.length; oi < Ei; oi++)
								this.k.set(vt.tokenTypes[oi], oi);
							for (let oi = 0, Ei = vt.tokenModifiers.length; oi < Ei; oi++)
								this.l.set(vt.tokenModifiers[oi], oi);
						}
					}
					push(vt, oi, Ei, tn, hn) {
						if (
							typeof vt == "number" &&
							typeof oi == "number" &&
							typeof Ei == "number" &&
							typeof tn == "number" &&
							(typeof hn == "number" || typeof hn > "u")
						)
							return typeof hn > "u" && (hn = 0), this.q(vt, oi, Ei, tn, hn);
						if (B.isRange(vt) && typeof oi == "string" && Rn(Ei))
							return this.o(vt, oi, Ei);
						throw (0, i.$$)();
					}
					o(vt, oi, Ei) {
						if (!this.m)
							throw new Error("Legend must be provided in constructor");
						if (vt.start.line !== vt.end.line)
							throw new Error("`range` cannot span multiple lines");
						if (!this.k.has(oi))
							throw new Error("`tokenType` is not in the provided legend");
						const tn = vt.start.line,
							hn = vt.start.character,
							In = vt.end.character - vt.start.character,
							kn = this.k.get(oi);
						let Wn = 0;
						if (Ei)
							for (const ys of Ei) {
								if (!this.l.has(ys))
									throw new Error(
										"`tokenModifier` is not in the provided legend",
									);
								const fs = this.l.get(ys);
								Wn |= (1 << fs) >>> 0;
							}
						this.q(tn, hn, In, kn, Wn);
					}
					q(vt, oi, Ei, tn, hn) {
						if (this.f && (vt < this.c || (vt === this.c && oi < this.e))) {
							this.f = !1;
							const Wn = (this.g.length / 5) | 0;
							let ys = 0,
								fs = 0;
							for (let bs = 0; bs < Wn; bs++) {
								let Ls = this.g[5 * bs],
									Gs = this.g[5 * bs + 1];
								Ls === 0 ? ((Ls = ys), (Gs += fs)) : (Ls += ys),
									(this.g[5 * bs] = Ls),
									(this.g[5 * bs + 1] = Gs),
									(ys = Ls),
									(fs = Gs);
							}
						}
						let In = vt,
							kn = oi;
						this.f &&
							this.j > 0 &&
							((In -= this.c), In === 0 && (kn -= this.e)),
							(this.g[this.j++] = In),
							(this.g[this.j++] = kn),
							(this.g[this.j++] = Ei),
							(this.g[this.j++] = tn),
							(this.g[this.j++] = hn),
							(this.c = vt),
							(this.e = oi);
					}
					static r(vt) {
						const oi = [],
							Ei = (vt.length / 5) | 0;
						for (let kn = 0; kn < Ei; kn++) oi[kn] = kn;
						oi.sort((kn, Wn) => {
							const ys = vt[5 * kn],
								fs = vt[5 * Wn];
							if (ys === fs) {
								const bs = vt[5 * kn + 1],
									Ls = vt[5 * Wn + 1];
								return bs - Ls;
							}
							return ys - fs;
						});
						const tn = new Uint32Array(vt.length);
						let hn = 0,
							In = 0;
						for (let kn = 0; kn < Ei; kn++) {
							const Wn = 5 * oi[kn],
								ys = vt[Wn + 0],
								fs = vt[Wn + 1],
								bs = vt[Wn + 2],
								Ls = vt[Wn + 3],
								Gs = vt[Wn + 4],
								er = ys - hn,
								Nr = er === 0 ? fs - In : fs,
								Fs = 5 * kn;
							(tn[Fs + 0] = er),
								(tn[Fs + 1] = Nr),
								(tn[Fs + 2] = bs),
								(tn[Fs + 3] = Ls),
								(tn[Fs + 4] = Gs),
								(hn = ys),
								(In = fs);
						}
						return tn;
					}
					build(vt) {
						return this.f
							? new Bn(new Uint32Array(this.g), vt)
							: new Bn(_i.r(this.g), vt);
					}
				}
				e.$Jcb = _i;
				class Bn {
					constructor(vt, oi) {
						(this.resultId = oi), (this.data = vt);
					}
				}
				e.$Kcb = Bn;
				class Mn {
					constructor(vt, oi, Ei) {
						(this.start = vt), (this.deleteCount = oi), (this.data = Ei);
					}
				}
				e.$Lcb = Mn;
				class zn {
					constructor(vt, oi) {
						(this.resultId = oi), (this.edits = vt);
					}
				}
				e.$Mcb = zn;
				var $n;
				(function (St) {
					(St[(St.Separate = 0)] = "Separate"),
						(St[(St.MergeWithParent = 1)] = "MergeWithParent");
				})($n || (e.DebugConsoleMode = $n = {}));
				class Ln {
					constructor(vt) {
						this.name = vt;
					}
				}
				e.$Ncb = Ln;
				var wn;
				(function (St) {
					(St[(St.Title = 1)] = "Title"), (St[(St.Inline = 2)] = "Inline");
				})(wn || (e.QuickInputButtonLocation = wn = {}));
				let Hn = class {
					static {
						this.Back = { iconPath: new Wi("arrow-left") };
					}
					constructor() {}
				};
				(e.$Ocb = Hn), (e.$Ocb = Hn = Ne([M], Hn));
				var Yn;
				(function (St) {
					(St[(St.Separator = -1)] = "Separator"),
						(St[(St.Default = 0)] = "Default");
				})(Yn || (e.QuickPickItemKind = Yn = {}));
				var Es;
				(function (St) {
					(St[(St.Info = 1)] = "Info"),
						(St[(St.Warning = 2)] = "Warning"),
						(St[(St.Error = 3)] = "Error");
				})(Es || (e.InputBoxValidationSeverity = Es = {}));
				var Nn;
				(function (St) {
					(St[(St.UI = 1)] = "UI"), (St[(St.Workspace = 2)] = "Workspace");
				})(Nn || (e.ExtensionKind = Nn = {}));
				class Fn {
					static validate(vt) {
						if (typeof vt.badge == "string") {
							let oi = (0, d.$Wf)(vt.badge, 0);
							if (
								(oi < vt.badge.length && (oi += (0, d.$Wf)(vt.badge, oi)),
								vt.badge.length > oi)
							)
								throw new Error(
									"The 'badge'-property must be undefined or a short character",
								);
						} else if (vt.badge && !Wi.isThemeIcon(vt.badge))
							throw new Error("The 'badge'-property is not a valid ThemeIcon");
						if (!vt.color && !vt.badge && !vt.tooltip)
							throw new Error("The decoration is empty");
						return !0;
					}
					constructor(vt, oi, Ei) {
						(this.badge = vt), (this.tooltip = oi), (this.color = Ei);
					}
				}
				e.$Pcb = Fn;
				let Gn = class {
					constructor(vt) {
						this.kind = vt;
					}
				};
				(e.$Qcb = Gn), (e.$Qcb = Gn = Ne([M], Gn));
				var Dn;
				(function (St) {
					(St[(St.Light = 1)] = "Light"),
						(St[(St.Dark = 2)] = "Dark"),
						(St[(St.HighContrast = 3)] = "HighContrast"),
						(St[(St.HighContrastLight = 4)] = "HighContrastLight");
				})(Dn || (e.ColorThemeKind = Dn = {}));
				class jn {
					static isNotebookRange(vt) {
						return vt instanceof jn
							? !0
							: vt
								? typeof vt.start == "number" && typeof vt.end == "number"
								: !1;
					}
					get start() {
						return this.c;
					}
					get end() {
						return this.e;
					}
					get isEmpty() {
						return this.c === this.e;
					}
					constructor(vt, oi) {
						if (vt < 0) throw (0, i.$$)("start must be positive");
						if (oi < 0) throw (0, i.$$)("end must be positive");
						vt <= oi
							? ((this.c = vt), (this.e = oi))
							: ((this.c = oi), (this.e = vt));
					}
					with(vt) {
						let oi = this.c,
							Ei = this.e;
						return (
							vt.start !== void 0 && (oi = vt.start),
							vt.end !== void 0 && (Ei = vt.end),
							oi === this.c && Ei === this.e ? this : new jn(oi, Ei)
						);
					}
				}
				e.$Rcb = jn;
				class rs {
					static validate(vt) {
						if (typeof vt.kind != "number")
							throw new Error("NotebookCellData MUST have 'kind' property");
						if (typeof vt.value != "string")
							throw new Error("NotebookCellData MUST have 'value' property");
						if (typeof vt.languageId != "string")
							throw new Error(
								"NotebookCellData MUST have 'languageId' property",
							);
					}
					static isNotebookCellDataArray(vt) {
						return (
							Array.isArray(vt) && vt.every((oi) => rs.isNotebookCellData(oi))
						);
					}
					static isNotebookCellData(vt) {
						return !0;
					}
					constructor(vt, oi, Ei, tn, hn, In, kn) {
						(this.kind = vt),
							(this.value = oi),
							(this.languageId = Ei),
							(this.mime = tn),
							(this.outputs = hn ?? []),
							(this.metadata = In),
							(this.executionSummary = kn),
							rs.validate(this);
					}
				}
				e.$Scb = rs;
				class Js {
					constructor(vt) {
						this.cells = vt;
					}
				}
				e.$Tcb = Js;
				class ts {
					static isNotebookCellOutputItem(vt) {
						return vt instanceof ts
							? !0
							: vt
								? typeof vt.mime == "string" && vt.data instanceof Uint8Array
								: !1;
					}
					static error(vt) {
						const oi = { name: vt.name, message: vt.message, stack: vt.stack };
						return ts.json(oi, "application/vnd.code.notebook.error");
					}
					static stdout(vt) {
						return ts.text(vt, "application/vnd.code.notebook.stdout");
					}
					static stderr(vt) {
						return ts.text(vt, "application/vnd.code.notebook.stderr");
					}
					static bytes(vt, oi = "application/octet-stream") {
						return new ts(vt, oi);
					}
					static #e = new TextEncoder();
					static text(vt, oi = C.$EK.text) {
						const Ei = ts.#e.encode(String(vt));
						return new ts(Ei, oi);
					}
					static json(vt, oi = "text/x-json") {
						const Ei = JSON.stringify(vt, void 0, "	");
						return ts.text(Ei, oi);
					}
					constructor(vt, oi) {
						(this.data = vt), (this.mime = oi);
						const Ei = (0, C.$IK)(oi, !0);
						if (!Ei)
							throw new Error(
								`INVALID mime type: ${oi}. Must be in the format "type/subtype[;optionalparameter]"`,
							);
						this.mime = Ei;
					}
				}
				e.$Ucb = ts;
				class js {
					static isNotebookCellOutput(vt) {
						return vt instanceof js
							? !0
							: !vt || typeof vt != "object"
								? !1
								: typeof vt.id == "string" && Array.isArray(vt.items);
					}
					static ensureUniqueMimeTypes(vt, oi = !1) {
						const Ei = new Set(),
							tn = new Set();
						for (let hn = 0; hn < vt.length; hn++) {
							const In = vt[hn],
								kn = (0, C.$IK)(In.mime);
							if (!Ei.has(kn) || (0, n.$76)(kn)) {
								Ei.add(kn);
								continue;
							}
							tn.add(hn),
								oi &&
									console.warn(
										`DUPLICATED mime type '${In.mime}' will be dropped`,
									);
						}
						return tn.size === 0 ? vt : vt.filter((hn, In) => !tn.has(In));
					}
					constructor(vt, oi, Ei) {
						(this.items = js.ensureUniqueMimeTypes(vt, !0)),
							typeof oi == "string"
								? ((this.id = oi), (this.metadata = Ei))
								: ((this.id = (0, u.$9g)()), (this.metadata = oi ?? Ei));
					}
				}
				e.$Vcb = js;
				var os;
				(function (St) {
					(St[(St.Markup = 1)] = "Markup"), (St[(St.Code = 2)] = "Code");
				})(os || (e.NotebookCellKind = os = {}));
				var En;
				(function (St) {
					(St[(St.Idle = 1)] = "Idle"),
						(St[(St.Pending = 2)] = "Pending"),
						(St[(St.Executing = 3)] = "Executing");
				})(En || (e.NotebookCellExecutionState = En = {}));
				var ns;
				(function (St) {
					(St[(St.Left = 1)] = "Left"), (St[(St.Right = 2)] = "Right");
				})(ns || (e.NotebookCellStatusBarAlignment = ns = {}));
				var Fi;
				(function (St) {
					(St[(St.Default = 0)] = "Default"),
						(St[(St.InCenter = 1)] = "InCenter"),
						(St[(St.InCenterIfOutsideViewport = 2)] =
							"InCenterIfOutsideViewport"),
						(St[(St.AtTop = 3)] = "AtTop");
				})(Fi || (e.NotebookEditorRevealType = Fi = {}));
				class zi {
					constructor(vt, oi) {
						(this.text = vt), (this.alignment = oi);
					}
				}
				e.$Wcb = zi;
				var Zi;
				(function (St) {
					(St[(St.Default = 1)] = "Default"),
						(St[(St.Preferred = 2)] = "Preferred");
				})(Zi || (e.NotebookControllerAffinity = Zi = {}));
				var nn;
				(function (St) {
					(St[(St.Default = 1)] = "Default"),
						(St[(St.Preferred = 2)] = "Preferred"),
						(St[(St.Hidden = -1)] = "Hidden");
				})(nn || (e.NotebookControllerAffinity2 = nn = {}));
				class fn {
					constructor(vt, oi = []) {
						(this.uri = vt), (this.provides = (0, t.$6b)(oi));
					}
				}
				e.$Xcb = fn;
				class xn {
					constructor(vt) {
						this.label = vt;
					}
				}
				e.$Ycb = xn;
				var Sn;
				(function (St) {
					(St[(St.Named = 1)] = "Named"), (St[(St.Indexed = 2)] = "Indexed");
				})(Sn || (e.NotebookVariablesRequestKind = Sn = {}));
				let Un = class {
					constructor(vt, oi) {
						(this.label = vt), (this.timestamp = oi);
					}
				};
				(e.$Zcb = Un), (e.$Zcb = Un = Ne([M], Un));
				var as;
				(function (St) {
					(St[(St.Production = 1)] = "Production"),
						(St[(St.Development = 2)] = "Development"),
						(St[(St.Test = 3)] = "Test");
				})(as || (e.ExtensionMode = as = {}));
				var Qn;
				(function (St) {
					(St[(St.Node = 1)] = "Node"), (St[(St.Webworker = 2)] = "Webworker");
				})(Qn || (e.ExtensionRuntime = Qn = {}));
				var $s;
				(function (St) {
					(St[(St.Other = 0)] = "Other"),
						(St[(St.Comment = 1)] = "Comment"),
						(St[(St.String = 2)] = "String"),
						(St[(St.RegEx = 3)] = "RegEx");
				})($s || (e.StandardTokenType = $s = {}));
				class Us {
					constructor(vt, oi) {
						(this.ranges = vt), (this.wordPattern = oi);
					}
				}
				e.$1cb = Us;
				class _n {
					constructor(vt) {
						this.c = vt;
					}
					get autoForwardAction() {
						return this.c;
					}
				}
				e.$2cb = _n;
				var sn;
				(function (St) {
					(St[(St.Queued = 1)] = "Queued"),
						(St[(St.Running = 2)] = "Running"),
						(St[(St.Passed = 3)] = "Passed"),
						(St[(St.Failed = 4)] = "Failed"),
						(St[(St.Skipped = 5)] = "Skipped"),
						(St[(St.Errored = 6)] = "Errored");
				})(sn || (e.TestResultState = sn = {}));
				var dn;
				(function (St) {
					(St[(St.Run = 1)] = "Run"),
						(St[(St.Debug = 2)] = "Debug"),
						(St[(St.Coverage = 3)] = "Coverage");
				})(dn || (e.TestRunProfileKind = dn = {}));
				let An = class {
					constructor(vt = void 0, oi = void 0, Ei = void 0, tn = !1, hn = !0) {
						(this.include = vt),
							(this.exclude = oi),
							(this.profile = Ei),
							(this.continuous = tn),
							(this.preserveFocus = hn);
					}
				};
				(e.$3cb = An), (e.$3cb = An = Ne([M], An));
				let vn = (D = class {
					static diff(vt, oi, Ei) {
						const tn = new D(vt);
						return (tn.expectedOutput = oi), (tn.actualOutput = Ei), tn;
					}
					constructor(vt) {
						this.message = vt;
					}
				});
				(e.$4cb = vn), (e.$4cb = vn = D = Ne([M], vn));
				let Pn = class {
					constructor(vt) {
						this.id = vt;
					}
				};
				(e.$5cb = Pn), (e.$5cb = Pn = Ne([M], Pn));
				class es {
					constructor(vt, oi, Ei) {
						(this.label = vt), (this.uri = oi), (this.position = Ei);
					}
				}
				e.$6cb = es;
				class ls {
					constructor(vt, oi) {
						(this.covered = vt), (this.total = oi), Jn(this);
					}
				}
				e.$7cb = ls;
				function Jn(St) {
					if (St) {
						if (St.covered > St.total)
							throw new Error(
								`The total number of covered items (${St.covered}) cannot be greater than the total (${St.total})`,
							);
						if (St.total < 0)
							throw new Error(
								`The number of covered items (${St.total}) cannot be negative`,
							);
					}
				}
				class ss {
					static fromDetails(vt, oi) {
						const Ei = new ls(0, 0),
							tn = new ls(0, 0),
							hn = new ls(0, 0);
						for (const kn of oi)
							if ("branches" in kn) {
								(Ei.total += 1), (Ei.covered += kn.executed ? 1 : 0);
								for (const Wn of kn.branches)
									(tn.total += 1), (tn.covered += Wn.executed ? 1 : 0);
							} else (hn.total += 1), (hn.covered += kn.executed ? 1 : 0);
						const In = new ss(
							vt,
							Ei,
							tn.total > 0 ? tn : void 0,
							hn.total > 0 ? hn : void 0,
						);
						return (In.detailedCoverage = oi), In;
					}
					constructor(vt, oi, Ei, tn, hn = []) {
						(this.uri = vt),
							(this.statementCoverage = oi),
							(this.branchCoverage = Ei),
							(this.declarationCoverage = tn),
							(this.fromTests = hn);
					}
				}
				e.$9cb = ss;
				class us {
					get executionCount() {
						return +this.executed;
					}
					set executionCount(vt) {
						this.executed = vt;
					}
					constructor(vt, oi, Ei = []) {
						(this.executed = vt), (this.location = oi), (this.branches = Ei);
					}
				}
				e.$0cb = us;
				class Rs {
					get executionCount() {
						return +this.executed;
					}
					set executionCount(vt) {
						this.executed = vt;
					}
					constructor(vt, oi, Ei) {
						(this.executed = vt), (this.location = oi), (this.label = Ei);
					}
				}
				e.$$cb = Rs;
				class Ws {
					get executionCount() {
						return +this.executed;
					}
					set executionCount(vt) {
						this.executed = vt;
					}
					constructor(vt, oi, Ei) {
						(this.name = vt), (this.executed = oi), (this.location = Ei);
					}
				}
				e.$_cb = Ws;
				var br;
				(function (St) {
					(St[(St.None = 0)] = "None"),
						(St[(St.Option = 1)] = "Option"),
						(St[(St.Default = 2)] = "Default"),
						(St[(St.Preferred = 3)] = "Preferred");
				})(br || (e.ExternalUriOpenerPriority = br = {}));
				var $r;
				(function (St) {
					(St[(St.Untrusted = 0)] = "Untrusted"),
						(St[(St.Trusted = 1)] = "Trusted"),
						(St[(St.Unspecified = 2)] = "Unspecified");
				})($r || (e.WorkspaceTrustState = $r = {}));
				var Xs;
				(function (St) {
					(St[(St.Notify = 1)] = "Notify"),
						(St[(St.OpenBrowser = 2)] = "OpenBrowser"),
						(St[(St.OpenPreview = 3)] = "OpenPreview"),
						(St[(St.Silent = 4)] = "Silent"),
						(St[(St.Ignore = 5)] = "Ignore"),
						(St[(St.OpenBrowserOnce = 6)] = "OpenBrowserOnce");
				})(Xs || (e.PortAutoForwardAction = Xs = {}));
				class ir {
					constructor(vt, oi, Ei, tn, hn, In) {
						(this.kind = vt),
							(this.name = oi),
							(this.detail = Ei),
							(this.uri = tn),
							(this.range = hn),
							(this.selectionRange = In);
					}
				}
				e.$adb = ir;
				class nr {
					constructor(vt) {
						this.uri = vt;
					}
				}
				e.$bdb = nr;
				class Ys {
					constructor(vt, oi) {
						(this.original = vt), (this.modified = oi);
					}
				}
				e.$cdb = Ys;
				class yr {
					constructor(vt, oi, Ei, tn) {
						(this.base = vt),
							(this.input1 = oi),
							(this.input2 = Ei),
							(this.result = tn);
					}
				}
				e.$ddb = yr;
				class Zs {
					constructor(vt, oi) {
						(this.uri = vt), (this.viewType = oi);
					}
				}
				e.$edb = Zs;
				class wr {
					constructor(vt) {
						this.viewType = vt;
					}
				}
				e.$fdb = wr;
				class vr {
					constructor(vt, oi) {
						(this.uri = vt), (this.notebookType = oi);
					}
				}
				e.$gdb = vr;
				class Cr {
					constructor(vt, oi, Ei) {
						(this.original = vt),
							(this.modified = oi),
							(this.notebookType = Ei);
					}
				}
				e.$hdb = Cr;
				class sr {
					constructor() {}
				}
				e.$idb = sr;
				class Io {
					constructor(vt, oi) {
						(this.uri = vt), (this.inputBoxUri = oi);
					}
				}
				e.$jdb = Io;
				class Sr {
					constructor() {}
				}
				e.$kdb = Sr;
				class Xr {
					constructor(vt) {
						this.textDiffs = vt;
					}
				}
				e.$ldb = Xr;
				var Qs;
				(function (St) {
					(St[(St.Down = 0)] = "Down"), (St[(St.Up = 1)] = "Up");
				})(Qs || (e.InteractiveSessionVoteDirection = Qs = {}));
				var qs;
				(function (St) {
					(St[(St.Action = 1)] = "Action"), (St[(St.Toolbar = 2)] = "Toolbar");
				})(qs || (e.ChatCopyKind = qs = {}));
				var xr;
				(function (St) {
					(St[(St.Short = 1)] = "Short"),
						(St[(St.Medium = 2)] = "Medium"),
						(St[(St.Full = 3)] = "Full");
				})(xr || (e.ChatVariableLevel = xr = {}));
				class Yr {
					constructor(vt, oi, Ei) {
						(this.id = vt), (this.label = oi), (this.values = Ei);
					}
				}
				e.$mdb = Yr;
				var zr;
				(function (St) {
					(St[(St.Unhelpful = 0)] = "Unhelpful"),
						(St[(St.Helpful = 1)] = "Helpful"),
						(St[(St.Undone = 2)] = "Undone"),
						(St[(St.Accepted = 3)] = "Accepted"),
						(St[(St.Bug = 4)] = "Bug");
				})(zr || (e.InteractiveEditorResponseFeedbackKind = zr = {}));
				var Er;
				(function (St) {
					(St[(St.Unhelpful = 0)] = "Unhelpful"),
						(St[(St.Helpful = 1)] = "Helpful");
				})(Er || (e.ChatResultFeedbackKind = Er = {}));
				class Zr {
					constructor(vt) {
						if (typeof vt != "string" && vt.isTrusted === !0)
							throw new Error(
								"The boolean form of MarkdownString.isTrusted is NOT supported for chat participants.",
							);
						this.value = typeof vt == "string" ? new He(vt) : vt;
					}
				}
				e.$ndb = Zr;
				class uo {
					constructor(vt, oi) {
						if (typeof vt != "string" && vt.isTrusted === !0)
							throw new Error(
								"The boolean form of MarkdownString.isTrusted is NOT supported for chat participants.",
							);
						(this.value = typeof vt == "string" ? new He(vt) : vt),
							(this.vulnerabilities = oi);
					}
				}
				e.$odb = uo;
				class Ir {
					constructor(vt, oi) {
						(this.participant = vt), (this.command = oi);
					}
				}
				e.$pdb = Ir;
				class jr {
					constructor(vt, oi, Ei, tn) {
						(this.title = vt),
							(this.message = oi),
							(this.data = Ei),
							(this.buttons = tn);
					}
				}
				e.$qdb = jr;
				class Is {
					constructor(vt, oi) {
						(this.value = vt), (this.baseUri = oi);
					}
				}
				e.$rdb = Is;
				class Ur {
					constructor(vt, oi) {
						(this.value = vt), (this.title = oi);
					}
				}
				e.$sdb = Ur;
				class rr {
					constructor(vt) {
						this.value = vt;
					}
				}
				e.$tdb = rr;
				class Vs {
					constructor(vt, oi) {
						(this.value = vt), (this.task = oi);
					}
				}
				e.$udb = Vs;
				class or {
					constructor(vt) {
						if (typeof vt != "string" && vt.isTrusted === !0)
							throw new Error(
								"The boolean form of MarkdownString.isTrusted is NOT supported for chat participants.",
							);
						this.value = typeof vt == "string" ? new He(vt) : vt;
					}
				}
				e.$vdb = or;
				class Hs {
					constructor(vt) {
						this.value = vt;
					}
				}
				e.$wdb = Hs;
				class ar {
					constructor(vt, oi, Ei) {
						(this.value = vt), (this.iconPath = oi), (this.options = Ei);
					}
				}
				e.$xdb = ar;
				class Tr {
					constructor(vt, oi, Ei) {
						(this.value = vt), (this.license = oi), (this.snippet = Ei);
					}
				}
				e.$ydb = Tr;
				class ws {
					constructor(vt, oi) {
						(this.uri = vt), (this.range = oi);
					}
				}
				e.$zdb = ws;
				class Pr {
					constructor(vt, oi) {
						(this.uri = vt), (this.edits = Array.isArray(oi) ? oi : [oi]);
					}
				}
				e.$Adb = Pr;
				class Ci {
					constructor(vt, oi, Ei, tn) {
						(this.prompt = vt),
							(this.command = oi),
							(this.references = Ei),
							(this.participant = tn);
					}
				}
				e.$Bdb = Ci;
				class vs {
					constructor(vt, oi, Ei, tn) {
						(this.response = vt),
							(this.result = oi),
							(this.participant = Ei),
							(this.command = tn);
					}
				}
				e.$Cdb = vs;
				var Ts;
				(function (St) {
					(St[(St.Panel = 1)] = "Panel"),
						(St[(St.Terminal = 2)] = "Terminal"),
						(St[(St.Notebook = 3)] = "Notebook"),
						(St[(St.Editor = 4)] = "Editor");
				})(Ts || (e.ChatLocation = Ts = {}));
				var kr;
				(function (St) {
					(St[(St.Complete = 1)] = "Complete"),
						(St[(St.Partial = 2)] = "Partial"),
						(St[(St.Omitted = 3)] = "Omitted");
				})(kr || (e.ChatResponseReferencePartStatusKind = kr = {}));
				class ks {
					constructor(vt, oi, Ei) {
						(this.document = vt), (this.selection = oi), (this.wholeRange = Ei);
					}
				}
				e.$Ddb = ks;
				class cr {
					constructor(vt) {
						this.cell = vt;
					}
				}
				e.$Edb = cr;
				var ds;
				(function (St) {
					(St[(St.User = 1)] = "User"),
						(St[(St.Assistant = 2)] = "Assistant"),
						(St[(St.System = 3)] = "System");
				})(ds || (e.LanguageModelChatMessageRole = ds = {}));
				class Lr {
					constructor(vt, oi, Ei) {
						(this.toolCallId = vt),
							(this.content = oi),
							(this.isError = Ei ?? !1);
					}
				}
				e.$Fdb = Lr;
				class is {
					static User(vt, oi) {
						const Ei = new is(ds.User, typeof vt == "string" ? vt : "", oi);
						return (Ei.content2 = [vt]), Ei;
					}
					static Assistant(vt, oi) {
						return new is(ds.Assistant, vt, oi);
					}
					constructor(vt, oi, Ei) {
						(this.role = vt),
							(this.content = oi),
							(this.content2 = [oi]),
							(this.name = Ei);
					}
				}
				e.$Gdb = is;
				class Wr {
					constructor(vt, oi, Ei) {
						(this.name = vt), (this.toolCallId = oi), (this.parameters = Ei);
					}
				}
				e.$Hdb = Wr;
				class hs {
					constructor(vt) {
						this.value = vt;
					}
				}
				e.$Idb = hs;
				class _s {
					constructor(vt) {
						this.content = vt;
					}
				}
				e.$Jdb = _s;
				class Qr {
					constructor(vt, oi) {
						(this.content = vt), (this.name = oi);
					}
				}
				e.$Kdb = Qr;
				class Dr {
					constructor(vt, oi) {
						(this.content = vt), (this.name = oi);
					}
				}
				e.$Ldb = Dr;
				class Cs extends Error {
					static NotFound(vt) {
						return new Cs(vt, Cs.NotFound.name);
					}
					static NoPermissions(vt) {
						return new Cs(vt, Cs.NoPermissions.name);
					}
					static Blocked(vt) {
						return new Cs(vt, Cs.Blocked.name);
					}
					constructor(vt, oi, Ei) {
						super(vt, { cause: Ei }),
							(this.name = "LanguageModelError"),
							(this.code = oi ?? "");
					}
				}
				e.$Mdb = Cs;
				var lr;
				(function (St) {
					(St[(St.SymbolInformation = 1)] = "SymbolInformation"),
						(St[(St.CommandInformation = 2)] = "CommandInformation"),
						(St[(St.SearchInformation = 3)] = "SearchInformation"),
						(St[(St.SettingInformation = 4)] = "SettingInformation");
				})(lr || (e.RelatedInformationType = lr = {}));
				var en;
				(function (St) {
					(St[(St.Started = 1)] = "Started"),
						(St[(St.Recognizing = 2)] = "Recognizing"),
						(St[(St.Recognized = 3)] = "Recognized"),
						(St[(St.Stopped = 4)] = "Stopped"),
						(St[(St.Error = 5)] = "Error");
				})(en || (e.SpeechToTextStatus = en = {}));
				var Ks;
				(function (St) {
					(St[(St.Started = 1)] = "Started"),
						(St[(St.Stopped = 2)] = "Stopped"),
						(St[(St.Error = 3)] = "Error");
				})(Ks || (e.TextToSpeechStatus = Ks = {}));
				var As;
				(function (St) {
					(St[(St.Recognized = 1)] = "Recognized"),
						(St[(St.Stopped = 2)] = "Stopped");
				})(As || (e.KeywordRecognitionStatus = As = {}));
				class Os {
					constructor(vt, oi) {
						(this.text = vt), (this.range = oi);
					}
				}
				e.$Ndb = Os;
				var Mr;
				(function (St) {
					(St[(St.Invoke = 0)] = "Invoke"),
						(St[(St.Automatic = 1)] = "Automatic");
				})(Mr || (e.InlineEditTriggerKind = Mr = {}));
			},
		),
		