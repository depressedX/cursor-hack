import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/glob.js';
import '../../../../base/common/iterator.js';
import '../../../../base/common/resources.js';
import './notebookCommon.js';
define(
			de[3505],
			he([1, 0, 215, 103, 19, 70]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tEc = e.$sEc = void 0),
					(t = mt(t));
				class C {
					constructor(u) {
						(this.a = new Set(u)), (this.defined = this.a.size > 0);
					}
					matches(u) {
						return u.some((a) => this.a.has(a));
					}
				}
				class d {
					constructor(u) {
						(this.id = u.id),
							(this.extensionId = u.extension.identifier),
							(this.extensionLocation = u.extension.extensionLocation),
							(this.isBuiltin = u.extension.isBuiltin),
							typeof u.entrypoint == "string"
								? (this.entrypoint = {
										extends: void 0,
										path: (0, w.$nh)(this.extensionLocation, u.entrypoint),
									})
								: (this.entrypoint = {
										extends: u.entrypoint.extends,
										path: (0, w.$nh)(this.extensionLocation, u.entrypoint.path),
									}),
							(this.displayName = u.displayName),
							(this.mimeTypes = u.mimeTypes),
							(this.a = this.mimeTypes.map((a) => t.$Jk(a))),
							(this.hardDependencies = new C(
								u.dependencies ?? i.Iterable.empty(),
							)),
							(this.optionalDependencies = new C(
								u.optionalDependencies ?? i.Iterable.empty(),
							)),
							(this.messaging =
								u.requiresMessaging ?? E.RendererMessagingSpec.Never);
					}
					matchesWithoutKernel(u) {
						return this.b(u)
							? this.hardDependencies.defined
								? E.NotebookRendererMatch.WithHardKernelDependency
								: this.optionalDependencies.defined
									? E.NotebookRendererMatch.WithOptionalKernelDependency
									: E.NotebookRendererMatch.Pure
							: E.NotebookRendererMatch.Never;
					}
					matches(u, a) {
						return this.b(u)
							? this.hardDependencies.defined
								? this.hardDependencies.matches(a)
									? E.NotebookRendererMatch.WithHardKernelDependency
									: E.NotebookRendererMatch.Never
								: this.optionalDependencies.matches(a)
									? E.NotebookRendererMatch.WithOptionalKernelDependency
									: E.NotebookRendererMatch.Pure
							: E.NotebookRendererMatch.Never;
					}
					b(u) {
						return this.entrypoint.extends
							? !1
							: this.a.some((a) => a(u)) || this.mimeTypes.some((a) => a === u);
					}
				}
				e.$sEc = d;
				class m {
					constructor(u) {
						(this.type = u.type),
							(this.entrypoint = (0, w.$nh)(
								u.extension.extensionLocation,
								u.entrypoint,
							)),
							(this.extensionLocation = u.extension.extensionLocation),
							(this.localResourceRoots = u.localResourceRoots.map((a) =>
								(0, w.$nh)(u.extension.extensionLocation, a),
							));
					}
				}
				e.$tEc = m;
			},
		),
		