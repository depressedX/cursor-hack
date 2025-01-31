import '../../../../../require.js';
import '../../../../../exports.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
define(de[2630], he([1, 0, 115, 13]), function (ce /*require*/,
 e /*exports*/,
 t /*api*/,
 i /*solid*/) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.$6mb = void 0),
			(e.$7mb = E);
		function w(C) {
			return (d) => (C(d), () => C(void 0));
		}
		e.$6mb = [
			"id",
			"name",
			"validationState",
			"required",
			"disabled",
			"readOnly",
		];
		function E(C) {
			const d = `form-control-${(0, i.createUniqueId)()}`,
				m = (0, t.$wjb)({ id: d }, C),
				[r, u] = (0, i.createSignal)(),
				[a, h] = (0, i.createSignal)(),
				[c, n] = (0, i.createSignal)(),
				[g, p] = (0, i.createSignal)(),
				o = (l, y, $) => {
					const v = $ != null || r() != null;
					return (
						[$, r(), v && y != null ? l : void 0].filter(Boolean).join(" ") ||
						void 0
					);
				},
				f = (l) => [c(), g(), l].filter(Boolean).join(" ") || void 0,
				b = (0, i.createMemo)(() => ({
					"data-valid":
						(0, t.access)(m.validationState) === "valid" ? "" : void 0,
					"data-invalid":
						(0, t.access)(m.validationState) === "invalid" ? "" : void 0,
					"data-required": (0, t.access)(m.required) ? "" : void 0,
					"data-disabled": (0, t.access)(m.disabled) ? "" : void 0,
					"data-readonly": (0, t.access)(m.readOnly) ? "" : void 0,
				}));
			return {
				formControlContext: {
					name: () => (0, t.access)(m.name) ?? (0, t.access)(m.id),
					dataset: b,
					validationState: () => (0, t.access)(m.validationState),
					isRequired: () => (0, t.access)(m.required),
					isDisabled: () => (0, t.access)(m.disabled),
					isReadOnly: () => (0, t.access)(m.readOnly),
					labelId: r,
					fieldId: a,
					descriptionId: c,
					errorMessageId: g,
					getAriaLabelledBy: o,
					getAriaDescribedBy: f,
					generateId: (0, t.$Ljb)(() => (0, t.access)(m.id)),
					registerLabel: w(u),
					registerField: w(h),
					registerDescription: w(n),
					registerErrorMessage: w(p),
				},
			};
		}
	})
