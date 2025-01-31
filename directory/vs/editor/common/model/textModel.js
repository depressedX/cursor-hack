import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/color.js';
import '../../../base/common/errors.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/stream.js';
import '../../../base/common/strings.js';
import '../../../base/common/uint.js';
import '../../../base/common/uri.js';
import '../core/eolCounter.js';
import '../core/indentation.js';
import '../core/position.js';
import '../core/range.js';
import '../core/selection.js';
import '../core/textModelDefaults.js';
import '../languages/language.js';
import '../languages/languageConfigurationRegistry.js';
import '../model.js';
import './bracketPairsTextModelPart/bracketPairsImpl.js';
import './bracketPairsTextModelPart/colorizedBracketPairsDecorationProvider.js';
import './editStack.js';
import './guidesTextModelPart.js';
import './indentationGuesser.js';
import './intervalTree.js';
import './pieceTreeTextBuffer/pieceTreeTextBuffer.js';
import './pieceTreeTextBuffer/pieceTreeTextBufferBuilder.js';
import './textModelSearch.js';
import './tokenizationTextModelPart.js';
import './tokens.js';
import '../textModelEvents.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../platform/undoRedo/common/undoRedo.js';
import '../../../../external/solid/store.js';
import '../../../platform/tooltipService/common/tooltipService.js';
define(
			de[122],
			he([
				1, 0, 24, 97, 29, 6, 3, 408, 37, 210, 9, 531, 1146, 48, 17, 104, 910,
				61, 152, 64, 2693, 2854, 780, 1543, 2566, 946, 1194, 1195, 543, 2772,
				1176, 590, 5, 155, 193, 308,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*arrays*/,
				i /*color*/,
				w /*errors*/,
				E /*event*/,
				C /*lifecycle*/,
				d /*stream*/,
				m /*strings*/,
				r /*uint*/,
				u /*uri*/,
				a /*eolCounter*/,
				h /*indentation*/,
				c /*position*/,
				n /*range*/,
				g /*selection*/,
				p /*textModelDefaults*/,
				o /*language*/,
				f /*languageConfigurationRegistry*/,
				b /*model*/,
				s /*bracketPairsImpl*/,
				l /*colorizedBracketPairsDecorationProvider*/,
				y /*editStack*/,
				$ /*guidesTextModelPart*/,
				v /*indentationGuesser*/,
				S /*intervalTree*/,
				I /*pieceTreeTextBuffer*/,
				T /*pieceTreeTextBufferBuilder*/,
				P /*textModelSearch*/,
				k /*tokenizationTextModelPart*/,
				L /*tokens*/,
				D /*textModelEvents*/,
				M /*instantiation*/,
				N /*undoRedo*/,
				A /*store*/,
				R /*tooltipService*/,
) {
				"use strict";
				var O;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fY = e.$eY = e.$dY = e.$cY = e.$bY = e.$aY = e.$$X = void 0),
					(e.$7X = B),
					(e.$8X = U),
					(e.$9X = z),
					(e.$0X = F),
					(e.$_X = W),
					(m = mt(m)),
					(b = mt(b));
				function B(ye) {
					const ue = new T.$0U();
					return ue.acceptChunk(ye), ue.finish();
				}
				function U(ye) {
					return new Promise((ue, fe) => {
						const me = new T.$0U();
						let ve = !1;
						(0, d.$Le)(ye, {
							onData: (ge) => {
								me.acceptChunk(typeof ge == "string" ? ge : ge.toString());
							},
							onError: (ge) => {
								ve || ((ve = !0), fe(ge));
							},
							onEnd: () => {
								ve || ((ve = !0), ue(me.finish()));
							},
						});
					});
				}
				function z(ye) {
					const ue = new T.$0U();
					let fe;
					for (; typeof (fe = ye.read()) == "string"; ) ue.acceptChunk(fe);
					return ue.finish();
				}
				function F(ye, ue) {
					let fe;
					return (
						typeof ye == "string"
							? (fe = B(ye))
							: b.$NN(ye)
								? (fe = z(ye))
								: (fe = ye),
						fe.create(ue)
					);
				}
				let x = 0;
				const H = 999,
					q = 1e4;
				class V {
					constructor(ue) {
						(this.a = ue), (this.b = !1);
					}
					read() {
						if (this.b) return null;
						const ue = [];
						let fe = 0,
							me = 0;
						do {
							const ve = this.a.read();
							if (ve === null)
								return (this.b = !0), fe === 0 ? null : ue.join("");
							if (
								(ve.length > 0 && ((ue[fe++] = ve), (me += ve.length)),
								me >= 64 * 1024)
							)
								return ue.join("");
						} while (!0);
					}
				}
				const G = () => {
					throw new Error("Invalid change accessor");
				};
				var K;
				(function (ye) {
					(ye[(ye.Relaxed = 0)] = "Relaxed"),
						(ye[(ye.SurrogatePairs = 1)] = "SurrogatePairs");
				})(K || (K = {}));
				let J = class extends C.$1c {
					static {
						O = this;
					}
					static {
						this._MODEL_SYNC_LIMIT = 50 * 1024 * 1024;
					}
					static {
						this.a = 20 * 1024 * 1024;
					}
					static {
						this.b = 300 * 1e3;
					}
					static {
						this.f = 256 * 1024 * 1024;
					}
					static {
						this.DEFAULT_CREATION_OPTIONS = {
							isForSimpleWidget: !1,
							tabSize: p.$RK.tabSize,
							indentSize: p.$RK.indentSize,
							insertSpaces: p.$RK.insertSpaces,
							detectIndentation: !1,
							defaultEOL: b.DefaultEndOfLine.LF,
							trimAutoWhitespace: p.$RK.trimAutoWhitespace,
							largeFileOptimizations: p.$RK.largeFileOptimizations,
							bracketPairColorizationOptions:
								p.$RK.bracketPairColorizationOptions,
						};
					}
					static resolveOptions(ue, fe) {
						if (fe.detectIndentation) {
							const me = (0, v.$EU)(ue, fe.tabSize, fe.insertSpaces);
							return new b.$LN({
								tabSize: me.tabSize,
								indentSize: "tabSize",
								insertSpaces: me.insertSpaces,
								trimAutoWhitespace: fe.trimAutoWhitespace,
								defaultEOL: fe.defaultEOL,
								bracketPairColorizationOptions:
									fe.bracketPairColorizationOptions,
							});
						}
						return new b.$LN(fe);
					}
					get onDidChangeLanguage() {
						return this.bb.onDidChangeLanguage;
					}
					get onDidChangeLanguageConfiguration() {
						return this.bb.onDidChangeLanguageConfiguration;
					}
					get onDidChangeTokens() {
						return this.bb.onDidChangeTokens;
					}
					onDidChangeContent(ue) {
						return this.u.slowEvent((fe) => ue(fe.contentChangedEvent));
					}
					onDidChangeContentOrInjectedText(ue) {
						return (0, C.$Xc)(
							this.u.fastEvent((fe) => ue(fe)),
							this.s.event((fe) => ue(fe)),
						);
					}
					_isDisposing() {
						return this.I;
					}
					get tokenization() {
						return this.bb;
					}
					get bracketPairs() {
						return this.cb;
					}
					get guides() {
						return this.db;
					}
					constructor(ue, fe, me, ve = null, ge, be, Ce, Le, Fe) {
						super(),
							(this.fb = ge),
							(this.gb = be),
							(this.hb = Ce),
							(this.ib = Le),
							(this.jb = Fe),
							(this.g = this.D(new E.$re())),
							(this.onWillDispose = this.g.event),
							(this.h = this.D(new ae((Te) => this.Bb(Te)))),
							(this.onDidChangeDecorations = this.h.event),
							(this.n = this.D(new E.$re())),
							(this.onDidChangeOptions = this.n.event),
							(this.q = this.D(new E.$re())),
							(this.onDidChangeAttached = this.q.event),
							(this.s = this.D(new E.$re())),
							(this.u = this.D(new pe())),
							(this.G = this.D(new C.$2c())),
							(this.X = 0),
							(this.eb = new L.$jV()),
							x++,
							(this.id = "$model" + x),
							(this.isForSimpleWidget = me.isForSimpleWidget),
							typeof ve > "u" || ve === null
								? (this.w = u.URI.parse("inmemory://model/" + x))
								: (this.w = ve),
							(this.y = 0);
						const { textBuffer: Oe, disposable: xe } = F(ue, me.defaultEOL);
						(this.z = Oe),
							(this.C = xe),
							(this.F = O.resolveOptions(this.z, me));
						const He = typeof fe == "string" ? fe : fe.languageId;
						typeof fe != "string" &&
							(this.G.value = fe.onDidChange(() => this.Ib(fe.languageId))),
							(this.cb = this.D(new s.$9O(this, this.hb))),
							(this.db = this.D(new $.$CU(this, this.hb))),
							(this.ab = this.D(new l.$uU(this))),
							(this.bb = this.jb.createInstance(
								k.$rV,
								this,
								this.cb,
								He,
								this.eb,
							));
						const Ke = this.z.getLineCount(),
							Je = this.z.getValueLengthInRange(
								new n.$iL(1, 1, Ke, this.z.getLineLength(Ke) + 1),
								b.EndOfLinePreference.TextDefined,
							);
						me.largeFileOptimizations
							? ((this.O = Je > O.a || Ke > O.b), (this.P = Je > O.f))
							: ((this.O = !1), (this.P = !1)),
							(this.N = Je > O._MODEL_SYNC_LIMIT),
							(this.J = 1),
							(this.L = 1),
							(this.M = null),
							(this.H = !1),
							(this.I = !1),
							(this.W = m.$fg(x)),
							(this.Y = 0),
							(this.Z = Object.create(null)),
							(this.$ = new ne()),
							(this.Q = new y.$zU(this, this.fb)),
							(this.R = !1),
							(this.S = !1),
							(this.U = null),
							this.D(
								this.ab.onDidChange(() => {
									this.h.beginDeferredEmit(),
										this.h.fire(),
										this.h.endDeferredEmit();
								}),
							),
							this.gb.requestRichLanguageFeatures(He),
							this.D(
								this.hb.onDidChange((Te) => {
									this.cb.handleLanguageConfigurationServiceChange(Te),
										this.bb.handleLanguageConfigurationServiceChange(Te);
								}),
							),
							(this.reactiveStorageReducers = new $e(this)),
							([
								this.nonPersistentReactiveStorage,
								this.setNonPersistentReactiveStorage,
							] = this.kb());
					}
					kb() {
						return (0, A.createStore)(b.$ON(), void 0);
					}
					dispose() {
						(this.I = !0),
							this.g.fire(),
							this.bb.dispose(),
							(this.H = !0),
							super.dispose(),
							this.C.dispose(),
							(this.I = !1);
						const ue = new I.$9U(
							[],
							"",
							`
`,
							!1,
							!1,
							!0,
							!0,
						);
						ue.dispose(), (this.z = ue), (this.C = C.$1c.None);
					}
					_hasListeners() {
						return (
							this.g.hasListeners() ||
							this.h.hasListeners() ||
							this.bb._hasListeners() ||
							this.n.hasListeners() ||
							this.q.hasListeners() ||
							this.s.hasListeners() ||
							this.u.hasListeners()
						);
					}
					lb() {
						if (this.H) throw new w.$gb("Model is disposed!");
					}
					equalsTextBuffer(ue) {
						return this.lb(), this.z.equals(ue);
					}
					getTextBuffer() {
						return this.lb(), this.z;
					}
					mb(ue, fe) {
						this.I ||
							(this.bb.handleDidChangeContent(fe),
							this.cb.handleDidChangeContent(fe),
							this.u.fire(new D.$BN(ue, fe)));
					}
					setValue(ue) {
						if ((this.lb(), ue == null)) throw (0, w.$$)();
						const { textBuffer: fe, disposable: me } = F(ue, this.F.defaultEOL);
						this.ob(fe, me);
					}
					nb(ue, fe, me, ve, ge, be, Ce, Le) {
						return {
							changes: [
								{ range: ue, rangeOffset: fe, rangeLength: me, text: ve },
							],
							eol: this.z.getEOL(),
							isEolChange: Le,
							versionId: this.getVersionId(),
							isUndoing: ge,
							isRedoing: be,
							isFlush: Ce,
						};
					}
					ob(ue, fe) {
						this.lb();
						const me = this.getFullModelRange(),
							ve = this.getValueLengthInRange(me),
							ge = this.getLineCount(),
							be = this.getLineMaxColumn(ge);
						(this.z = ue),
							this.C.dispose(),
							(this.C = fe),
							this.rb(),
							(this.Z = Object.create(null)),
							(this.$ = new ne()),
							this.Q.clear(),
							(this.U = null),
							this.mb(
								new D.$zN([new D.$tN()], this.J, !1, !1),
								this.nb(
									new n.$iL(1, 1, ge, be),
									0,
									ve,
									this.getValue(),
									!1,
									!1,
									!0,
									!1,
								),
							);
					}
					setEOL(ue) {
						this.lb();
						const fe =
							ue === b.EndOfLineSequence.CRLF
								? `\r
`
								: `
`;
						if (this.z.getEOL() === fe) return;
						const me = this.getFullModelRange(),
							ve = this.getValueLengthInRange(me),
							ge = this.getLineCount(),
							be = this.getLineMaxColumn(ge);
						this.pb(),
							this.z.setEOL(fe),
							this.rb(),
							this.qb(),
							this.mb(
								new D.$zN([new D.$yN()], this.J, !1, !1),
								this.nb(
									new n.$iL(1, 1, ge, be),
									0,
									ve,
									this.getValue(),
									!1,
									!1,
									!1,
									!0,
								),
							);
					}
					pb() {
						this.$.ensureAllNodesHaveRanges(this);
					}
					qb() {
						const ue = this.getVersionId(),
							fe = this.$.collectNodesPostOrder();
						for (let me = 0, ve = fe.length; me < ve; me++) {
							const ge = fe[me],
								be = ge.range,
								Ce = ge.cachedAbsoluteStart - ge.start,
								Le = this.z.getOffsetAt(be.startLineNumber, be.startColumn),
								Fe = this.z.getOffsetAt(be.endLineNumber, be.endColumn);
							(ge.cachedAbsoluteStart = Le),
								(ge.cachedAbsoluteEnd = Fe),
								(ge.cachedVersionId = ue),
								(ge.start = Le - Ce),
								(ge.end = Fe - Ce),
								(0, S.$LU)(ge);
						}
					}
					onBeforeAttached() {
						return (
							this.y++,
							this.y === 1 &&
								(this.bb.handleDidChangeAttached(), this.q.fire(void 0)),
							this.eb.attachView()
						);
					}
					onBeforeDetached(ue) {
						this.y--,
							this.y === 0 &&
								(this.bb.handleDidChangeAttached(), this.q.fire(void 0)),
							this.eb.detachView(ue);
					}
					isAttachedToEditor() {
						return this.y > 0;
					}
					getAttachedEditorCount() {
						return this.y;
					}
					isTooLargeForSyncing() {
						return this.N;
					}
					isTooLargeForTokenization() {
						return this.O;
					}
					isTooLargeForHeapOperation() {
						return this.P;
					}
					isDisposed() {
						return this.H;
					}
					isDominatedByLongLines() {
						if ((this.lb(), this.isTooLargeForTokenization())) return !1;
						let ue = 0,
							fe = 0;
						const me = this.z.getLineCount();
						for (let ve = 1; ve <= me; ve++) {
							const ge = this.z.getLineLength(ve);
							ge >= q ? (fe += ge) : (ue += ge);
						}
						return fe > ue;
					}
					get uri() {
						return this.w;
					}
					getOptions() {
						return this.lb(), this.F;
					}
					getFormattingOptions() {
						return {
							tabSize: this.F.indentSize,
							insertSpaces: this.F.insertSpaces,
						};
					}
					updateOptions(ue) {
						this.lb();
						const fe = typeof ue.tabSize < "u" ? ue.tabSize : this.F.tabSize,
							me =
								typeof ue.indentSize < "u"
									? ue.indentSize
									: this.F.originalIndentSize,
							ve =
								typeof ue.insertSpaces < "u"
									? ue.insertSpaces
									: this.F.insertSpaces,
							ge =
								typeof ue.trimAutoWhitespace < "u"
									? ue.trimAutoWhitespace
									: this.F.trimAutoWhitespace,
							be =
								typeof ue.bracketColorizationOptions < "u"
									? ue.bracketColorizationOptions
									: this.F.bracketPairColorizationOptions,
							Ce = new b.$LN({
								tabSize: fe,
								indentSize: me,
								insertSpaces: ve,
								defaultEOL: this.F.defaultEOL,
								trimAutoWhitespace: ge,
								bracketPairColorizationOptions: be,
							});
						if (this.F.equals(Ce)) return;
						const Le = this.F.createChangeEvent(Ce);
						(this.F = Ce),
							this.cb.handleDidChangeOptions(Le),
							this.ab.handleDidChangeOptions(Le),
							this.n.fire(Le);
					}
					detectIndentation(ue, fe) {
						this.lb();
						const me = (0, v.$EU)(this.z, fe, ue);
						this.updateOptions({
							insertSpaces: me.insertSpaces,
							tabSize: me.tabSize,
							indentSize: me.tabSize,
						});
					}
					normalizeIndentation(ue) {
						return (
							this.lb(), (0, h.$ZO)(ue, this.F.indentSize, this.F.insertSpaces)
						);
					}
					getVersionId() {
						return this.lb(), this.J;
					}
					mightContainRTL() {
						return this.z.mightContainRTL();
					}
					mightContainUnusualLineTerminators() {
						return this.z.mightContainUnusualLineTerminators();
					}
					removeUnusualLineTerminators(ue = null) {
						const fe = this.findMatches(
							m.$3f.source,
							!1,
							!0,
							!1,
							null,
							!1,
							r.Constants.MAX_SAFE_SMALL_INTEGER,
						);
						this.z.resetMightContainUnusualLineTerminators(),
							this.pushEditOperations(
								ue,
								fe.map((me) => ({ range: me.range, text: null })),
								() => null,
							);
					}
					mightContainNonBasicASCII() {
						return this.z.mightContainNonBasicASCII();
					}
					getAlternativeVersionId() {
						return this.lb(), this.L;
					}
					getInitialUndoRedoSnapshot() {
						return this.lb(), this.M;
					}
					getOffsetAt(ue) {
						this.lb();
						const fe = this.tb(ue.lineNumber, ue.column, K.Relaxed);
						return this.z.getOffsetAt(fe.lineNumber, fe.column);
					}
					getPositionAt(ue) {
						this.lb();
						const fe = Math.min(this.z.getLength(), Math.max(0, ue));
						return this.z.getPositionAt(fe);
					}
					rb() {
						(this.J = this.J + 1), (this.L = this.J);
					}
					_overwriteVersionId(ue) {
						this.J = ue;
					}
					_overwriteAlternativeVersionId(ue) {
						this.L = ue;
					}
					_overwriteInitialUndoRedoSnapshot(ue) {
						this.M = ue;
					}
					getValue(ue, fe = !1) {
						if ((this.lb(), this.isTooLargeForHeapOperation()))
							throw new w.$gb("Operation would exceed heap memory limits");
						const me = this.getFullModelRange(),
							ve = this.getValueInRange(me, ue);
						return fe ? this.z.getBOM() + ve : ve;
					}
					createSnapshot(ue = !1) {
						return new V(this.z.createSnapshot(ue));
					}
					getValueLength(ue, fe = !1) {
						this.lb();
						const me = this.getFullModelRange(),
							ve = this.getValueLengthInRange(me, ue);
						return fe ? this.z.getBOM().length + ve : ve;
					}
					getValueInRange(ue, fe = b.EndOfLinePreference.TextDefined) {
						return (
							this.lb(), this.z.getValueInRange(this.validateRange(ue), fe)
						);
					}
					getValueLengthInRange(ue, fe = b.EndOfLinePreference.TextDefined) {
						return (
							this.lb(),
							this.z.getValueLengthInRange(this.validateRange(ue), fe)
						);
					}
					getCharacterCountInRange(ue, fe = b.EndOfLinePreference.TextDefined) {
						return (
							this.lb(),
							this.z.getCharacterCountInRange(this.validateRange(ue), fe)
						);
					}
					getLineCount() {
						return this.lb(), this.z.getLineCount();
					}
					getLineContent(ue) {
						if ((this.lb(), ue < 1 || ue > this.getLineCount()))
							throw new w.$gb("Illegal value for lineNumber");
						return this.z.getLineContent(ue);
					}
					getLineLength(ue) {
						if ((this.lb(), ue < 1 || ue > this.getLineCount()))
							throw new w.$gb("Illegal value for lineNumber");
						return this.z.getLineLength(ue);
					}
					getLinesContent() {
						if ((this.lb(), this.isTooLargeForHeapOperation()))
							throw new w.$gb("Operation would exceed heap memory limits");
						return this.z.getLinesContent();
					}
					getEOL() {
						return this.lb(), this.z.getEOL();
					}
					getEndOfLineSequence() {
						return (
							this.lb(),
							this.z.getEOL() ===
							`
`
								? b.EndOfLineSequence.LF
								: b.EndOfLineSequence.CRLF
						);
					}
					getLineMinColumn(ue) {
						return this.lb(), 1;
					}
					getLineMaxColumn(ue) {
						if ((this.lb(), ue < 1 || ue > this.getLineCount()))
							throw new w.$gb("Illegal value for lineNumber");
						return this.z.getLineLength(ue) + 1;
					}
					getLineFirstNonWhitespaceColumn(ue) {
						if ((this.lb(), ue < 1 || ue > this.getLineCount()))
							throw new w.$gb("Illegal value for lineNumber");
						return this.z.getLineFirstNonWhitespaceColumn(ue);
					}
					getLineLastNonWhitespaceColumn(ue) {
						if ((this.lb(), ue < 1 || ue > this.getLineCount()))
							throw new w.$gb("Illegal value for lineNumber");
						return this.z.getLineLastNonWhitespaceColumn(ue);
					}
					_validateRangeRelaxedNoAllocations(ue) {
						const fe = this.z.getLineCount(),
							me = ue.startLineNumber,
							ve = ue.startColumn;
						let ge = Math.floor(typeof me == "number" && !isNaN(me) ? me : 1),
							be = Math.floor(typeof ve == "number" && !isNaN(ve) ? ve : 1);
						if (ge < 1) (ge = 1), (be = 1);
						else if (ge > fe) (ge = fe), (be = this.getLineMaxColumn(ge));
						else if (be <= 1) be = 1;
						else {
							const xe = this.getLineMaxColumn(ge);
							be >= xe && (be = xe);
						}
						const Ce = ue.endLineNumber,
							Le = ue.endColumn;
						let Fe = Math.floor(typeof Ce == "number" && !isNaN(Ce) ? Ce : 1),
							Oe = Math.floor(typeof Le == "number" && !isNaN(Le) ? Le : 1);
						if (Fe < 1) (Fe = 1), (Oe = 1);
						else if (Fe > fe) (Fe = fe), (Oe = this.getLineMaxColumn(Fe));
						else if (Oe <= 1) Oe = 1;
						else {
							const xe = this.getLineMaxColumn(Fe);
							Oe >= xe && (Oe = xe);
						}
						return me === ge &&
							ve === be &&
							Ce === Fe &&
							Le === Oe &&
							ue instanceof n.$iL &&
							!(ue instanceof g.$kL)
							? ue
							: new n.$iL(ge, be, Fe, Oe);
					}
					sb(ue, fe, me) {
						if (
							typeof ue != "number" ||
							typeof fe != "number" ||
							isNaN(ue) ||
							isNaN(fe) ||
							ue < 1 ||
							fe < 1 ||
							(ue | 0) !== ue ||
							(fe | 0) !== fe
						)
							return !1;
						const ve = this.z.getLineCount();
						if (ue > ve) return !1;
						if (fe === 1) return !0;
						const ge = this.getLineMaxColumn(ue);
						if (fe > ge) return !1;
						if (me === K.SurrogatePairs) {
							const be = this.z.getLineCharCode(ue, fe - 2);
							if (m.$Qf(be)) return !1;
						}
						return !0;
					}
					tb(ue, fe, me) {
						const ve = Math.floor(typeof ue == "number" && !isNaN(ue) ? ue : 1),
							ge = Math.floor(typeof fe == "number" && !isNaN(fe) ? fe : 1),
							be = this.z.getLineCount();
						if (ve < 1) return new c.$hL(1, 1);
						if (ve > be) return new c.$hL(be, this.getLineMaxColumn(be));
						if (ge <= 1) return new c.$hL(ve, 1);
						const Ce = this.getLineMaxColumn(ve);
						if (ge >= Ce) return new c.$hL(ve, Ce);
						if (me === K.SurrogatePairs) {
							const Le = this.z.getLineCharCode(ve, ge - 2);
							if (m.$Qf(Le)) return new c.$hL(ve, ge - 1);
						}
						return new c.$hL(ve, ge);
					}
					validatePosition(ue) {
						const fe = K.SurrogatePairs;
						return (
							this.lb(),
							ue instanceof c.$hL && this.sb(ue.lineNumber, ue.column, fe)
								? ue
								: this.tb(ue.lineNumber, ue.column, fe)
						);
					}
					ub(ue, fe) {
						const me = ue.startLineNumber,
							ve = ue.startColumn,
							ge = ue.endLineNumber,
							be = ue.endColumn;
						if (!this.sb(me, ve, K.Relaxed) || !this.sb(ge, be, K.Relaxed))
							return !1;
						if (fe === K.SurrogatePairs) {
							const Ce = ve > 1 ? this.z.getLineCharCode(me, ve - 2) : 0,
								Le =
									be > 1 && be <= this.z.getLineLength(ge)
										? this.z.getLineCharCode(ge, be - 2)
										: 0,
								Fe = m.$Qf(Ce),
								Oe = m.$Qf(Le);
							return !Fe && !Oe;
						}
						return !0;
					}
					validateRange(ue) {
						const fe = K.SurrogatePairs;
						if (
							(this.lb(),
							ue instanceof n.$iL && !(ue instanceof g.$kL) && this.ub(ue, fe))
						)
							return ue;
						const me = this.tb(ue.startLineNumber, ue.startColumn, K.Relaxed),
							ve = this.tb(ue.endLineNumber, ue.endColumn, K.Relaxed),
							ge = me.lineNumber,
							be = me.column,
							Ce = ve.lineNumber,
							Le = ve.column;
						if (fe === K.SurrogatePairs) {
							const Fe = be > 1 ? this.z.getLineCharCode(ge, be - 2) : 0,
								Oe =
									Le > 1 && Le <= this.z.getLineLength(Ce)
										? this.z.getLineCharCode(Ce, Le - 2)
										: 0,
								xe = m.$Qf(Fe),
								He = m.$Qf(Oe);
							return !xe && !He
								? new n.$iL(ge, be, Ce, Le)
								: ge === Ce && be === Le
									? new n.$iL(ge, be - 1, Ce, Le - 1)
									: xe && He
										? new n.$iL(ge, be - 1, Ce, Le + 1)
										: xe
											? new n.$iL(ge, be - 1, Ce, Le)
											: new n.$iL(ge, be, Ce, Le + 1);
						}
						return new n.$iL(ge, be, Ce, Le);
					}
					modifyPosition(ue, fe) {
						this.lb();
						const me = this.getOffsetAt(ue) + fe;
						return this.getPositionAt(
							Math.min(this.z.getLength(), Math.max(0, me)),
						);
					}
					getFullModelRange() {
						this.lb();
						const ue = this.getLineCount();
						return new n.$iL(1, 1, ue, this.getLineMaxColumn(ue));
					}
					vb(ue, fe, me, ve) {
						return this.z.findMatchesLineByLine(ue, fe, me, ve);
					}
					findMatches(ue, fe, me, ve, ge, be, Ce = H) {
						this.lb();
						let Le = null;
						fe !== null &&
							(Array.isArray(fe) || (fe = [fe]),
							fe.every((xe) => n.$iL.isIRange(xe)) &&
								(Le = fe.map((xe) => this.validateRange(xe)))),
							Le === null && (Le = [this.getFullModelRange()]),
							(Le = Le.sort(
								(xe, He) =>
									xe.startLineNumber - He.startLineNumber ||
									xe.startColumn - He.startColumn,
							));
						const Fe = [];
						Fe.push(
							Le.reduce((xe, He) =>
								n.$iL.areIntersecting(xe, He)
									? xe.plusRange(He)
									: (Fe.push(xe), He),
							),
						);
						let Oe;
						if (
							!me &&
							ue.indexOf(`
`) < 0
						) {
							const He = new P.$XU(ue, me, ve, ge).parseSearchRequest();
							if (!He) return [];
							Oe = (Ke) => this.vb(Ke, He, be, Ce);
						} else
							Oe = (xe) =>
								P.$1U.findMatches(this, new P.$XU(ue, me, ve, ge), xe, be, Ce);
						return Fe.map(Oe).reduce((xe, He) => xe.concat(He), []);
					}
					findNextMatch(ue, fe, me, ve, ge, be) {
						this.lb();
						const Ce = this.validatePosition(fe);
						if (
							!me &&
							ue.indexOf(`
`) < 0
						) {
							const Fe = new P.$XU(ue, me, ve, ge).parseSearchRequest();
							if (!Fe) return null;
							const Oe = this.getLineCount();
							let xe = new n.$iL(
									Ce.lineNumber,
									Ce.column,
									Oe,
									this.getLineMaxColumn(Oe),
								),
								He = this.vb(xe, Fe, be, 1);
							return (
								P.$1U.findNextMatch(this, new P.$XU(ue, me, ve, ge), Ce, be),
								He.length > 0 ||
								((xe = new n.$iL(
									1,
									1,
									Ce.lineNumber,
									this.getLineMaxColumn(Ce.lineNumber),
								)),
								(He = this.vb(xe, Fe, be, 1)),
								He.length > 0)
									? He[0]
									: null
							);
						}
						return P.$1U.findNextMatch(this, new P.$XU(ue, me, ve, ge), Ce, be);
					}
					findPreviousMatch(ue, fe, me, ve, ge, be) {
						this.lb();
						const Ce = this.validatePosition(fe);
						return P.$1U.findPreviousMatch(
							this,
							new P.$XU(ue, me, ve, ge),
							Ce,
							be,
						);
					}
					pushStackElement() {
						this.Q.pushStackElement();
					}
					popStackElement() {
						this.Q.popStackElement();
					}
					pushEOL(ue) {
						if (
							(this.getEOL() ===
							`
`
								? b.EndOfLineSequence.LF
								: b.EndOfLineSequence.CRLF) !== ue
						)
							try {
								this.h.beginDeferredEmit(),
									this.u.beginDeferredEmit(),
									this.M === null &&
										(this.M = this.fb.createSnapshot(this.uri)),
									this.Q.pushEOL(ue);
							} finally {
								this.u.endDeferredEmit(), this.h.endDeferredEmit();
							}
					}
					wb(ue) {
						return ue instanceof b.$QN
							? ue
							: new b.$QN(
									ue.identifier || null,
									this.validateRange(ue.range),
									ue.text,
									ue.forceMoveMarkers || !1,
									ue.isAutoWhitespaceEdit || !1,
									ue._isTracked || !1,
								);
					}
					xb(ue) {
						const fe = [];
						for (let me = 0, ve = ue.length; me < ve; me++)
							fe[me] = this.wb(ue[me]);
						return fe;
					}
					pushEditOperations(ue, fe, me, ve, ge) {
						try {
							return (
								this.h.beginDeferredEmit(),
								this.u.beginDeferredEmit(),
								this.yb(ue, this.xb(fe), me, ve, ge)
							);
						} finally {
							this.u.endDeferredEmit(), this.h.endDeferredEmit();
						}
					}
					yb(ue, fe, me, ve, ge) {
						if (
							(this.ib.registerEvent("editor.type.push_edit_operation"),
							this.F.trimAutoWhitespace && this.U)
						) {
							const be = fe.map((Le) => ({
								range: this.validateRange(Le.range),
								text: Le.text,
							}));
							let Ce = !0;
							if (ue)
								for (let Le = 0, Fe = ue.length; Le < Fe; Le++) {
									const Oe = ue[Le];
									let xe = !1;
									for (let He = 0, Ke = be.length; He < Ke; He++) {
										const Je = be[He].range,
											Te = Je.startLineNumber > Oe.endLineNumber,
											Ee = Oe.startLineNumber > Je.endLineNumber;
										if (!Te && !Ee) {
											xe = !0;
											break;
										}
									}
									if (!xe) {
										Ce = !1;
										break;
									}
								}
							if (Ce)
								for (let Le = 0, Fe = this.U.length; Le < Fe; Le++) {
									const Oe = this.U[Le],
										xe = this.getLineMaxColumn(Oe);
									let He = !0;
									for (let Ke = 0, Je = be.length; Ke < Je; Ke++) {
										const Te = be[Ke].range,
											Ee = be[Ke].text;
										if (
											!(Oe < Te.startLineNumber || Oe > Te.endLineNumber) &&
											!(
												Oe === Te.startLineNumber &&
												Te.startColumn === xe &&
												Te.isEmpty() &&
												Ee &&
												Ee.length > 0 &&
												Ee.charAt(0) ===
													`
`
											) &&
											!(
												Oe === Te.startLineNumber &&
												Te.startColumn === 1 &&
												Te.isEmpty() &&
												Ee &&
												Ee.length > 0 &&
												Ee.charAt(Ee.length - 1) ===
													`
`
											)
										) {
											He = !1;
											break;
										}
									}
									if (He) {
										const Ke = new n.$iL(Oe, 1, Oe, xe);
										fe.push(new b.$QN(null, Ke, null, !1, !1, !1));
									}
								}
							this.U = null;
						}
						return (
							this.M === null && (this.M = this.fb.createSnapshot(this.uri)),
							this.Q.pushEditOperation(ue, fe, me, ve, ge)
						);
					}
					_applyUndo(ue, fe, me, ve) {
						this.ib.registerEvent("editor.type.undo");
						const ge = ue.map((be) => {
							const Ce = this.getPositionAt(be.newPosition),
								Le = this.getPositionAt(be.newEnd);
							return {
								range: new n.$iL(
									Ce.lineNumber,
									Ce.column,
									Le.lineNumber,
									Le.column,
								),
								text: be.oldText,
							};
						});
						this.zb(ge, fe, !0, !1, me, ve);
					}
					_applyRedo(ue, fe, me, ve) {
						this.ib.registerEvent("editor.type.redo");
						const ge = ue.map((be) => {
							const Ce = this.getPositionAt(be.oldPosition),
								Le = this.getPositionAt(be.oldEnd);
							return {
								range: new n.$iL(
									Ce.lineNumber,
									Ce.column,
									Le.lineNumber,
									Le.column,
								),
								text: be.newText,
							};
						});
						this.zb(ge, fe, !1, !0, me, ve);
					}
					zb(ue, fe, me, ve, ge, be) {
						try {
							this.h.beginDeferredEmit(),
								this.u.beginDeferredEmit(),
								(this.R = me),
								(this.S = ve),
								this.applyEdits(ue, !1),
								this.setEOL(fe),
								this._overwriteAlternativeVersionId(ge);
						} finally {
							(this.R = !1),
								(this.S = !1),
								this.u.endDeferredEmit(be),
								this.h.endDeferredEmit();
						}
					}
					applyEdits(ue, fe = !1, me = !1) {
						try {
							this.h.beginDeferredEmit(), this.u.beginDeferredEmit();
							const ve = this.xb(ue),
								ge = this.Ab(ve, fe);
							if (me)
								for (const be of ve)
									this.fb.rebaseStack(
										this.uri,
										this.z.getOffsetAt(
											be.range.startLineNumber,
											be.range.startColumn,
										),
										this.z.getOffsetAt(
											be.range.endLineNumber,
											be.range.endColumn,
										),
										be.text?.length ?? 0,
										be.range.endLineNumber,
										be.range.endColumn,
										(be.text?.split(this.getEOL()).length ?? 1) -
											Math.max(
												1,
												be.range.endLineNumber - be.range.startLineNumber,
											),
										be.text?.split(this.getEOL())[
											be.text.split(this.getEOL()).length - 1
										].length ??
											0 -
												be.range.endColumn +
												(be.range.startLineNumber === be.range.endLineNumber
													? be.range.startColumn
													: 0),
									);
							return ge;
						} finally {
							this.u.endDeferredEmit(), this.h.endDeferredEmit();
						}
					}
					Ab(ue, fe) {
						const me = this.z.getLineCount(),
							ve = this.z.applyEdits(ue, this.F.trimAutoWhitespace, fe),
							ge = this.z.getLineCount(),
							be = ve.changes;
						if (
							((this.U = ve.trimAutoWhitespaceLineNumbers), be.length !== 0)
						) {
							for (let Fe = 0, Oe = be.length; Fe < Oe; Fe++) {
								const xe = be[Fe];
								this.$.acceptReplace(
									xe.rangeOffset,
									xe.rangeLength,
									xe.text.length,
									xe.forceMoveMarkers,
								);
							}
							const Ce = [];
							this.rb();
							let Le = me;
							for (let Fe = 0, Oe = be.length; Fe < Oe; Fe++) {
								const xe = be[Fe],
									[He] = (0, a.$6L)(xe.text);
								this.h.fire();
								const Ke = xe.range.startLineNumber,
									Je = xe.range.endLineNumber,
									Te = Je - Ke,
									Ee = He,
									Ie = Math.min(Te, Ee),
									Be = Ee - Te,
									Se = ge - Le - Be + Ke,
									ke = Se,
									Ue = Se + Ee,
									qe = this.$.getInjectedTextInInterval(
										this,
										this.getOffsetAt(new c.$hL(ke, 1)),
										this.getOffsetAt(new c.$hL(Ue, this.getLineMaxColumn(Ue))),
										0,
									),
									Ae = D.$uN.fromDecorations(qe),
									Me = new t.$cc(Ae);
								for (let De = Ie; De >= 0; De--) {
									const Re = Ke + De,
										je = Se + De;
									Me.takeFromEndWhile((Ze) => Ze.lineNumber > je);
									const Ve = Me.takeFromEndWhile((Ze) => Ze.lineNumber === je);
									Ce.push(new D.$vN(Re, this.getLineContent(je), Ve));
								}
								if (Ie < Te) {
									const De = Ke + Ie;
									Ce.push(new D.$wN(De + 1, Je));
								}
								if (Ie < Ee) {
									const De = new t.$cc(Ae),
										Re = Ke + Ie,
										je = Ee - Ie,
										Ve = ge - Le - je + Re + 1,
										Ze = [],
										et = [];
									for (let rt = 0; rt < je; rt++) {
										const ft = Ve + rt;
										(et[rt] = this.getLineContent(ft)),
											De.takeWhile((bt) => bt.lineNumber < ft),
											(Ze[rt] = De.takeWhile((bt) => bt.lineNumber === ft));
									}
									Ce.push(new D.$xN(Re + 1, Ke + Ee, et, Ze));
								}
								Le += Be;
							}
							this.mb(new D.$zN(Ce, this.getVersionId(), this.R, this.S), {
								changes: be,
								eol: this.z.getEOL(),
								isEolChange: !1,
								versionId: this.getVersionId(),
								isUndoing: this.R,
								isRedoing: this.S,
								isFlush: !1,
							});
						}
						return ve.reverseEdits === null ? void 0 : ve.reverseEdits;
					}
					undo() {
						return this.fb.undo(this.uri);
					}
					canUndo() {
						return this.fb.canUndo(this.uri);
					}
					redo() {
						return this.fb.redo(this.uri);
					}
					canRedo() {
						return this.fb.canRedo(this.uri);
					}
					Bb(ue) {
						if (ue === null || ue.size === 0) return;
						const me = Array.from(ue).map(
							(ve) => new D.$vN(ve, this.getLineContent(ve), this.Db(ve)),
						);
						this.s.fire(new D.$AN(me));
					}
					changeDecorations(ue, fe = 0) {
						this.lb();
						try {
							return this.h.beginDeferredEmit(), this.Cb(fe, ue);
						} finally {
							this.h.endDeferredEmit();
						}
					}
					Cb(ue, fe) {
						const me = {
							addDecoration: (ge, be) =>
								this.Hb(ue, [], [{ range: ge, options: be }])[0],
							changeDecoration: (ge, be) => {
								this.Fb(ge, be);
							},
							changeDecorationOptions: (ge, be) => {
								this.Gb(ge, oe(be));
							},
							removeDecoration: (ge) => {
								this.Hb(ue, [ge], []);
							},
							deltaDecorations: (ge, be) =>
								ge.length === 0 && be.length === 0 ? [] : this.Hb(ue, ge, be),
						};
						let ve = null;
						try {
							ve = fe(me);
						} catch (ge) {
							(0, w.$4)(ge);
						}
						return (
							(me.addDecoration = G),
							(me.changeDecoration = G),
							(me.changeDecorationOptions = G),
							(me.removeDecoration = G),
							(me.deltaDecorations = G),
							ve
						);
					}
					deltaDecorations(ue, fe, me = 0) {
						if (
							(this.lb(), ue || (ue = []), ue.length === 0 && fe.length === 0)
						)
							return [];
						try {
							return (
								this.X++,
								this.X > 1 &&
									(console.warn(
										"Invoking deltaDecorations recursively could lead to leaking decorations.",
									),
									(0, w.$4)(
										new Error(
											"Invoking deltaDecorations recursively could lead to leaking decorations.",
										),
									)),
								this.h.beginDeferredEmit(),
								this.Hb(me, ue, fe)
							);
						} finally {
							this.h.endDeferredEmit(), this.X--;
						}
					}
					_getTrackedRange(ue) {
						return this.getDecorationRange(ue);
					}
					_setTrackedRange(ue, fe, me) {
						const ve = ue ? this.Z[ue] : null;
						if (!ve)
							return fe
								? this.Hb(0, [], [{ range: fe, options: le[me] }], !0)[0]
								: null;
						if (!fe) return this.$.delete(ve), delete this.Z[ve.id], null;
						const ge = this._validateRangeRelaxedNoAllocations(fe),
							be = this.z.getOffsetAt(ge.startLineNumber, ge.startColumn),
							Ce = this.z.getOffsetAt(ge.endLineNumber, ge.endColumn);
						return (
							this.$.delete(ve),
							ve.reset(this.getVersionId(), be, Ce, ge),
							ve.setOptions(le[me]),
							this.$.insert(ve),
							ve.id
						);
					}
					removeAllDecorationsWithOwnerId(ue) {
						if (this.H) return;
						const fe = this.$.collectNodesFromOwner(ue);
						for (let me = 0, ve = fe.length; me < ve; me++) {
							const ge = fe[me];
							this.$.delete(ge), delete this.Z[ge.id];
						}
					}
					getDecorationOptions(ue) {
						const fe = this.Z[ue];
						return fe ? fe.options : null;
					}
					getDecorationRange(ue) {
						const fe = this.Z[ue];
						return fe ? this.$.getNodeRange(this, fe) : null;
					}
					getLineDecorations(ue, fe = 0, me = !1) {
						return ue < 1 || ue > this.getLineCount()
							? []
							: this.getLinesDecorations(ue, ue, fe, me);
					}
					getLinesDecorations(ue, fe, me = 0, ve = !1, ge = !1) {
						const be = this.getLineCount(),
							Ce = Math.min(be, Math.max(1, ue)),
							Le = Math.min(be, Math.max(1, fe)),
							Fe = this.getLineMaxColumn(Le),
							Oe = new n.$iL(Ce, 1, Le, Fe),
							xe = this.Eb(Oe, me, ve, ge);
						return (
							(0, t.$4b)(xe, this.ab.getDecorationsInRange(Oe, me, ve)), xe
						);
					}
					getDecorationsInRange(ue, fe = 0, me = !1, ve = !1, ge = !1) {
						const be = this.validateRange(ue),
							Ce = this.Eb(be, fe, me, ge);
						return (
							(0, t.$4b)(Ce, this.ab.getDecorationsInRange(be, fe, me, ve)), Ce
						);
					}
					getOverviewRulerDecorations(ue = 0, fe = !1) {
						return this.$.getAll(this, ue, fe, !0, !1);
					}
					getInjectedTextDecorations(ue = 0) {
						return this.$.getAllInjectedText(this, ue);
					}
					Db(ue) {
						const fe = this.z.getOffsetAt(ue, 1),
							me = fe + this.z.getLineLength(ue),
							ve = this.$.getInjectedTextInInterval(this, fe, me, 0);
						return D.$uN
							.fromDecorations(ve)
							.filter((ge) => ge.lineNumber === ue);
					}
					getAllDecorations(ue = 0, fe = !1) {
						let me = this.$.getAll(this, ue, fe, !1, !1);
						return (me = me.concat(this.ab.getAllDecorations(ue, fe))), me;
					}
					getAllMarginDecorations(ue = 0) {
						return this.$.getAll(this, ue, !1, !1, !0);
					}
					Eb(ue, fe, me, ve) {
						const ge = this.z.getOffsetAt(ue.startLineNumber, ue.startColumn),
							be = this.z.getOffsetAt(ue.endLineNumber, ue.endColumn);
						return this.$.getAllInInterval(this, ge, be, fe, me, ve);
					}
					getRangeAt(ue, fe) {
						return this.z.getRangeAt(ue, fe - ue);
					}
					Fb(ue, fe) {
						const me = this.Z[ue];
						if (!me) return;
						if (me.options.after) {
							const Ce = this.getDecorationRange(ue);
							this.h.recordLineAffectedByInjectedText(Ce.endLineNumber);
						}
						if (me.options.before) {
							const Ce = this.getDecorationRange(ue);
							this.h.recordLineAffectedByInjectedText(Ce.startLineNumber);
						}
						const ve = this._validateRangeRelaxedNoAllocations(fe),
							ge = this.z.getOffsetAt(ve.startLineNumber, ve.startColumn),
							be = this.z.getOffsetAt(ve.endLineNumber, ve.endColumn);
						this.$.delete(me),
							me.reset(this.getVersionId(), ge, be, ve),
							this.$.insert(me),
							this.h.checkAffectedAndFire(me.options),
							me.options.after &&
								this.h.recordLineAffectedByInjectedText(ve.endLineNumber),
							me.options.before &&
								this.h.recordLineAffectedByInjectedText(ve.startLineNumber);
					}
					Gb(ue, fe) {
						const me = this.Z[ue];
						if (!me) return;
						const ve = !!(
								me.options.overviewRuler && me.options.overviewRuler.color
							),
							ge = !!(fe.overviewRuler && fe.overviewRuler.color);
						if (
							(this.h.checkAffectedAndFire(me.options),
							this.h.checkAffectedAndFire(fe),
							me.options.after || fe.after)
						) {
							const Le = this.$.getNodeRange(this, me);
							this.h.recordLineAffectedByInjectedText(Le.endLineNumber);
						}
						if (me.options.before || fe.before) {
							const Le = this.$.getNodeRange(this, me);
							this.h.recordLineAffectedByInjectedText(Le.startLineNumber);
						}
						const be = ve !== ge,
							Ce = Y(fe) !== ie(me);
						be || Ce
							? (this.$.delete(me), me.setOptions(fe), this.$.insert(me))
							: me.setOptions(fe);
					}
					Hb(ue, fe, me, ve = !1) {
						const ge = this.getVersionId(),
							be = fe.length;
						let Ce = 0;
						const Le = me.length;
						let Fe = 0;
						this.h.beginDeferredEmit();
						try {
							const Oe = new Array(Le);
							for (; Ce < be || Fe < Le; ) {
								let xe = null;
								if (Ce < be) {
									do xe = this.Z[fe[Ce++]];
									while (!xe && Ce < be);
									if (xe) {
										if (xe.options.after) {
											const He = this.$.getNodeRange(this, xe);
											this.h.recordLineAffectedByInjectedText(He.endLineNumber);
										}
										if (xe.options.before) {
											const He = this.$.getNodeRange(this, xe);
											this.h.recordLineAffectedByInjectedText(
												He.startLineNumber,
											);
										}
										this.$.delete(xe),
											ve || this.h.checkAffectedAndFire(xe.options);
									}
								}
								if (Fe < Le) {
									if (!xe) {
										const Ie = ++this.Y,
											Be = `${this.W};${Ie}`;
										(xe = new S.$HU(Be, 0, 0)), (this.Z[Be] = xe);
									}
									const He = me[Fe],
										Ke = this._validateRangeRelaxedNoAllocations(He.range),
										Je = oe(He.options),
										Te = this.z.getOffsetAt(Ke.startLineNumber, Ke.startColumn),
										Ee = this.z.getOffsetAt(Ke.endLineNumber, Ke.endColumn);
									(xe.ownerId = ue),
										xe.reset(ge, Te, Ee, Ke),
										xe.setOptions(Je),
										xe.options.after &&
											this.h.recordLineAffectedByInjectedText(Ke.endLineNumber),
										xe.options.before &&
											this.h.recordLineAffectedByInjectedText(
												Ke.startLineNumber,
											),
										ve || this.h.checkAffectedAndFire(Je),
										this.$.insert(xe),
										(Oe[Fe] = xe.id),
										Fe++;
								} else xe && delete this.Z[xe.id];
							}
							return Oe;
						} finally {
							this.h.endDeferredEmit();
						}
					}
					getLanguageId() {
						return this.tokenization.getLanguageId();
					}
					setLanguage(ue, fe) {
						typeof ue == "string"
							? (this.G.clear(), this.Ib(ue, fe))
							: ((this.G.value = ue.onDidChange(() =>
									this.Ib(ue.languageId, fe),
								)),
								this.Ib(ue.languageId, fe));
					}
					Ib(ue, fe) {
						this.tokenization.setLanguageId(ue, fe),
							this.gb.requestRichLanguageFeatures(ue);
					}
					getLanguageIdAtPosition(ue, fe) {
						return this.tokenization.getLanguageIdAtPosition(ue, fe);
					}
					getWordAtPosition(ue) {
						return this.bb.getWordAtPosition(ue);
					}
					getTokenTypeAtPosition_DANGEROUS_BECAUSE_COSTS_1_MS(ue) {
						const fe = this.bb.getLineTokens(ue.lineNumber),
							me = fe.findTokenIndexAtOffset(ue.column - 1);
						return fe.getStandardTokenType(me);
					}
					getWordUntilPosition(ue) {
						return this.bb.getWordUntilPosition(ue);
					}
					getWordsUntilPosition(ue) {
						return this.bb.getWordsUntilPosition(ue);
					}
					normalizePosition(ue, fe) {
						return ue;
					}
					getLineIndentColumn(ue) {
						return W(this.getLineContent(ue)) + 1;
					}
				};
				(e.$$X = J),
					(e.$$X =
						J =
						O =
							Ne(
								[
									j(4, N.$GN),
									j(5, o.$nM),
									j(6, f.$aN),
									j(7, R.$5X),
									j(8, M.$Li),
								],
								J,
							));
				function W(ye) {
					let ue = 0;
					for (const fe of ye)
						if (fe === " " || fe === "	") ue++;
						else break;
					return ue;
				}
				function X(ye) {
					return !!(ye.options.overviewRuler && ye.options.overviewRuler.color);
				}
				function Y(ye) {
					return !!ye.after || !!ye.before;
				}
				function ie(ye) {
					return !!ye.options.after || !!ye.options.before;
				}
				class ne {
					constructor() {
						(this.a = new S.$JU()),
							(this.b = new S.$JU()),
							(this.d = new S.$JU());
					}
					ensureAllNodesHaveRanges(ue) {
						this.getAll(ue, 0, !1, !1, !1);
					}
					f(ue, fe) {
						for (const me of fe)
							me.range === null &&
								(me.range = ue.getRangeAt(
									me.cachedAbsoluteStart,
									me.cachedAbsoluteEnd,
								));
						return fe;
					}
					getAllInInterval(ue, fe, me, ve, ge, be) {
						const Ce = ue.getVersionId(),
							Le = this.g(fe, me, ve, ge, Ce, be);
						return this.f(ue, Le);
					}
					g(ue, fe, me, ve, ge, be) {
						const Ce = this.a.intervalSearch(ue, fe, me, ve, ge, be),
							Le = this.b.intervalSearch(ue, fe, me, ve, ge, be),
							Fe = this.d.intervalSearch(ue, fe, me, ve, ge, be);
						return Ce.concat(Le).concat(Fe);
					}
					getInjectedTextInInterval(ue, fe, me, ve) {
						const ge = ue.getVersionId(),
							be = this.d.intervalSearch(fe, me, ve, !1, ge, !1);
						return this.f(ue, be).filter(
							(Ce) => Ce.options.showIfCollapsed || !Ce.range.isEmpty(),
						);
					}
					getAllInjectedText(ue, fe) {
						const me = ue.getVersionId(),
							ve = this.d.search(fe, !1, me, !1);
						return this.f(ue, ve).filter(
							(ge) => ge.options.showIfCollapsed || !ge.range.isEmpty(),
						);
					}
					getAll(ue, fe, me, ve, ge) {
						const be = ue.getVersionId(),
							Ce = this.h(fe, me, ve, be, ge);
						return this.f(ue, Ce);
					}
					h(ue, fe, me, ve, ge) {
						if (me) return this.b.search(ue, fe, ve, ge);
						{
							const be = this.a.search(ue, fe, ve, ge),
								Ce = this.b.search(ue, fe, ve, ge),
								Le = this.d.search(ue, fe, ve, ge);
							return be.concat(Ce).concat(Le);
						}
					}
					collectNodesFromOwner(ue) {
						const fe = this.a.collectNodesFromOwner(ue),
							me = this.b.collectNodesFromOwner(ue),
							ve = this.d.collectNodesFromOwner(ue);
						return fe.concat(me).concat(ve);
					}
					collectNodesPostOrder() {
						const ue = this.a.collectNodesPostOrder(),
							fe = this.b.collectNodesPostOrder(),
							me = this.d.collectNodesPostOrder();
						return ue.concat(fe).concat(me);
					}
					insert(ue) {
						ie(ue)
							? this.d.insert(ue)
							: X(ue)
								? this.b.insert(ue)
								: this.a.insert(ue);
					}
					delete(ue) {
						ie(ue)
							? this.d.delete(ue)
							: X(ue)
								? this.b.delete(ue)
								: this.a.delete(ue);
					}
					getNodeRange(ue, fe) {
						const me = ue.getVersionId();
						return (
							fe.cachedVersionId !== me && this.k(fe, me),
							fe.range === null &&
								(fe.range = ue.getRangeAt(
									fe.cachedAbsoluteStart,
									fe.cachedAbsoluteEnd,
								)),
							fe.range
						);
					}
					k(ue, fe) {
						ie(ue)
							? this.d.resolveNode(ue, fe)
							: X(ue)
								? this.b.resolveNode(ue, fe)
								: this.a.resolveNode(ue, fe);
					}
					acceptReplace(ue, fe, me, ve) {
						this.a.acceptReplace(ue, fe, me, ve),
							this.b.acceptReplace(ue, fe, me, ve),
							this.d.acceptReplace(ue, fe, me, ve);
					}
				}
				function ee(ye) {
					return ye.replace(/[^a-z0-9\-_]/gi, " ");
				}
				class _ {
					constructor(ue) {
						(this.color = ue.color || ""),
							(this.darkColor = ue.darkColor || "");
					}
				}
				class te extends _ {
					constructor(ue) {
						super(ue),
							(this.a = null),
							(this.position =
								typeof ue.position == "number"
									? ue.position
									: b.OverviewRulerLane.Center);
					}
					getColor(ue) {
						return (
							this.a ||
								(ue.type !== "light" && this.darkColor
									? (this.a = this.b(this.darkColor, ue))
									: (this.a = this.b(this.color, ue))),
							this.a
						);
					}
					invalidateCachedColor() {
						this.a = null;
					}
					b(ue, fe) {
						if (typeof ue == "string") return ue;
						const me = ue ? fe.getColor(ue.id) : null;
						return me ? me.toString() : "";
					}
				}
				e.$aY = te;
				class Q {
					constructor(ue) {
						(this.position = ue?.position ?? b.GlyphMarginLane.Center),
							(this.persistLane = ue?.persistLane);
					}
				}
				e.$bY = Q;
				class Z extends _ {
					constructor(ue) {
						super(ue),
							(this.position = ue.position),
							(this.sectionHeaderStyle = ue.sectionHeaderStyle ?? null),
							(this.sectionHeaderText = ue.sectionHeaderText ?? null);
					}
					getColor(ue) {
						return (
							this.a ||
								(ue.type !== "light" && this.darkColor
									? (this.a = this.b(this.darkColor, ue))
									: (this.a = this.b(this.color, ue))),
							this.a
						);
					}
					invalidateCachedColor() {
						this.a = void 0;
					}
					b(ue, fe) {
						return typeof ue == "string"
							? i.$UL.fromHex(ue)
							: fe.getColor(ue.id);
					}
				}
				e.$cY = Z;
				class se {
					static from(ue) {
						return ue instanceof se ? ue : new se(ue);
					}
					constructor(ue) {
						(this.content = ue.content || ""),
							(this.inlineClassName = ue.inlineClassName || null),
							(this.inlineClassNameAffectsLetterSpacing =
								ue.inlineClassNameAffectsLetterSpacing || !1),
							(this.attachedData = ue.attachedData || null),
							(this.cursorStops = ue.cursorStops || null);
					}
				}
				e.$dY = se;
				class re {
					static register(ue) {
						return new re(ue);
					}
					static createDynamic(ue) {
						return new re(ue);
					}
					constructor(ue) {
						(this.description = ue.description),
							(this.blockClassName = ue.blockClassName
								? ee(ue.blockClassName)
								: null),
							(this.blockDoesNotCollapse = ue.blockDoesNotCollapse ?? null),
							(this.blockIsAfterEnd = ue.blockIsAfterEnd ?? null),
							(this.blockPadding = ue.blockPadding ?? null),
							(this.stickiness =
								ue.stickiness ||
								b.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges),
							(this.zIndex = ue.zIndex || 0),
							(this.className = ue.className ? ee(ue.className) : null),
							(this.shouldFillLineOnLineBreak =
								ue.shouldFillLineOnLineBreak ?? null),
							(this.hoverMessage = ue.hoverMessage || null),
							(this.glyphMarginHoverMessage =
								ue.glyphMarginHoverMessage || null),
							(this.lineNumberHoverMessage = ue.lineNumberHoverMessage || null),
							(this.isWholeLine = ue.isWholeLine || !1),
							(this.showIfCollapsed = ue.showIfCollapsed || !1),
							(this.collapseOnReplaceEdit = ue.collapseOnReplaceEdit || !1),
							(this.overviewRuler = ue.overviewRuler
								? new te(ue.overviewRuler)
								: null),
							(this.minimap = ue.minimap ? new Z(ue.minimap) : null),
							(this.glyphMargin = ue.glyphMarginClassName
								? new Q(ue.glyphMargin)
								: null),
							(this.glyphMarginClassName = ue.glyphMarginClassName
								? ee(ue.glyphMarginClassName)
								: null),
							(this.linesDecorationsClassName = ue.linesDecorationsClassName
								? ee(ue.linesDecorationsClassName)
								: null),
							(this.lineNumberClassName = ue.lineNumberClassName
								? ee(ue.lineNumberClassName)
								: null),
							(this.linesDecorationsTooltip = ue.linesDecorationsTooltip
								? m.$mf(ue.linesDecorationsTooltip)
								: null),
							(this.firstLineDecorationClassName =
								ue.firstLineDecorationClassName
									? ee(ue.firstLineDecorationClassName)
									: null),
							(this.marginClassName = ue.marginClassName
								? ee(ue.marginClassName)
								: null),
							(this.inlineClassName = ue.inlineClassName
								? ee(ue.inlineClassName)
								: null),
							(this.inlineClassNameAffectsLetterSpacing =
								ue.inlineClassNameAffectsLetterSpacing || !1),
							(this.beforeContentClassName = ue.beforeContentClassName
								? ee(ue.beforeContentClassName)
								: null),
							(this.afterContentClassName = ue.afterContentClassName
								? ee(ue.afterContentClassName)
								: null),
							(this.after = ue.after ? se.from(ue.after) : null),
							(this.before = ue.before ? se.from(ue.before) : null),
							(this.hideInCommentTokens = ue.hideInCommentTokens ?? !1),
							(this.hideInStringTokens = ue.hideInStringTokens ?? !1);
					}
				}
				(e.$eY = re), (re.EMPTY = re.register({ description: "empty" }));
				const le = [
					re.register({
						description: "tracked-range-always-grows-when-typing-at-edges",
						stickiness: b.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
					}),
					re.register({
						description: "tracked-range-never-grows-when-typing-at-edges",
						stickiness: b.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
					}),
					re.register({
						description: "tracked-range-grows-only-when-typing-before",
						stickiness: b.TrackedRangeStickiness.GrowsOnlyWhenTypingBefore,
					}),
					re.register({
						description: "tracked-range-grows-only-when-typing-after",
						stickiness: b.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter,
					}),
				];
				function oe(ye) {
					return ye instanceof re ? ye : re.createDynamic(ye);
				}
				class ae extends C.$1c {
					constructor(ue) {
						super(),
							(this.u = ue),
							(this.a = this.D(new E.$re())),
							(this.event = this.a.event),
							(this.n = null),
							(this.b = 0),
							(this.f = !1),
							(this.g = !1),
							(this.h = !1),
							(this.q = !1),
							(this.s = !1);
					}
					hasListeners() {
						return this.a.hasListeners();
					}
					beginDeferredEmit() {
						this.b++;
					}
					endDeferredEmit() {
						this.b--,
							this.b === 0 &&
								(this.f && this.y(), this.n?.clear(), (this.n = null));
					}
					recordLineAffectedByInjectedText(ue) {
						this.n || (this.n = new Set()), this.n.add(ue);
					}
					checkAffectedAndFire(ue) {
						(this.g ||= !!ue.minimap?.position),
							(this.h ||= !!ue.overviewRuler?.color),
							(this.q ||= !!ue.glyphMarginClassName),
							(this.s ||= !!ue.lineNumberClassName),
							this.w();
					}
					fire() {
						(this.g = !0), (this.h = !0), (this.q = !0), this.w();
					}
					w() {
						this.b === 0 ? this.y() : (this.f = !0);
					}
					y() {
						this.u(this.n);
						const ue = {
							affectsMinimap: this.g,
							affectsOverviewRuler: this.h,
							affectsGlyphMargin: this.q,
							affectsLineNumber: this.s,
						};
						(this.f = !1),
							(this.g = !1),
							(this.h = !1),
							(this.q = !1),
							this.a.fire(ue);
					}
				}
				class pe extends C.$1c {
					constructor() {
						super(),
							(this.a = this.D(new E.$re())),
							(this.fastEvent = this.a.event),
							(this.b = this.D(new E.$re())),
							(this.slowEvent = this.b.event),
							(this.f = 0),
							(this.g = null);
					}
					hasListeners() {
						return this.a.hasListeners() || this.b.hasListeners();
					}
					beginDeferredEmit() {
						this.f++;
					}
					endDeferredEmit(ue = null) {
						if ((this.f--, this.f === 0 && this.g !== null)) {
							this.g.rawContentChangedEvent.resultingSelection = ue;
							const fe = this.g;
							(this.g = null), this.a.fire(fe), this.b.fire(fe);
						}
					}
					fire(ue) {
						if (this.f > 0) {
							this.g ? (this.g = this.g.merge(ue)) : (this.g = ue);
							return;
						}
						this.a.fire(ue), this.b.fire(ue);
					}
				}
				class $e {
					constructor(ue) {
						this.a = ue;
					}
				}
				e.$fY = $e;
			},
		)
