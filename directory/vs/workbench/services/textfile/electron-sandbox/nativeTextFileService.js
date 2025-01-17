import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../browser/textFileService.js';
import '../common/textfiles.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/files/common/files.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../untitled/common/untitledTextEditorService.js';
import '../../lifecycle/common/lifecycle.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../editor/common/services/model.js';
import '../../environment/electron-sandbox/environmentService.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../filesConfiguration/common/filesConfigurationService.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../path/common/pathService.js';
import '../../workingCopy/common/workingCopyFileService.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../editor/common/languages/language.js';
import '../../files/common/elevatedFileService.js';
import '../../../../platform/log/common/log.js';
import '../../../../base/common/async.js';
import '../../decorations/common/decorations.js';
define(
			de[3907],
			he([
				1, 0, 4, 3906, 85, 20, 22, 125, 631, 52, 5, 67, 151, 57, 170, 65, 165,
				336, 68, 61, 700, 34, 15, 472,
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
				l,
				y,
				$,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$odd = void 0);
				let v = class extends i.$s4c {
					constructor(I, T, P, k, L, D, M, N, A, R, O, B, U, z, F, x, H, q) {
						super(I, T, P, k, L, D, M, N, A, R, O, B, U, z, F, H, x, q),
							(this.n = D),
							this.U();
					}
					U() {
						this.D(
							this.h.onWillShutdown((I) =>
								I.join(this.W(), {
									id: "join.textFiles",
									label: (0, t.localize)(12677, null),
								}),
							),
						);
					}
					async W() {
						let I;
						for (
							;
							(I = this.files.models.filter((T) =>
								T.hasState(w.TextFileEditorModelState.PENDING_SAVE),
							)).length > 0;
						)
							await y.Promises.settled(
								I.map((T) =>
									T.joinState(w.TextFileEditorModelState.PENDING_SAVE),
								),
							);
					}
					async read(I, T) {
						return (T = this.X(T)), super.read(I, T);
					}
					async readStream(I, T) {
						return (T = this.X(T)), super.readStream(I, T);
					}
					X(I) {
						let T;
						I ? (T = I) : (T = Object.create(null));
						let P;
						return (
							T.limits
								? (P = T.limits)
								: ((P = Object.create(null)), (T = { ...T, limits: P })),
							T
						);
					}
				};
				(e.$odd = v),
					(e.$odd = v =
						Ne(
							[
								j(0, C.$ll),
								j(1, m.$7Y),
								j(2, r.$n6),
								j(3, u.$Li),
								j(4, a.$QO),
								j(5, h.$ucd),
								j(6, c.$GO),
								j(7, c.$IO),
								j(8, d.$XO),
								j(9, n.$_Y),
								j(10, g.$dtb),
								j(11, p.$I8),
								j(12, o.$iZ),
								j(13, f.$Vl),
								j(14, b.$nM),
								j(15, s.$dZ),
								j(16, l.$ik),
								j(17, $.$sPb),
							],
							v,
						)),
					(0, E.$lK)(w.$kZ, v, E.InstantiationType.Eager);
			},
		),
		