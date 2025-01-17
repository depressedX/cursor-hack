import '../../../../require.js';
import '../../../../exports.js';
import '../google/protobuf/descriptor_pb.js';
import '../proto-base64.js';
define(de[2039], he([1, 0, 724, 1084]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.createFeatureResolver = E);
			function w(d) {
				return t.FeatureSetDefaults.fromBinary(
					i.protoBase64.dec(
						"ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH",
					),
					d,
				);
			}
			function E(d, m, r) {
				const u = m ?? w(r),
					a = u.minimumEdition,
					h = u.maximumEdition;
				if (
					a === void 0 ||
					h === void 0 ||
					u.defaults.some((g) => g.edition === void 0)
				)
					throw new Error("Invalid FeatureSetDefaults");
				if (d < a)
					throw new Error(
						`Edition ${t.Edition[d]} is earlier than the minimum supported edition ${t.Edition[a]}`,
					);
				if (h < d)
					throw new Error(
						`Edition ${t.Edition[d]} is later than the maximum supported edition ${t.Edition[h]}`,
					);
				let c;
				for (const g of u.defaults) {
					const p = g.edition ?? 0;
					if (p > d || (c !== void 0 && c.e > p)) continue;
					let o;
					g.fixedFeatures && g.overridableFeatures
						? ((o = g.fixedFeatures),
							o.fromBinary(g.overridableFeatures.toBinary()))
						: g.fixedFeatures
							? (o = g.fixedFeatures)
							: g.overridableFeatures
								? (o = g.overridableFeatures)
								: (o = new t.FeatureSet()),
						(c = { e: p, f: o });
				}
				if (c === void 0)
					throw new Error(`No valid default found for edition ${t.Edition[d]}`);
				const n = c.f.toBinary(r);
				return (...g) => {
					const p = t.FeatureSet.fromBinary(n, r);
					for (const o of g) o !== void 0 && p.fromBinary(o.toBinary(r), r);
					if (!C(p))
						throw new Error(`Invalid FeatureSet for edition ${t.Edition[d]}`);
					return p;
				};
			}
			function C(d) {
				for (const m of t.FeatureSet.fields.list()) {
					const r = d[m.localName];
					if (r === void 0 || (m.kind == "enum" && r === 0)) return !1;
				}
				return !0;
			}
		}),
		