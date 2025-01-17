import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/interpreter_pb.js';
define(de[1707], he([1, 0, 1115]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$aHb = i),
				(e.$bHb = w),
				(e.$cHb = E),
				(e.$dHb = C),
				(e.$eHb = d);
			function i(m) {
				switch (m) {
					case t.InterpreterTool.PYTHON:
						return "jupyteride";
					case t.InterpreterTool.SHELL:
						return "shellide";
					case t.InterpreterTool.UNSPECIFIED:
						return "jupyteride";
				}
			}
			function w(m) {
				switch (m) {
					case t.InterpreterTool.PYTHON:
						return "python";
					case t.InterpreterTool.SHELL:
						return "shell";
					case t.InterpreterTool.UNSPECIFIED:
						return "python";
				}
			}
			function E(m, r) {
				let u = "";
				const a = /\[\[\[interpreter_result_\d+\]\]\]/g;
				let h,
					c = 0,
					n = 0;
				for (; (h = a.exec(m)) !== null; ) {
					const g = r?.at(n);
					let p = m.substring(c, h.index);
					const o = [...p.matchAll(/```(\w+)\n/g)].pop();
					if (o && o[0] && o.index !== void 0) {
						const f = g?.tool ?? t.InterpreterTool.PYTHON,
							b = i(f),
							s = o.index,
							l = o[0].length;
						p = p.substring(0, s) + "```" + b + p.substring(s + l - 1);
					}
					(u += p), (c = h.index + h[0].length);
				}
				return (u += m.substring(c)), u;
			}
			function C(m) {
				const r = /\[\[\[interpreter_result_\d+\]\]\]/g;
				let u = [],
					a;
				for (; (a = r.exec(m)) !== null; ) u.push(a.index + a[0].length);
				return u.length <= 1 ? "" : m.substring(0, u[u.length - 2]);
			}
			function d(m, r) {
				m = m + "[[[interpreter_result_99]]]";
				const u = /\[\[\[interpreter_result_\d+\]\]\]/g;
				let a = [],
					h;
				for (; (h = u.exec(m)) !== null; ) a.push(h.index + h[0].length);
				return r >= a.length
					? m
					: r <= 0
						? ""
						: m.substring(0, a[r - 1]) +
							`
`;
			}
		}),
		