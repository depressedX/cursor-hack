import '../../../require.js';
import '../../../exports.js';
import './private/assert.js';
import './private/extensions.js';
define(de[1398], he([1, 0, 451, 1087]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getExtension = w),
				(e.setExtension = E),
				(e.clearExtension = C),
				(e.hasExtension = d);
			function w(r, u, a) {
				m(u, r);
				const h = u.runtime.bin.makeReadOptions(a),
					c = (0, i.filterUnknownFields)(
						r.getType().runtime.bin.listUnknownFields(r),
						u.field,
					),
					[n, g] = (0, i.createExtensionContainer)(u);
				for (const p of c)
					u.runtime.bin.readField(
						n,
						h.readerFactory(p.data),
						u.field,
						p.wireType,
						h,
					);
				return g();
			}
			function E(r, u, a, h) {
				m(u, r);
				const c = u.runtime.bin.makeReadOptions(h),
					n = u.runtime.bin.makeWriteOptions(h);
				if (d(r, u)) {
					const f = r
						.getType()
						.runtime.bin.listUnknownFields(r)
						.filter((b) => b.no != u.field.no);
					r.getType().runtime.bin.discardUnknownFields(r);
					for (const b of f)
						r.getType().runtime.bin.onUnknownField(r, b.no, b.wireType, b.data);
				}
				const g = n.writerFactory();
				let p = u.field;
				!p.opt &&
					!p.repeated &&
					(p.kind == "enum" || p.kind == "scalar") &&
					(p = { ...u.field, opt: !0 }),
					u.runtime.bin.writeField(p, a, g, n);
				const o = c.readerFactory(g.finish());
				for (; o.pos < o.len; ) {
					const [f, b] = o.tag(),
						s = o.skip(b, f);
					r.getType().runtime.bin.onUnknownField(r, f, b, s);
				}
			}
			function C(r, u) {
				if ((m(u, r), d(r, u))) {
					const a = r.getType().runtime.bin,
						h = a.listUnknownFields(r).filter((c) => c.no != u.field.no);
					a.discardUnknownFields(r);
					for (const c of h) a.onUnknownField(r, c.no, c.wireType, c.data);
				}
			}
			function d(r, u) {
				const a = r.getType();
				return (
					u.extendee.typeName === a.typeName &&
					!!a.runtime.bin.listUnknownFields(r).find((h) => h.no == u.field.no)
				);
			}
			function m(r, u) {
				(0, t.assert)(
					r.extendee.typeName == u.getType().typeName,
					`extension ${r.typeName} can only be applied to message ${r.extendee.typeName}`,
				);
			}
		}),
		