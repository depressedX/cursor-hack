import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../nls.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../platform/workspace/common/workspaceTrust.js';
import '../viewParts/notebookKernelQuickPickStrategy.js';
import '../../common/notebookCommon.js';
import '../../common/notebookExecutionStateService.js';
import '../../common/notebookKernelService.js';
import '../../common/notebookLoggingService.js';
define(
			de[3531],
			he([1, 0, 3, 4, 31, 174, 1308, 70, 190, 243, 557]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$LGc = void 0),
					(i = mt(i));
				let a = class {
					constructor(c, n, g, p, o, f) {
						(this.b = c),
							(this.d = n),
							(this.e = g),
							(this.f = p),
							(this.g = o),
							(this.h = f),
							(this.i = new Set());
					}
					async executeNotebookCells(c, n, g) {
						const p = Array.from(n).filter(
							(y) => y.cellKind === d.CellKind.Code,
						);
						if (!p.length) return;
						this.g.debug(
							"Execution",
							`${JSON.stringify(p.map((y) => y.handle))}`,
						);
						const o = i.localize(8177, null);
						if (!(await this.f.requestWorkspaceTrust({ message: o }))) return;
						const b = [];
						for (const y of p)
							this.h.getCellExecution(y.uri) ||
								b.push([y, this.h.createCellExecution(c.uri, y.handle)]);
						const s = await C.$b4b.resolveKernel(c, this.d, this.e, this.b);
						if (!s) {
							b.forEach((y) => y[1].complete({}));
							return;
						}
						this.e.addMostRecentKernel(s);
						const l = [];
						for (const [y, $] of b)
							s.supportedLanguages.includes(y.language)
								? l.push($)
								: $.complete({});
						if (l.length > 0) {
							await this.j(l),
								this.d.selectKernelForNotebook(s, c),
								await s.executeNotebookCellsRequest(
									c.uri,
									l.map(($) => $.cellHandle),
								);
							const y = l.filter(
								($) => $.state === d.NotebookCellExecutionState.Unconfirmed,
							);
							y.length &&
								(this.g.debug(
									"Execution",
									`Completing unconfirmed executions ${JSON.stringify(y.map(($) => $.cellHandle))}`,
								),
								y.forEach(($) => $.complete({}))),
								this.g.debug(
									"Execution",
									`Completed executions ${JSON.stringify(l.map(($) => $.cellHandle))}`,
								);
						}
					}
					async cancelNotebookCellHandles(c, n) {
						const g = Array.from(n);
						this.g.debug(
							"Execution",
							`CancelNotebookCellHandles ${JSON.stringify(g)}`,
						);
						const p = this.d.getSelectedOrSuggestedKernel(c);
						p && (await p.cancelNotebookCellExecution(c.uri, g));
					}
					async cancelNotebookCells(c, n) {
						this.cancelNotebookCellHandles(
							c,
							Array.from(n, (g) => g.handle),
						);
					}
					registerExecutionParticipant(c) {
						return this.i.add(c), (0, t.$Yc)(() => this.i.delete(c));
					}
					async j(c) {
						for (const n of this.i) await n.onWillExecuteCell(c);
					}
					dispose() {
						this.a?.dispose(!0);
					}
				};
				(e.$LGc = a),
					(e.$LGc = a =
						Ne(
							[
								j(0, w.$ek),
								j(1, r.$f6),
								j(2, r.$g6),
								j(3, E.$qO),
								j(4, u.$P2b),
								j(5, m.$d6),
							],
							a,
						));
			},
		),
		