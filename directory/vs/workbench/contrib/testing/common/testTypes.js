import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/uri.js';
import '../../../../editor/common/core/position.js';
import '../../../../editor/common/core/range.js';
import './testId.js';
define(de[185], he([1, 0, 9, 48, 17, 259]), function (ce /*require*/,
 e /*exports*/,
 t /*uri*/,
 i /*position*/,
 w /*range*/,
 E /*testId*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$t4 =
					e.TestsDiffOp =
					e.TestDiffOpType =
					e.IStatementCoverage =
					e.IDeclarationCoverage =
					e.IBranchCoverage =
					e.CoverageDetails =
					e.DetailType =
					e.$s4 =
					e.IFileCoverage =
					e.ICoverageCount =
					e.TestResultItem =
					e.$r4 =
					e.ITestItemUpdate =
					e.InternalTestItem =
					e.TestItemExpandState =
					e.ITestItem =
					e.$q4 =
					e.$p4 =
					e.ITestTaskState =
					e.ITestMessage =
					e.ITestOutputMessage =
					e.$o4 =
					e.ITestErrorMessage =
					e.ITestMessageStackFrame =
					e.TestMessageType =
					e.IRichLocation =
					e.$n4 =
					e.$m4 =
					e.TestRunProfileBitset =
					e.TestControllerCapability =
					e.ExtTestRunProfileKind =
					e.$l4 =
					e.TestResultState =
						void 0);
			var C;
			(function (F) {
				(F[(F.Unset = 0)] = "Unset"),
					(F[(F.Queued = 1)] = "Queued"),
					(F[(F.Running = 2)] = "Running"),
					(F[(F.Passed = 3)] = "Passed"),
					(F[(F.Failed = 4)] = "Failed"),
					(F[(F.Skipped = 5)] = "Skipped"),
					(F[(F.Errored = 6)] = "Errored");
			})(C || (e.TestResultState = C = {})),
				(e.$l4 = {
					[C.Unset]: "unset",
					[C.Queued]: "queued",
					[C.Running]: "running",
					[C.Passed]: "passed",
					[C.Failed]: "failed",
					[C.Skipped]: "skipped",
					[C.Errored]: "errored",
				});
			var d;
			(function (F) {
				(F[(F.Run = 1)] = "Run"),
					(F[(F.Debug = 2)] = "Debug"),
					(F[(F.Coverage = 3)] = "Coverage");
			})(d || (e.ExtTestRunProfileKind = d = {}));
			var m;
			(function (F) {
				(F[(F.Refresh = 2)] = "Refresh"),
					(F[(F.CodeRelatedToTest = 4)] = "CodeRelatedToTest"),
					(F[(F.TestRelatedToCode = 8)] = "TestRelatedToCode");
			})(m || (e.TestControllerCapability = m = {}));
			var r;
			(function (F) {
				(F[(F.Run = 2)] = "Run"),
					(F[(F.Debug = 4)] = "Debug"),
					(F[(F.Coverage = 8)] = "Coverage"),
					(F[(F.HasNonDefaultProfile = 16)] = "HasNonDefaultProfile"),
					(F[(F.HasConfigurable = 32)] = "HasConfigurable"),
					(F[(F.SupportsContinuousRun = 64)] = "SupportsContinuousRun");
			})(r || (e.TestRunProfileBitset = r = {})),
				(e.$m4 = [
					r.Run,
					r.Debug,
					r.Coverage,
					r.HasNonDefaultProfile,
					r.HasConfigurable,
					r.SupportsContinuousRun,
				]);
			const u = (F) => "runId" in F;
			e.$n4 = u;
			var a;
			(function (F) {
				(F.serialize = (x) => ({
					range: x.range.toJSON(),
					uri: x.uri.toJSON(),
				})),
					(F.deserialize = (x, H) => ({
						range: w.$iL.lift(H.range),
						uri: x.asCanonicalUri(t.URI.revive(H.uri)),
					}));
			})(a || (e.IRichLocation = a = {}));
			var h;
			(function (F) {
				(F[(F.Error = 0)] = "Error"), (F[(F.Output = 1)] = "Output");
			})(h || (e.TestMessageType = h = {}));
			var c;
			(function (F) {
				(F.serialize = (x) => ({
					label: x.label,
					uri: x.uri?.toJSON(),
					position: x.position?.toJSON(),
				})),
					(F.deserialize = (x, H) => ({
						label: H.label,
						uri: H.uri ? x.asCanonicalUri(t.URI.revive(H.uri)) : void 0,
						position: H.position ? i.$hL.lift(H.position) : void 0,
					}));
			})(c || (e.ITestMessageStackFrame = c = {}));
			var n;
			(function (F) {
				(F.serialize = (x) => ({
					message: x.message,
					type: h.Error,
					expected: x.expected,
					actual: x.actual,
					contextValue: x.contextValue,
					location: x.location && a.serialize(x.location),
					stackTrace: x.stackTrace?.map(c.serialize),
				})),
					(F.deserialize = (x, H) => ({
						message: H.message,
						type: h.Error,
						expected: H.expected,
						actual: H.actual,
						contextValue: H.contextValue,
						location: H.location && a.deserialize(x, H.location),
						stackTrace:
							H.stackTrace && H.stackTrace.map((q) => c.deserialize(x, q)),
					}));
			})(n || (e.ITestErrorMessage = n = {}));
			const g = (F, x) => `${x ? "s" : "e"}${F}`;
			e.$o4 = g;
			var p;
			(function (F) {
				(F.serialize = (x) => ({
					message: x.message,
					type: h.Output,
					offset: x.offset,
					length: x.length,
					location: x.location && a.serialize(x.location),
				})),
					(F.deserialize = (x, H) => ({
						message: H.message,
						type: h.Output,
						offset: H.offset,
						length: H.length,
						location: H.location && a.deserialize(x, H.location),
					}));
			})(p || (e.ITestOutputMessage = p = {}));
			var o;
			(function (F) {
				(F.serialize = (x) =>
					x.type === h.Error ? n.serialize(x) : p.serialize(x)),
					(F.deserialize = (x, H) =>
						H.type === h.Error ? n.deserialize(x, H) : p.deserialize(x, H)),
					(F.isDiffable = (x) =>
						x.type === h.Error && x.actual !== void 0 && x.expected !== void 0);
			})(o || (e.ITestMessage = o = {}));
			var f;
			(function (F) {
				(F.serializeWithoutMessages = (x) => ({
					state: x.state,
					duration: x.duration,
					messages: [],
				})),
					(F.serialize = (x) => ({
						state: x.state,
						duration: x.duration,
						messages: x.messages.map(o.serialize),
					})),
					(F.deserialize = (x, H) => ({
						state: H.state,
						duration: H.duration,
						messages: H.messages.map((q) => o.deserialize(x, q)),
					}));
			})(f || (e.ITestTaskState = f = {}));
			const b = "\0",
				s = (F, x) => F + b + x;
			e.$p4 = s;
			const l = (F) => {
				const x = F.indexOf(b);
				return { ctrlId: F.slice(0, x), tagId: F.slice(x + 1) };
			};
			e.$q4 = l;
			var y;
			(function (F) {
				(F.serialize = (x) => ({
					extId: x.extId,
					label: x.label,
					tags: x.tags,
					busy: x.busy,
					children: void 0,
					uri: x.uri?.toJSON(),
					range: x.range?.toJSON() || null,
					description: x.description,
					error: x.error,
					sortText: x.sortText,
				})),
					(F.deserialize = (x, H) => ({
						extId: H.extId,
						label: H.label,
						tags: H.tags,
						busy: H.busy,
						children: void 0,
						uri: H.uri ? x.asCanonicalUri(t.URI.revive(H.uri)) : void 0,
						range: H.range ? w.$iL.lift(H.range) : null,
						description: H.description,
						error: H.error,
						sortText: H.sortText,
					}));
			})(y || (e.ITestItem = y = {}));
			var $;
			(function (F) {
				(F[(F.NotExpandable = 0)] = "NotExpandable"),
					(F[(F.Expandable = 1)] = "Expandable"),
					(F[(F.BusyExpanding = 2)] = "BusyExpanding"),
					(F[(F.Expanded = 3)] = "Expanded");
			})($ || (e.TestItemExpandState = $ = {}));
			var v;
			(function (F) {
				(F.serialize = (x) => ({
					expand: x.expand,
					item: y.serialize(x.item),
				})),
					(F.deserialize = (x, H) => ({
						controllerId: E.$k4.root(H.item.extId),
						expand: H.expand,
						item: y.deserialize(x, H.item),
					}));
			})(v || (e.InternalTestItem = v = {}));
			var S;
			(function (F) {
				(F.serialize = (x) => {
					let H;
					return (
						x.item &&
							((H = {}),
							x.item.label !== void 0 && (H.label = x.item.label),
							x.item.tags !== void 0 && (H.tags = x.item.tags),
							x.item.busy !== void 0 && (H.busy = x.item.busy),
							x.item.uri !== void 0 && (H.uri = x.item.uri?.toJSON()),
							x.item.range !== void 0 && (H.range = x.item.range?.toJSON()),
							x.item.description !== void 0 &&
								(H.description = x.item.description),
							x.item.error !== void 0 && (H.error = x.item.error),
							x.item.sortText !== void 0 && (H.sortText = x.item.sortText)),
						{ extId: x.extId, expand: x.expand, item: H }
					);
				}),
					(F.deserialize = (x) => {
						let H;
						return (
							x.item &&
								((H = {}),
								x.item.label !== void 0 && (H.label = x.item.label),
								x.item.tags !== void 0 && (H.tags = x.item.tags),
								x.item.busy !== void 0 && (H.busy = x.item.busy),
								x.item.range !== void 0 &&
									(H.range = x.item.range ? w.$iL.lift(x.item.range) : null),
								x.item.description !== void 0 &&
									(H.description = x.item.description),
								x.item.error !== void 0 && (H.error = x.item.error),
								x.item.sortText !== void 0 && (H.sortText = x.item.sortText)),
							{ extId: x.extId, expand: x.expand, item: H }
						);
					});
			})(S || (e.ITestItemUpdate = S = {}));
			const I = (F, x) => {
				x.expand !== void 0 && (F.expand = x.expand),
					x.item !== void 0 &&
						(F.item = F.item ? Object.assign(F.item, x.item) : x.item);
			};
			e.$r4 = I;
			var T;
			(function (F) {
				(F.serializeWithoutMessages = (x) => ({
					...v.serialize(x),
					ownComputedState: x.ownComputedState,
					computedState: x.computedState,
					tasks: x.tasks.map(f.serializeWithoutMessages),
				})),
					(F.serialize = (x) => ({
						...v.serialize(x),
						ownComputedState: x.ownComputedState,
						computedState: x.computedState,
						tasks: x.tasks.map(f.serialize),
					})),
					(F.deserialize = (x, H) => ({
						...v.deserialize(x, H),
						ownComputedState: H.ownComputedState,
						computedState: H.computedState,
						tasks: H.tasks.map((q) => f.deserialize(x, q)),
						retired: !0,
					}));
			})(T || (e.TestResultItem = T = {}));
			var P;
			(function (F) {
				(F.empty = () => ({ covered: 0, total: 0 })),
					(F.sum = (x, H) => {
						(x.covered += H.covered), (x.total += H.total);
					});
			})(P || (e.ICoverageCount = P = {}));
			var k;
			(function (F) {
				(F.serialize = (x) => ({
					id: x.id,
					statement: x.statement,
					branch: x.branch,
					declaration: x.declaration,
					testIds: x.testIds,
					uri: x.uri.toJSON(),
				})),
					(F.deserialize = (x, H) => ({
						id: H.id,
						statement: H.statement,
						branch: H.branch,
						declaration: H.declaration,
						testIds: H.testIds,
						uri: x.asCanonicalUri(t.URI.revive(H.uri)),
					})),
					(F.empty = (x, H) => ({ id: x, uri: H, statement: P.empty() }));
			})(k || (e.IFileCoverage = k = {}));
			function L(F) {
				return { ...F, location: F.location?.toJSON() };
			}
			function D(F) {
				return (
					(F.location = F.location
						? i.$hL.isIPosition(F.location)
							? i.$hL.lift(F.location)
							: w.$iL.lift(F.location)
						: void 0),
					F
				);
			}
			e.$s4 = 3;
			var M;
			(function (F) {
				(F[(F.Declaration = 0)] = "Declaration"),
					(F[(F.Statement = 1)] = "Statement"),
					(F[(F.Branch = 2)] = "Branch");
			})(M || (e.DetailType = M = {}));
			var N;
			(function (F) {
				(F.serialize = (x) =>
					x.type === M.Declaration ? R.serialize(x) : O.serialize(x)),
					(F.deserialize = (x) =>
						x.type === M.Declaration ? R.deserialize(x) : O.deserialize(x));
			})(N || (e.CoverageDetails = N = {}));
			var A;
			(function (F) {
				(F.serialize = L), (F.deserialize = D);
			})(A || (e.IBranchCoverage = A = {}));
			var R;
			(function (F) {
				(F.serialize = L), (F.deserialize = D);
			})(R || (e.IDeclarationCoverage = R = {}));
			var O;
			(function (F) {
				(F.serialize = (x) => ({
					...L(x),
					branches: x.branches?.map(A.serialize),
				})),
					(F.deserialize = (x) => ({
						...D(x),
						branches: x.branches?.map(A.deserialize),
					}));
			})(O || (e.IStatementCoverage = O = {}));
			var B;
			(function (F) {
				(F[(F.Add = 0)] = "Add"),
					(F[(F.Update = 1)] = "Update"),
					(F[(F.DocumentSynced = 2)] = "DocumentSynced"),
					(F[(F.Remove = 3)] = "Remove"),
					(F[(F.IncrementPendingExtHosts = 4)] = "IncrementPendingExtHosts"),
					(F[(F.Retire = 5)] = "Retire"),
					(F[(F.AddTag = 6)] = "AddTag"),
					(F[(F.RemoveTag = 7)] = "RemoveTag");
			})(B || (e.TestDiffOpType = B = {}));
			var U;
			(function (F) {
				(F.deserialize = (x, H) =>
					H.op === B.Add
						? { op: H.op, item: v.deserialize(x, H.item) }
						: H.op === B.Update
							? { op: H.op, item: S.deserialize(H.item) }
							: H.op === B.DocumentSynced
								? {
										op: H.op,
										uri: x.asCanonicalUri(t.URI.revive(H.uri)),
										docv: H.docv,
									}
								: H),
					(F.serialize = (x) =>
						x.op === B.Add
							? { op: x.op, item: v.serialize(x.item) }
							: x.op === B.Update
								? { op: x.op, item: S.serialize(x.item) }
								: x);
			})(U || (e.TestsDiffOp = U = {}));
			class z {
				constructor(x) {
					(this.l = x),
						(this.f = new Map()),
						(this.g = new Map()),
						(this.h = new Set()),
						(this.j = 0),
						(this.k = 0),
						(this.tags = this.f);
				}
				apply(x) {
					const H = this.x();
					for (const q of x)
						switch (q.op) {
							case B.Add:
								this.p(v.deserialize(this.l, q.item), H);
								break;
							case B.Update:
								this.q(S.deserialize(q.item), H);
								break;
							case B.Remove:
								this.v(q.itemId, H);
								break;
							case B.Retire:
								this.w(q.itemId);
								break;
							case B.IncrementPendingExtHosts:
								this.updatePendingRoots(q.amount);
								break;
							case B.AddTag:
								this.f.set(q.tag.id, q.tag);
								break;
							case B.RemoveTag:
								this.f.delete(q.id);
								break;
						}
					H.complete?.();
				}
				p(x, H) {
					const q = E.$k4.parentId(x.item.extId)?.toString();
					let V;
					if (!q) (V = this.y(x)), this.h.add(V), this.g.set(x.item.extId, V);
					else if (this.g.has(q)) {
						const G = this.g.get(q);
						G.children.add(x.item.extId),
							(V = this.y(x, G)),
							this.g.set(x.item.extId, V);
					} else {
						console.error(`Test with unknown parent ID: ${JSON.stringify(x)}`);
						return;
					}
					return H.add?.(V), x.expand === $.BusyExpanding && this.j++, V;
				}
				q(x, H) {
					const q = this.g.get(x.extId);
					if (q)
						return (
							x.expand !== void 0 &&
								(q.expand === $.BusyExpanding && this.j--,
								x.expand === $.BusyExpanding && this.j++),
							(0, e.$r4)(q, x),
							H.update?.(q),
							q
						);
				}
				v(x, H) {
					const q = this.g.get(x);
					if (!q) return;
					const V = E.$k4.parentId(q.item.extId)?.toString();
					V ? this.g.get(V).children.delete(q.item.extId) : this.h.delete(q);
					const G = [[x]];
					for (; G.length; )
						for (const K of G.pop()) {
							const J = this.g.get(K);
							J &&
								(G.push(J.children),
								this.g.delete(K),
								H.remove?.(J, J !== q),
								J.expand === $.BusyExpanding && this.j--);
						}
				}
				w(x) {}
				updatePendingRoots(x) {
					this.k += x;
				}
				x() {
					return {};
				}
			}
			e.$t4 = z;
		})
