import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../common/editor.js';
import '../../../../common/editor/textResourceEditorInput.js';
import '../../../../common/editor/binaryEditorModel.js';
import '../../../../../platform/files/common/files.js';
import '../../../../services/textfile/common/textfiles.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../common/files.js';
import '../../../../../platform/label/common/label.js';
import '../../../../services/filesConfiguration/common/filesConfigurationService.js';
import '../../../../services/editor/common/editorService.js';
import '../../../../../base/common/resources.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/network.js';
import '../../../../../editor/common/model/textModel.js';
import '../../../../services/path/common/pathService.js';
import '../../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../services/editor/common/customEditorLabelService.js';
define(
			de[844],
			he([
				1, 0, 44, 478, 1225, 22, 85, 5, 3, 42, 220, 73, 170, 18, 19, 6, 23, 122,
				165, 125, 399,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
			) {
				"use strict";
				var l;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nec = void 0);
				var y;
				(function (v) {
					(v[(v.None = 0)] = "None"),
						(v[(v.Text = 1)] = "Text"),
						(v[(v.Binary = 2)] = "Binary");
				})(y || (y = {}));
				let $ = (l = class extends i.$R1b {
					get typeId() {
						return u.$QUb;
					}
					get editorId() {
						return t.$b1.id;
					}
					get capabilities() {
						let S = t.EditorInputCapabilities.CanSplitInGroup;
						return (
							this.$
								? this.$.isReadonly() &&
									(S |= t.EditorInputCapabilities.Readonly)
								: this.m.hasProvider(this.resource)
									? this.n.isReadonly(this.resource) &&
										(S |= t.EditorInputCapabilities.Readonly)
									: (S |= t.EditorInputCapabilities.Untitled),
							S & t.EditorInputCapabilities.Readonly ||
								(S |= t.EditorInputCapabilities.CanDropIntoEditor),
							S
						);
					}
					constructor(S, I, T, P, k, L, D, M, N, A, R, O, B, U, z, F, x) {
						super(S, I, U, N, R, O, B, F, x),
							(this.cb = M),
							(this.db = A),
							(this.eb = z),
							(this.Z = y.None),
							(this.$ = void 0),
							(this.ab = void 0),
							(this.bb = this.D(new m.$Zc())),
							(this.$ = this.R.files.get(S)),
							T && this.setPreferredName(T),
							P && this.setPreferredDescription(P),
							k && this.setPreferredEncoding(k),
							L && this.setPreferredLanguageId(L),
							typeof D == "string" && this.setPreferredContents(D),
							this.D(this.R.files.onDidCreate((H) => this.fb(H))),
							this.$ && this.gb(this.$);
					}
					fb(S) {
						(0, n.$gh)(S.resource, this.resource) && ((this.$ = S), this.gb(S));
					}
					gb(S) {
						this.bb.clear(),
							this.bb.add(S.onDidChangeDirty(() => this.b.fire())),
							this.bb.add(S.onDidChangeReadonly(() => this.g.fire())),
							this.bb.add(S.onDidSaveError(() => this.b.fire())),
							this.bb.add(
								g.Event.once(S.onWillDispose)(() => {
									this.bb.clear(), (this.$ = void 0);
								}),
							);
					}
					getName() {
						return this.c || super.getName();
					}
					setPreferredName(S) {
						this.hb() && this.c !== S && ((this.c = S), this.f.fire());
					}
					hb() {
						return (
							this.resource.scheme !== this.eb.defaultUriScheme &&
							this.resource.scheme !== p.Schemas.vscodeUserData &&
							this.resource.scheme !== p.Schemas.file &&
							this.resource.scheme !== p.Schemas.vscodeRemote
						);
					}
					getPreferredName() {
						return this.c;
					}
					isReadonly() {
						return this.$
							? this.$.isReadonly()
							: this.n.isReadonly(this.resource);
					}
					getDescription(S) {
						return this.U || super.getDescription(S);
					}
					setPreferredDescription(S) {
						this.hb() && this.U !== S && ((this.U = S), this.f.fire());
					}
					getPreferredDescription() {
						return this.U;
					}
					getTitle(S) {
						let I = super.getTitle(S);
						const T = this.ib();
						return T && (I = `${T} (${I})`), I;
					}
					ib() {
						if (this.c && this.U) return `${this.c} ${this.U}`;
						if (this.c || this.U) return this.c ?? this.U;
					}
					getEncoding() {
						return this.$ ? this.$.getEncoding() : this.W;
					}
					getPreferredEncoding() {
						return this.W;
					}
					async setEncoding(S, I) {
						return this.setPreferredEncoding(S), this.$?.setEncoding(S, I);
					}
					setPreferredEncoding(S) {
						(this.W = S), this.setForceOpenAsText();
					}
					getLanguageId() {
						return this.$ ? this.$.getLanguageId() : this.X;
					}
					getPreferredLanguageId() {
						return this.X;
					}
					setLanguageId(S, I) {
						this.setPreferredLanguageId(S), this.$?.setLanguageId(S, I);
					}
					setPreferredLanguageId(S) {
						(this.X = S), this.setForceOpenAsText();
					}
					setPreferredContents(S) {
						(this.Y = S), this.setForceOpenAsText();
					}
					setForceOpenAsText() {
						this.Z = y.Text;
					}
					setForceOpenAsBinary() {
						this.Z = y.Binary;
					}
					isDirty() {
						return !!this.$?.isDirty();
					}
					isSaving() {
						return this.$?.hasState(C.TextFileEditorModelState.SAVED) ||
							this.$?.hasState(C.TextFileEditorModelState.CONFLICT) ||
							this.$?.hasState(C.TextFileEditorModelState.ERROR)
							? !1
							: this.n.hasShortAutoSaveDelay(this)
								? !0
								: super.isSaving();
					}
					prefersEditorPane(S) {
						return this.Z === y.Binary
							? S.find((I) => I.typeId === u.$RUb)
							: S.find((I) => I.typeId === u.$PUb);
					}
					resolve(S) {
						return this.Z === y.Binary ? this.kb() : this.jb(S);
					}
					async jb(S) {
						try {
							const I = this.Y;
							(this.Y = void 0),
								await this.R.files.resolve(this.resource, {
									languageId: this.X,
									encoding: this.W,
									contents: typeof I == "string" ? (0, o.$7X)(I) : void 0,
									reload: { async: !0 },
									allowBinary: this.Z === y.Text,
									reason: C.TextFileResolveReason.EDITOR,
									limits: this.P(S),
								}),
								this.ab ||
									(this.ab = await this.db.createModelReference(this.resource));
							const T = this.ab.object;
							return this.isDisposed() && this.lb(), T;
						} catch (I) {
							if (
								I.textFileOperationResult ===
								C.TextFileOperationResult.FILE_IS_BINARY
							)
								return this.kb();
							throw I;
						}
					}
					async kb() {
						const S = this.cb.createInstance(
							w.$mec,
							this.preferredResource,
							this.getName(),
						);
						return await S.resolve(), S;
					}
					isResolved() {
						return !!this.$;
					}
					async rename(S, I) {
						return {
							editor: {
								resource: I,
								encoding: this.getEncoding(),
								options: { viewState: (0, t.$h1)(this, S, this.Q) },
							},
						};
					}
					toUntyped(S) {
						const I = {
							resource: this.preferredResource,
							forceFile: !0,
							options: { override: this.editorId },
						};
						return (
							typeof S?.preserveViewState == "number" &&
								((I.encoding = this.getEncoding()),
								(I.languageId = this.getLanguageId()),
								(I.contents = (() => {
									const T = this.R.files.get(this.resource);
									if (
										T?.isDirty() &&
										!T.textEditorModel.isTooLargeForHeapOperation()
									)
										return T.textEditorModel.getValue();
								})()),
								(I.options = {
									...I.options,
									viewState: (0, t.$h1)(this, S.preserveViewState, this.Q),
								})),
							I
						);
					}
					matches(S) {
						return this === S
							? !0
							: S instanceof l
								? (0, n.$gh)(S.resource, this.resource)
								: (0, t.$i1)(S)
									? super.matches(S)
									: !1;
					}
					dispose() {
						(this.$ = void 0), this.lb(), super.dispose();
					}
					lb() {
						(0, m.$Vc)(this.ab), (this.ab = void 0);
					}
				});
				(e.$nec = $),
					(e.$nec =
						$ =
						l =
							Ne(
								[
									j(7, d.$Li),
									j(8, C.$kZ),
									j(9, r.$MO),
									j(10, a.$3N),
									j(11, E.$ll),
									j(12, h.$_Y),
									j(13, c.$IY),
									j(14, f.$I8),
									j(15, b.$XO),
									j(16, s.$QIb),
								],
								$,
							));
			},
		),
		