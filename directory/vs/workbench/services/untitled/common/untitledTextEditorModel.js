import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/editor/textEditorModel.js';
import '../../../../editor/common/languages/language.js';
import '../../../../editor/common/services/model.js';
import '../../../../base/common/event.js';
import '../../workingCopy/common/workingCopyBackup.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../editor/common/model/textModel.js';
import '../../workingCopy/common/workingCopyService.js';
import '../../workingCopy/common/workingCopy.js';
import '../../textfile/common/textfiles.js';
import '../../../../base/common/types.js';
import '../../../../platform/label/common/label.js';
import '../../../../editor/common/core/wordHelper.js';
import '../../editor/common/editorService.js';
import '../../../../base/common/strings.js';
import '../../textfile/common/encoding.js';
import '../../../../base/common/buffer.js';
import '../../languageDetection/common/languageDetectionWorkerService.js';
import '../../../../platform/accessibility/common/accessibility.js';
define(
			de[1339],
			he([
				1, 0, 702, 61, 67, 6, 335, 125, 122, 227, 334, 85, 28, 73, 409, 18, 37,
				842, 76, 474, 91,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*textEditorModel*/,
				i /*language*/,
				w /*model*/,
				E /*event*/,
				C /*workingCopyBackup*/,
				d /*textResourceConfiguration*/,
				m /*textModel*/,
				r /*workingCopyService*/,
				u /*workingCopy*/,
				a /*textfiles*/,
				h /*types*/,
				c /*label*/,
				n /*wordHelper*/,
				g /*editorService*/,
				p /*strings*/,
				o /*encoding*/,
				f /*buffer*/,
				b /*languageDetectionWorkerService*/,
				s /*accessibility*/,
) {
				"use strict";
				var l;
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$6Y = void 0);
				let y = class extends t.$VO {
					static {
						l = this;
					}
					static {
						this.c = 40;
					}
					static {
						this.L = this.c * 10;
					}
					static {
						this.M = "${activeEditorLanguage}";
					}
					get name() {
						return this.U === "content" && !this.hasAssociatedFilePath && this.W
							? this.W
							: this.db.getUriBasenameLabel(this.resource);
					}
					constructor(v, S, I, T, P, k, L, D, M, N, A, R, O, B, U) {
						super(L, k, B, U),
							(this.resource = v),
							(this.hasAssociatedFilePath = S),
							(this.X = I),
							(this.Y = T),
							(this.Z = P),
							(this.$ = D),
							(this.ab = M),
							(this.bb = N),
							(this.cb = A),
							(this.db = R),
							(this.eb = O),
							(this.N = this.D(new E.$re())),
							(this.onDidChangeContent = this.N.event),
							(this.O = this.D(new E.$re())),
							(this.onDidChangeName = this.O.event),
							(this.P = this.D(new E.$re())),
							(this.onDidChangeDirty = this.P.event),
							(this.Q = this.D(new E.$re())),
							(this.onDidChangeEncoding = this.Q.event),
							(this.R = this.D(new E.$re())),
							(this.onDidSave = this.R.event),
							(this.S = this.D(new E.$re())),
							(this.onDidRevert = this.S.event),
							(this.typeId = u.$OO),
							(this.capabilities = u.WorkingCopyCapabilities.Untitled),
							(this.U = "content"),
							(this.W = void 0),
							(this.ib = this.hasAssociatedFilePath || !!this.X),
							(this.kb = !1),
							this.D(this.bb.registerWorkingCopy(this)),
							T && this.setLanguageId(T),
							this.gb(void 0, !1),
							this.fb();
					}
					fb() {
						this.D(this.ab.onDidChangeConfiguration((v) => this.gb(v, !0)));
					}
					gb(v, S) {
						if (!v || v.affectsConfiguration(this.resource, "files.encoding")) {
							const I = this.ab.getValue(this.resource, "files.encoding");
							this.hb !== I &&
								typeof I == "string" &&
								((this.hb = I), S && !this.Z && this.Q.fire());
						}
						if (
							!v ||
							v.affectsConfiguration(
								this.resource,
								"workbench.editor.untitled.labelFormat",
							)
						) {
							const I = this.ab.getValue(
								this.resource,
								"workbench.editor.untitled.labelFormat",
							);
							this.U !== I &&
								(I === "content" || I === "name") &&
								((this.U = I), S && this.O.fire());
						}
					}
					setLanguageId(v, S) {
						const I = v === l.M ? this.eb.activeTextEditorLanguageId : v;
						(this.Y = I), I && super.setLanguageId(I, S);
					}
					getLanguageId() {
						return this.textEditorModel
							? this.textEditorModel.getLanguageId()
							: this.Y;
					}
					getEncoding() {
						return this.Z || this.hb;
					}
					async setEncoding(v) {
						const S = this.getEncoding();
						(this.Z = v), S !== this.Z && this.Q.fire();
					}
					isDirty() {
						return this.ib;
					}
					isModified() {
						return this.isDirty();
					}
					jb(v) {
						this.ib !== v && ((this.ib = v), this.P.fire());
					}
					async save(v) {
						const S = await this.cb.save(this.resource, v);
						return (
							S && this.R.fire({ reason: v?.reason, source: v?.source }), !!S
						);
					}
					async revert() {
						this.kb = !0;
						try {
							this.updateTextEditorModel((0, m.$7X)(""));
						} finally {
							this.kb = !1;
						}
						this.jb(!1), this.S.fire();
					}
					async backup(v) {
						let S;
						return (
							this.isResolved()
								? (S = await this.cb.getEncodedReadable(
										this.resource,
										this.createSnapshot() ?? void 0,
										{ encoding: o.$NY },
									))
								: typeof this.X == "string" &&
									(S = (0, f.$5e)(f.$Te.fromString(this.X))),
							{ content: S }
						);
					}
					async resolve() {
						let v = !1,
							S = !1;
						if (this.textEditorModel)
							this.updateTextEditorModel(void 0, this.Y);
						else {
							let T;
							const P = await this.$.resolve(this);
							P
								? ((T = P.value), (S = !0))
								: (T = (0, f.$8e)(f.$Te.fromString(this.X || "")));
							const k = await (0, m.$8X)(
								await this.cb.getDecodedStream(this.resource, T, {
									encoding: o.$NY,
								}),
							);
							this.G(k, this.resource, this.Y), (v = !0);
						}
						const I = (0, h.$wg)(this.textEditorModel);
						return (
							this.z(I),
							v &&
								((S || this.X) && this.nb(I),
								this.jb(this.hasAssociatedFilePath || !!S || !!this.X),
								(S || this.X) && this.N.fire()),
							super.resolve()
						);
					}
					z(v) {
						this.D(v.onDidChangeContent((S) => this.mb(v, S))),
							this.D(v.onDidChangeLanguage(() => this.gb(void 0, !0))),
							super.z(v);
					}
					mb(v, S) {
						this.kb ||
							(!this.hasAssociatedFilePath &&
							v.getLineCount() === 1 &&
							v.getLineLength(1) === 0
								? this.jb(!1)
								: this.jb(!0)),
							S.changes.some(
								(I) =>
									(I.range.startLineNumber === 1 ||
										I.range.endLineNumber === 1) &&
									I.range.startColumn <= l.L,
							) && this.nb(v),
							this.N.fire(),
							this.C();
					}
					nb(v) {
						if (this.hasAssociatedFilePath) return;
						let S,
							I = v
								.getValueInRange({
									startLineNumber: 1,
									endLineNumber: 1,
									startColumn: 1,
									endColumn: l.L + 1,
								})
								.trim()
								.replace(/\s+/g, " ")
								.replace(/\u202E/g, "");
						(I = I.substr(0, (0, p.$Yf)(I, l.c)[0])),
							I && (0, n.$UK)().exec(I) && (S = I),
							S !== this.W && ((this.W = S), this.O.fire());
					}
					isReadonly() {
						return !1;
					}
				};
				(e.$6Y = y),
					(e.$6Y =
						y =
						l =
							Ne(
								[
									j(5, i.$nM),
									j(6, w.$QO),
									j(7, C.$WO),
									j(8, d.$XO),
									j(9, r.$gY),
									j(10, a.$kZ),
									j(11, c.$3N),
									j(12, g.$IY),
									j(13, b.$RO),
									j(14, s.$XK),
								],
								y,
							));
			},
		),
		