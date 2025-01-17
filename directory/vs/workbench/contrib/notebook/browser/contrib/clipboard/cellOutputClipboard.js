import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../common/notebookCommon.js';
define(de[1837], he([1, 0, 70]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$W3b = void 0),
				(e.$V3b = i);
			async function i(w, E, C, d) {
				const m = E.model,
					r =
						w && e.$W3b.includes(w)
							? m.outputs.find((h) => h.mime === w)
							: m.outputs.find((h) => e.$W3b.includes(h.mime));
				if (((w = r?.mime), !w || !r)) return;
				const u = new TextDecoder();
				let a = u.decode(r.data.buffer);
				if ((0, t.$76)(w)) {
					const h = E.cellViewModel;
					let c = h.outputsViewModels.indexOf(E) + 1;
					for (; c < h.model.outputs.length; ) {
						const g = h.model.outputs[c].outputs.find((p) =>
							(0, t.$76)(p.mime),
						);
						if (!g) break;
						(a = a + u.decode(g.data.buffer)), (c = c + 1);
					}
				}
				w.endsWith("error") &&
					(a = a.replace(/\\u001b\[[0-9;]*m/gi, "").replaceAll(
						"\\n",
						`
`,
					));
				try {
					await C.writeText(a);
				} catch (h) {
					d.error(`Failed to copy content: ${h}`);
				}
			}
			e.$W3b = [
				"text/latex",
				"text/html",
				"application/vnd.code.notebook.error",
				"application/vnd.code.notebook.stdout",
				"application/x.notebook.stdout",
				"application/x.notebook.stream",
				"application/vnd.code.notebook.stderr",
				"application/x.notebook.stderr",
				"text/plain",
				"text/markdown",
				"application/json",
			];
		}),
		