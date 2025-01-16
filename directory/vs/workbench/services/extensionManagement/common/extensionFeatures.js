define(de[244], he([1, 0, 5, 30]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$$Sb = e.Extensions = void 0);
			var w;
			(function (C) {
				C.ExtensionFeaturesRegistry = "workbench.registry.extensionFeatures";
			})(w || (e.Extensions = w = {})),
				(e.$$Sb = (0, t.$Mi)("IExtensionFeaturesManagementService"));
			class E {
				constructor() {
					this.a = new Map();
				}
				registerExtensionFeature(d) {
					if (this.a.has(d.id))
						throw new Error(
							`Extension feature with id '${d.id}' already exists`,
						);
					return this.a.set(d.id, d), { dispose: () => this.a.delete(d.id) };
				}
				getExtensionFeature(d) {
					return this.a.get(d);
				}
				getExtensionFeatures() {
					return Array.from(this.a.values());
				}
			}
			i.$Io.add(w.ExtensionFeaturesRegistry, new E());
		}),
		