import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/editor.js';
import '../../../common/editor/textResourceEditorInput.js';
import '../../textfile/common/textfiles.js';
import '../../../../platform/label/common/label.js';
import '../../editor/common/editorService.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/resources.js';
import '../../environment/common/environmentService.js';
import '../../path/common/pathService.js';
import '../../filesConfiguration/common/filesConfigurationService.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../editor/common/customEditorLabelService.js';
define(
			de[628],
			he([1, 0, 44, 478, 85, 73, 18, 22, 19, 78, 165, 170, 42, 3, 125, 399]),
			function (ce /*require*/,
 e /*exports*/,
 t /*editor*/,
 i /*textResourceEditorInput*/,
 w /*textfiles*/,
 E /*label*/,
 C /*editorService*/,
 d /*files*/,
 m /*resources*/,
 r /*environmentService*/,
 u /*pathService*/,
 a /*filesConfigurationService*/,
 h /*resolverService*/,
 c /*lifecycle*/,
 n /*textResourceConfiguration*/,
 g /*customEditorLabelService*/) {
				"use strict";
				var p;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$T1b = void 0);
				let o = class extends i.$R1b {
					static {
						p = this;
					}
					static {
						this.ID = "workbench.editors.untitledEditorInput";
					}
					get typeId() {
						return p.ID;
					}
					get editorId() {
						return t.$b1.id;
					}
					constructor(b, s, l, y, $, v, S, I, T, P, k) {
						super(b.resource, void 0, y, s, l, $, I, P, k),
							(this.X = b),
							(this.Y = v),
							(this.Z = S),
							(this.$ = T),
							(this.c = void 0),
							(this.U = this.D(new c.$Zc())),
							(this.W = void 0),
							this.ab(b),
							this.D(this.R.untitled.onDidCreate((L) => this.bb(L)));
					}
					ab(b) {
						this.U.clear(),
							this.U.add(b.onDidChangeDirty(() => this.b.fire())),
							this.U.add(b.onDidChangeName(() => this.f.fire())),
							this.U.add(b.onDidRevert(() => this.dispose()));
					}
					bb(b) {
						(0, m.$gh)(b.resource, this.X.resource) &&
							b !== this.X &&
							((this.X = b), this.ab(b));
					}
					getName() {
						return this.X.name;
					}
					getDescription(b = t.Verbosity.MEDIUM) {
						if (!this.X.hasAssociatedFilePath) {
							const s = this.resource.path;
							return s !== this.getName() ? s : void 0;
						}
						return super.getDescription(b);
					}
					getTitle(b) {
						if (!this.X.hasAssociatedFilePath) {
							const s = this.getName(),
								l = this.getDescription();
							return l && l !== s ? `${s} \u2022 ${l}` : s;
						}
						return super.getTitle(b);
					}
					isDirty() {
						return this.X.isDirty();
					}
					getEncoding() {
						return this.X.getEncoding();
					}
					setEncoding(b, s) {
						return this.X.setEncoding(b);
					}
					get hasLanguageSetExplicitly() {
						return this.X.hasLanguageSetExplicitly;
					}
					get hasAssociatedFilePath() {
						return this.X.hasAssociatedFilePath;
					}
					setLanguageId(b, s) {
						this.X.setLanguageId(b, s);
					}
					getLanguageId() {
						return this.X.getLanguageId();
					}
					async resolve() {
						return (
							this.c ||
								(this.c = (async () => {
									this.W = await this.$.createModelReference(this.resource);
								})()),
							await this.c,
							this.isDisposed() && this.cb(),
							this.X
						);
					}
					toUntyped(b) {
						const s = {
							resource: this.X.hasAssociatedFilePath
								? (0, m.$xh)(
										this.X.resource,
										this.Y.remoteAuthority,
										this.Z.defaultUriScheme,
									)
								: this.resource,
							forceUntitled: !0,
							options: { override: this.editorId },
						};
						return (
							typeof b?.preserveViewState == "number" &&
								((s.encoding = this.getEncoding()),
								(s.languageId = this.getLanguageId()),
								(s.contents = this.X.isModified()
									? this.X.textEditorModel?.getValue()
									: void 0),
								(s.options.viewState = (0, t.$h1)(
									this,
									b.preserveViewState,
									this.Q,
								)),
								typeof s.contents == "string" &&
									!this.X.hasAssociatedFilePath &&
									!b.preserveResource &&
									(s.resource = void 0)),
							s
						);
					}
					matches(b) {
						return this === b
							? !0
							: b instanceof p
								? (0, m.$gh)(b.resource, this.resource)
								: (0, t.$n1)(b)
									? super.matches(b)
									: !1;
					}
					dispose() {
						(this.c = void 0), this.cb(), super.dispose();
					}
					cb() {
						(0, c.$Vc)(this.W), (this.W = void 0);
					}
				};
				(e.$T1b = o),
					(e.$T1b =
						o =
						p =
							Ne(
								[
									j(1, w.$kZ),
									j(2, E.$3N),
									j(3, C.$IY),
									j(4, d.$ll),
									j(5, r.$r8),
									j(6, u.$I8),
									j(7, a.$_Y),
									j(8, h.$MO),
									j(9, n.$XO),
									j(10, g.$QIb),
								],
								o,
							));
			},
		)
