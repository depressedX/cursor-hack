import '../../../../require.js';
import '../../../../exports.js';
import '../editor.js';
import './resourceEditorInput.js';
import '../../services/textfile/common/textfiles.js';
import '../../services/editor/common/editorService.js';
import '../../../platform/files/common/files.js';
import '../../../platform/label/common/label.js';
import '../../../base/common/network.js';
import '../../../base/common/resources.js';
import '../../../editor/common/services/resolverService.js';
import './textResourceEditorModel.js';
import '../../../editor/common/model/textModel.js';
import '../../services/filesConfiguration/common/filesConfigurationService.js';
import '../../../editor/common/services/textResourceConfiguration.js';
import '../../services/editor/common/customEditorLabelService.js';
define(
			de[478],
			he([
				1, 0, 44, 1296, 85, 18, 22, 73, 23, 19, 42, 1827, 122, 170, 125, 399,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				var p;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$S1b = e.$R1b = void 0);
				let o = class extends i.$RIb {
					constructor(s, l, y, $, v, S, I, T, P) {
						super(s, l, v, S, I, T, P), (this.Q = y), (this.R = $);
					}
					save(s, l) {
						return this.resource.scheme !== m.Schemas.untitled &&
							!this.m.hasProvider(this.resource)
							? this.saveAs(s, l)
							: this.S(l, !1, s);
					}
					saveAs(s, l) {
						return this.S(l, !0, s);
					}
					async S(s, l, y) {
						let $;
						if (
							(l
								? ($ = await this.R.saveAs(this.resource, void 0, {
										...s,
										suggestedTarget: this.preferredResource,
									}))
								: ($ = await this.R.save(this.resource, s)),
							!!$)
						)
							return { resource: $ };
					}
					async revert(s, l) {
						await this.R.revert(this.resource, l);
					}
				};
				(e.$R1b = o),
					(e.$R1b = o =
						Ne(
							[
								j(2, E.$IY),
								j(3, w.$kZ),
								j(4, d.$3N),
								j(5, C.$ll),
								j(6, c.$_Y),
								j(7, n.$XO),
								j(8, g.$QIb),
							],
							o,
						));
				let f = class extends o {
					static {
						p = this;
					}
					static {
						this.ID = "workbench.editors.resourceEditorInput";
					}
					get typeId() {
						return p.ID;
					}
					get editorId() {
						return t.$b1.id;
					}
					constructor(s, l, y, $, v, S, I, T, P, k, L, D, M) {
						super(s, void 0, T, I, k, P, L, D, M),
							(this.X = l),
							(this.Y = y),
							(this.Z = $),
							(this.$ = v),
							(this.ab = S),
							(this.U = void 0),
							(this.W = void 0);
					}
					getName() {
						return this.X || super.getName();
					}
					setName(s) {
						this.X !== s && ((this.X = s), this.f.fire());
					}
					getDescription() {
						return this.Y;
					}
					setDescription(s) {
						this.Y !== s && ((this.Y = s), this.f.fire());
					}
					setLanguageId(s, l) {
						this.setPreferredLanguageId(s), this.U?.setLanguageId(s, l);
					}
					setPreferredLanguageId(s) {
						this.Z = s;
					}
					setPreferredContents(s) {
						this.$ = s;
					}
					async resolve() {
						const s = this.$,
							l = this.Z;
						(this.$ = void 0),
							(this.Z = void 0),
							this.W || (this.W = this.ab.createModelReference(this.resource));
						const y = await this.W,
							$ = y.object;
						if (!($ instanceof a.$Q1b))
							throw (
								(y.dispose(),
								(this.W = void 0),
								new Error(
									`Unexpected model for TextResourceEditorInput: ${this.resource}`,
								))
							);
						return (
							(this.U = $),
							(typeof s == "string" || typeof l == "string") &&
								$.updateTextEditorModel(
									typeof s == "string" ? (0, h.$7X)(s) : void 0,
									l,
								),
							$
						);
					}
					matches(s) {
						return this === s
							? !0
							: s instanceof p
								? (0, r.$gh)(s.resource, this.resource)
								: (0, t.$i1)(s)
									? super.matches(s)
									: !1;
					}
					dispose() {
						this.W && (this.W.then((s) => s.dispose()), (this.W = void 0)),
							(this.U = void 0),
							super.dispose();
					}
				};
				(e.$S1b = f),
					(e.$S1b =
						f =
						p =
							Ne(
								[
									j(5, u.$MO),
									j(6, w.$kZ),
									j(7, E.$IY),
									j(8, C.$ll),
									j(9, d.$3N),
									j(10, c.$_Y),
									j(11, n.$XO),
									j(12, g.$QIb),
								],
								f,
							));
			},
		),
		