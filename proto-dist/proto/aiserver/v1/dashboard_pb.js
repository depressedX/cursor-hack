/* import '../../../require.js'; */
/* import '../../../exports.js'; */
/* import '../../../external/bufbuild/protobuf.js'; */
/* import './usage_pb.js'; */
define(
	de[894],
	he([1, 0, 86, 1480]),
	function (ce /*require*/, e /*exports*/, t /*protobuf*/, i /*usage_pb*/) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.$W$ =
				e.$V$ =
				e.$U$ =
				e.$T$ =
				e.$S$ =
				e.$R$ =
				e.$Q$ =
				e.$P$ =
				e.$O$ =
				e.$N$ =
				e.$M$ =
				e.$L$ =
				e.$K$ =
				e.GetDownloadLinkRequest_Platform =
				e.$J$ =
				e.$I$ =
				e.$H$ =
				e.$G$ =
				e.$F$ =
				e.$E$ =
				e.GetSignUpTypeResponse_SignUpType =
				e.$D$ =
				e.$C$ =
				e.$B$ =
				e.$A$ =
				e.$z$ =
				e.$y$ =
				e.$x$ =
				e.$w$ =
				e.$v$ =
				e.$u$ =
				e.$t$ =
				e.$s$ =
				e.$r$ =
				e.$q$ =
				e.$p$ =
				e.$o$ =
				e.$n$ =
				e.$m$ =
				e.$l$ =
				e.$k$ =
				e.$j$ =
				e.$i$ =
				e.$h$ =
				e.$g$ =
				e.$f$ =
				e.$e$ =
				e.$d$ =
				e.$c$ =
				e.$b$ =
				e.$a$ =
				e.$_0 =
				e.$$0 =
				e.$00 =
				e.$90 =
				e.$80 =
				e.$70 =
				e.$60 =
				e.$50 =
				e.$40 =
				e.$30 =
				e.$20 =
				e.$10 =
				e.$Z0 =
				e.$Y0 =
				e.$X0 =
				e.$W0 =
				e.$V0 =
				e.$U0 =
				e.$T0 =
				e.$S0 =
				e.$R0 =
				e.$Q0 =
				e.$P0 =
				e.$O0 =
				e.$N0 =
				e.$M0 =
				e.$L0 =
				e.TeamRole =
					void 0);
		var w;
		(function (Be) {
			(Be[(Be.UNSPECIFIED = 0)] = "UNSPECIFIED"),
				(Be[(Be.OWNER = 1)] = "OWNER"),
				(Be[(Be.MEMBER = 2)] = "MEMBER"),
				(Be[(Be.FREE_OWNER = 3)] = "FREE_OWNER");
		})(w || (e.TeamRole = w = {})),
			t.proto3.util.setEnumType(w, "aiserver.v1.TeamRole", [
				{ no: 0, name: "TEAM_ROLE_UNSPECIFIED" },
				{ no: 1, name: "TEAM_ROLE_OWNER" },
				{ no: 2, name: "TEAM_ROLE_MEMBER" },
				{ no: 3, name: "TEAM_ROLE_FREE_OWNER" },
			]);
		class E extends t.Message {
			constructor(Se) {
				super(), (this.requestQuota = 0), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.UpdateFastRequestsRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "request_quota", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new E().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new E().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new E().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(E, Se, ke);
			}
		}
		e.$L0 = E;
		class C extends t.Message {
			constructor(Se) {
				super(), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.UpdateFastRequestsResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => []);
			}
			static fromBinary(Se, ke) {
				return new C().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new C().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new C().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(C, Se, ke);
			}
		}
		e.$M0 = C;
		class d extends t.Message {
			constructor(Se) {
				super(), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetFastRequestsRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => []);
			}
			static fromBinary(Se, ke) {
				return new d().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new d().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new d().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(d, Se, ke);
			}
		}
		e.$N0 = d;
		class m extends t.Message {
			constructor(Se) {
				super(), (this.requestQuota = 0), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetFastRequestsResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "request_quota", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new m().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new m().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new m().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(m, Se, ke);
			}
		}
		e.$O0 = m;
		class r extends t.Message {
			constructor(Se) {
				super(), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.DeleteAccountRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => []);
			}
			static fromBinary(Se, ke) {
				return new r().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new r().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new r().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(r, Se, ke);
			}
		}
		e.$P0 = r;
		class u extends t.Message {
			constructor(Se) {
				super(), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.DeleteAccountResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => []);
			}
			static fromBinary(Se, ke) {
				return new u().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new u().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new u().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(u, Se, ke);
			}
		}
		e.$Q0 = u;
		class a extends t.Message {
			constructor(Se) {
				super(),
					(this.teamId = 0),
					(this.privacyModeForced = !1),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SwitchTeamPrivacyModeRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
					{ no: 2, name: "privacy_mode_forced", kind: "scalar", T: 8 },
				]);
			}
			static fromBinary(Se, ke) {
				return new a().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new a().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new a().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(a, Se, ke);
			}
		}
		e.$R0 = a;
		class h extends t.Message {
			constructor(Se) {
				super(), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SwitchTeamPrivacyModeResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => []);
			}
			static fromBinary(Se, ke) {
				return new h().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new h().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new h().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(h, Se, ke);
			}
		}
		e.$S0 = h;
		class c extends t.Message {
			constructor(Se) {
				super(), (this.teamId = 0), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetTeamPrivacyModeForcedRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new c().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new c().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new c().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(c, Se, ke);
			}
		}
		e.$T0 = c;
		class n extends t.Message {
			constructor(Se) {
				super(),
					(this.privacyModeForced = !1),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetTeamPrivacyModeForcedResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "privacy_mode_forced", kind: "scalar", T: 8 },
				]);
			}
			static fromBinary(Se, ke) {
				return new n().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new n().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new n().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(n, Se, ke);
			}
		}
		e.$U0 = n;
		class g extends t.Message {
			constructor(Se) {
				super(), (this.teamId = 0), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetTeamHasValidPaymentMethodRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new g().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new g().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new g().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(g, Se, ke);
			}
		}
		e.$V0 = g;
		class p extends t.Message {
			constructor(Se) {
				super(),
					(this.hasValidPaymentMethod = !1),
					(this.trialDaysRemaining = 0),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetTeamHasValidPaymentMethodResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "has_valid_payment_method", kind: "scalar", T: 8 },
					{ no: 2, name: "trial_days_remaining", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new p().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new p().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new p().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(p, Se, ke);
			}
		}
		e.$W0 = p;
		class o extends t.Message {
			constructor(Se) {
				super(), (this.name = ""), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.CreateTeamWithFreeTrialRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "name", kind: "scalar", T: 9 },
					{
						no: 2,
						name: "privacy_mode_forced",
						kind: "scalar",
						T: 8,
						opt: !0,
					},
				]);
			}
			static fromBinary(Se, ke) {
				return new o().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new o().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new o().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(o, Se, ke);
			}
		}
		e.$X0 = o;
		class f extends t.Message {
			constructor(Se) {
				super(), (this.teamId = 0), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.CreateTeamWithFreeTrialResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new f().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new f().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new f().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(f, Se, ke);
			}
		}
		e.$Y0 = f;
		class b extends t.Message {
			constructor(Se) {
				super(), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetPricingHistoryRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => []);
			}
			static fromBinary(Se, ke) {
				return new b().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new b().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new b().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(b, Se, ke);
			}
		}
		e.$Z0 = b;
		class s extends t.Message {
			constructor(Se) {
				super(),
					(this.pricingHistory = []),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetPricingHistoryResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{
						no: 1,
						name: "pricing_history",
						kind: "message",
						T: l,
						repeated: !0,
					},
				]);
			}
			static fromBinary(Se, ke) {
				return new s().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new s().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new s().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(s, Se, ke);
			}
		}
		e.$10 = s;
		class l extends t.Message {
			constructor(Se) {
				super(),
					(this.description = ""),
					(this.id = ""),
					(this.changelog = ""),
					(this.createdAt = t.protoInt64.zero),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName =
					"aiserver.v1.GetPricingHistoryResponse.PricingDescription";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "description", kind: "scalar", T: 9 },
					{ no: 2, name: "id", kind: "scalar", T: 9 },
					{ no: 3, name: "changelog", kind: "scalar", T: 9 },
					{ no: 4, name: "created_at", kind: "scalar", T: 3 },
				]);
			}
			static fromBinary(Se, ke) {
				return new l().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new l().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new l().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(l, Se, ke);
			}
		}
		e.$20 = l;
		class y extends t.Message {
			constructor(Se) {
				super(),
					(this.month = 0),
					(this.year = 0),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetMonthlyInvoiceRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5, opt: !0 },
					{ no: 2, name: "month", kind: "scalar", T: 5 },
					{ no: 3, name: "year", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new y().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new y().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new y().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(y, Se, ke);
			}
		}
		e.$30 = y;
		class $ extends t.Message {
			constructor(Se) {
				super(),
					(this.items = []),
					(this.usageEvents = []),
					(this.isUsageEventsMaybeCutoff = !1),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetMonthlyInvoiceResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "items", kind: "message", T: v, repeated: !0 },
					{ no: 2, name: "pricing_description", kind: "message", T: S },
					{
						no: 3,
						name: "usage_events",
						kind: "message",
						T: i.$zD,
						repeated: !0,
					},
					{
						no: 4,
						name: "is_usage_events_maybe_cutoff",
						kind: "scalar",
						T: 8,
					},
				]);
			}
			static fromBinary(Se, ke) {
				return new $().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new $().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new $().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals($, Se, ke);
			}
		}
		e.$40 = $;
		class v extends t.Message {
			constructor(Se) {
				super(),
					(this.description = ""),
					(this.cents = 0),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetMonthlyInvoiceResponse.InvoiceItem";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "description", kind: "scalar", T: 9 },
					{ no: 2, name: "cents", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new v().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new v().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new v().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(v, Se, ke);
			}
		}
		e.$50 = v;
		class S extends t.Message {
			constructor(Se) {
				super(),
					(this.description = ""),
					(this.id = ""),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName =
					"aiserver.v1.GetMonthlyInvoiceResponse.PricingDescription";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "description", kind: "scalar", T: 9 },
					{ no: 2, name: "id", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Se, ke) {
				return new S().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new S().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new S().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(S, Se, ke);
			}
		}
		e.$60 = S;
		class I extends t.Message {
			constructor(Se) {
				super(), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetHardLimitRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5, opt: !0 },
				]);
			}
			static fromBinary(Se, ke) {
				return new I().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new I().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new I().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(I, Se, ke);
			}
		}
		e.$70 = I;
		class T extends t.Message {
			constructor(Se) {
				super(),
					(this.hardLimit = 0),
					(this.noUsageBasedAllowed = !1),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetHardLimitResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "hard_limit", kind: "scalar", T: 5 },
					{ no: 2, name: "no_usage_based_allowed", kind: "scalar", T: 8 },
				]);
			}
			static fromBinary(Se, ke) {
				return new T().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new T().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new T().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(T, Se, ke);
			}
		}
		e.$80 = T;
		class P extends t.Message {
			constructor(Se) {
				super(),
					(this.hardLimit = 0),
					(this.noUsageBasedAllowed = !1),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SetHardLimitRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5, opt: !0 },
					{ no: 2, name: "hard_limit", kind: "scalar", T: 5 },
					{ no: 3, name: "no_usage_based_allowed", kind: "scalar", T: 8 },
				]);
			}
			static fromBinary(Se, ke) {
				return new P().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new P().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new P().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(P, Se, ke);
			}
		}
		e.$90 = P;
		class k extends t.Message {
			constructor(Se) {
				super(), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SetHardLimitResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => []);
			}
			static fromBinary(Se, ke) {
				return new k().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new k().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new k().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(k, Se, ke);
			}
		}
		e.$00 = k;
		class L extends t.Message {
			constructor(Se) {
				super(),
					(this.name = ""),
					(this.id = 0),
					(this.role = w.UNSPECIFIED),
					(this.seats = 0),
					(this.hasBilling = !1),
					(this.requestQuotaPerSeat = 0),
					(this.privacyModeForced = !1),
					(this.allowSso = !1),
					(this.adminOnlyUsagePricing = !1),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.Team";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "name", kind: "scalar", T: 9 },
					{ no: 2, name: "id", kind: "scalar", T: 5 },
					{ no: 3, name: "role", kind: "enum", T: t.proto3.getEnumType(w) },
					{ no: 4, name: "seats", kind: "scalar", T: 5 },
					{ no: 5, name: "has_billing", kind: "scalar", T: 8 },
					{ no: 6, name: "request_quota_per_seat", kind: "scalar", T: 5 },
					{ no: 7, name: "privacy_mode_forced", kind: "scalar", T: 8 },
					{ no: 8, name: "allow_sso", kind: "scalar", T: 8 },
					{ no: 9, name: "admin_only_usage_pricing", kind: "scalar", T: 8 },
				]);
			}
			static fromBinary(Se, ke) {
				return new L().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new L().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new L().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(L, Se, ke);
			}
		}
		e.$$0 = L;
		class D extends t.Message {
			constructor(Se) {
				super(), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetTeamsRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => []);
			}
			static fromBinary(Se, ke) {
				return new D().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new D().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new D().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(D, Se, ke);
			}
		}
		e.$_0 = D;
		class M extends t.Message {
			constructor(Se) {
				super(), (this.teams = []), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetTeamsResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "teams", kind: "message", T: L, repeated: !0 },
				]);
			}
			static fromBinary(Se, ke) {
				return new M().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new M().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new M().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(M, Se, ke);
			}
		}
		e.$a$ = M;
		class N extends t.Message {
			constructor(Se) {
				super(),
					(this.teamId = 0),
					(this.seats = 0),
					(this.yearly = !1),
					(this.requestQuotaPerSeat = 0),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetActivationCheckoutUrlRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
					{ no: 2, name: "seats", kind: "scalar", T: 5 },
					{ no: 3, name: "yearly", kind: "scalar", T: 8 },
					{ no: 4, name: "request_quota_per_seat", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new N().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new N().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new N().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(N, Se, ke);
			}
		}
		e.$b$ = N;
		class A extends t.Message {
			constructor(Se) {
				super(), (this.checkoutUrl = ""), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetActivationCheckoutUrlResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "checkout_url", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Se, ke) {
				return new A().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new A().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new A().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(A, Se, ke);
			}
		}
		e.$c$ = A;
		class R extends t.Message {
			constructor(Se) {
				super(), (this.teamId = 0), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetTeamCustomerPortalUrlRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new R().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new R().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new R().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(R, Se, ke);
			}
		}
		e.$d$ = R;
		class O extends t.Message {
			constructor(Se) {
				super(), (this.portalUrl = ""), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetTeamCustomerPortalUrlResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "portal_url", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Se, ke) {
				return new O().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new O().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new O().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(O, Se, ke);
			}
		}
		e.$e$ = O;
		class B extends t.Message {
			constructor(Se) {
				super(), (this.teamId = 0), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetTeamMembersRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new B().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new B().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new B().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(B, Se, ke);
			}
		}
		e.$f$ = B;
		class U extends t.Message {
			constructor(Se) {
				super(),
					(this.name = ""),
					(this.email = ""),
					(this.id = 0),
					(this.role = w.UNSPECIFIED),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.TeamMember";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "name", kind: "scalar", T: 9 },
					{ no: 4, name: "email", kind: "scalar", T: 9 },
					{ no: 2, name: "id", kind: "scalar", T: 5 },
					{ no: 3, name: "role", kind: "enum", T: t.proto3.getEnumType(w) },
				]);
			}
			static fromBinary(Se, ke) {
				return new U().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new U().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new U().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(U, Se, ke);
			}
		}
		e.$g$ = U;
		class z extends t.Message {
			constructor(Se) {
				super(),
					(this.teamMembers = []),
					(this.userId = 0),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetTeamMembersResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{
						no: 1,
						name: "team_members",
						kind: "message",
						T: U,
						repeated: !0,
					},
					{ no: 2, name: "user_id", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new z().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new z().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new z().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(z, Se, ke);
			}
		}
		e.$h$ = z;
		class F extends t.Message {
			constructor(Se) {
				super(), (this.teamId = 0), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetTeamInviteLinkRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new F().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new F().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new F().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(F, Se, ke);
			}
		}
		e.$i$ = F;
		class x extends t.Message {
			constructor(Se) {
				super(), (this.inviteLink = ""), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetTeamInviteLinkResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "invite_link", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Se, ke) {
				return new x().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new x().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new x().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(x, Se, ke);
			}
		}
		e.$j$ = x;
		class H extends t.Message {
			constructor(Se) {
				super(),
					(this.teamId = 0),
					(this.email = ""),
					(this.role = w.UNSPECIFIED),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SendTeamInviteRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
					{ no: 2, name: "email", kind: "scalar", T: 9 },
					{ no: 3, name: "role", kind: "enum", T: t.proto3.getEnumType(w) },
				]);
			}
			static fromBinary(Se, ke) {
				return new H().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new H().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new H().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(H, Se, ke);
			}
		}
		e.$k$ = H;
		class q extends t.Message {
			constructor(Se) {
				super(),
					(this.validUntil = t.protoInt64.zero),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SendTeamInviteResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "valid_until", kind: "scalar", T: 3 },
				]);
			}
			static fromBinary(Se, ke) {
				return new q().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new q().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new q().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(q, Se, ke);
			}
		}
		e.$l$ = q;
		class V extends t.Message {
			constructor(Se) {
				super(), (this.inviteCode = ""), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.AcceptInviteRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "invite_code", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Se, ke) {
				return new V().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new V().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new V().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(V, Se, ke);
			}
		}
		e.$m$ = V;
		class G extends t.Message {
			constructor(Se) {
				super(), (this.teamId = 0), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.AcceptInviteResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new G().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new G().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new G().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(G, Se, ke);
			}
		}
		e.$n$ = G;
		class K extends t.Message {
			constructor(Se) {
				super(), (this.name = ""), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.CreateTeamRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "name", kind: "scalar", T: 9 },
					{
						no: 2,
						name: "privacy_mode_forced",
						kind: "scalar",
						T: 8,
						opt: !0,
					},
				]);
			}
			static fromBinary(Se, ke) {
				return new K().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new K().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new K().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(K, Se, ke);
			}
		}
		e.$o$ = K;
		class J extends t.Message {
			constructor(Se) {
				super(), (this.teamId = 0), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.CreateTeamResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new J().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new J().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new J().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(J, Se, ke);
			}
		}
		e.$p$ = J;
		class W extends t.Message {
			constructor(Se) {
				super(),
					(this.teamId = 0),
					(this.userId = 0),
					(this.role = w.UNSPECIFIED),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.UpdateRoleRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
					{ no: 2, name: "user_id", kind: "scalar", T: 5 },
					{ no: 3, name: "role", kind: "enum", T: t.proto3.getEnumType(w) },
				]);
			}
			static fromBinary(Se, ke) {
				return new W().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new W().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new W().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(W, Se, ke);
			}
		}
		e.$q$ = W;
		class X extends t.Message {
			constructor(Se) {
				super(), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.UpdateRoleResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => []);
			}
			static fromBinary(Se, ke) {
				return new X().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new X().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new X().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(X, Se, ke);
			}
		}
		e.$r$ = X;
		class Y extends t.Message {
			constructor(Se) {
				super(),
					(this.teamId = 0),
					(this.userId = 0),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.RemoveMemberRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
					{ no: 2, name: "user_id", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new Y().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new Y().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new Y().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(Y, Se, ke);
			}
		}
		e.$s$ = Y;
		class ie extends t.Message {
			constructor(Se) {
				super(), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.RemoveMemberResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => []);
			}
			static fromBinary(Se, ke) {
				return new ie().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new ie().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new ie().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(ie, Se, ke);
			}
		}
		e.$t$ = ie;
		class ne extends t.Message {
			constructor(Se) {
				super(),
					(this.teamId = 0),
					(this.newSeats = 0),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ChangeSeatRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
					{ no: 2, name: "new_seats", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new ne().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new ne().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new ne().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(ne, Se, ke);
			}
		}
		e.$u$ = ne;
		class ee extends t.Message {
			constructor(Se) {
				super(), (this.success = !1), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ChangeSeatResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "success", kind: "scalar", T: 8 },
				]);
			}
			static fromBinary(Se, ke) {
				return new ee().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new ee().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new ee().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(ee, Se, ke);
			}
		}
		e.$v$ = ee;
		class _ extends t.Message {
			constructor(Se) {
				super(),
					(this.teamId = 0),
					(this.newNumSeats = 0),
					(this.newRequestQuotaPerSeat = 0),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ChangeTeamSubscriptionRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
					{ no: 2, name: "new_num_seats", kind: "scalar", T: 5 },
					{ no: 3, name: "new_request_quota_per_seat", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new _().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new _().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new _().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(_, Se, ke);
			}
		}
		e.$w$ = _;
		class te extends t.Message {
			constructor(Se) {
				super(), (this.success = !1), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ChangeTeamSubscriptionResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "success", kind: "scalar", T: 8 },
				]);
			}
			static fromBinary(Se, ke) {
				return new te().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new te().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new te().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(te, Se, ke);
			}
		}
		e.$x$ = te;
		class Q extends t.Message {
			constructor(Se) {
				super(), (this.teamId = 0), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetTeamUsageRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new Q().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new Q().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new Q().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(Q, Se, ke);
			}
		}
		e.$y$ = Q;
		class Z extends t.Message {
			constructor(Se) {
				super(),
					(this.teamMemberUsage = []),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetTeamUsageResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{
						no: 1,
						name: "team_member_usage",
						kind: "message",
						T: se,
						repeated: !0,
					},
				]);
			}
			static fromBinary(Se, ke) {
				return new Z().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new Z().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new Z().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(Z, Se, ke);
			}
		}
		e.$z$ = Z;
		class se extends t.Message {
			constructor(Se) {
				super(),
					(this.id = 0),
					(this.usageData = []),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.TeamMemberUsage";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "id", kind: "scalar", T: 5 },
					{ no: 2, name: "usage_data", kind: "message", T: re, repeated: !0 },
				]);
			}
			static fromBinary(Se, ke) {
				return new se().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new se().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new se().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(se, Se, ke);
			}
		}
		e.$A$ = se;
		class re extends t.Message {
			constructor(Se) {
				super(),
					(this.modelType = ""),
					(this.numRequests = 0),
					(this.numTokens = 0),
					(this.maxTokenUsage = 0),
					(this.maxRequestUsage = 0),
					(this.lastUsage = ""),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.TeamMemberUsageData";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "model_type", kind: "scalar", T: 9 },
					{ no: 2, name: "num_requests", kind: "scalar", T: 5 },
					{ no: 3, name: "num_tokens", kind: "scalar", T: 5 },
					{ no: 4, name: "max_token_usage", kind: "scalar", T: 5 },
					{ no: 5, name: "max_request_usage", kind: "scalar", T: 5 },
					{ no: 6, name: "last_usage", kind: "scalar", T: 9 },
					{ no: 7, name: "copilot_usage", kind: "scalar", T: 5, opt: !0 },
					{ no: 8, name: "docs_count", kind: "scalar", T: 5, opt: !0 },
				]);
			}
			static fromBinary(Se, ke) {
				return new re().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new re().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new re().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(re, Se, ke);
			}
		}
		e.$B$ = re;
		class le extends t.Message {
			constructor(Se) {
				super(), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetSignUpTypeRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => []);
			}
			static fromBinary(Se, ke) {
				return new le().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new le().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new le().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(le, Se, ke);
			}
		}
		e.$C$ = le;
		class oe extends t.Message {
			constructor(Se) {
				super(),
					(this.signUpType = ae.UNSPECIFIED),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetSignUpTypeResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{
						no: 1,
						name: "sign_up_type",
						kind: "enum",
						T: t.proto3.getEnumType(ae),
					},
				]);
			}
			static fromBinary(Se, ke) {
				return new oe().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new oe().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new oe().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(oe, Se, ke);
			}
		}
		e.$D$ = oe;
		var ae;
		(function (Be) {
			(Be[(Be.UNSPECIFIED = 0)] = "UNSPECIFIED"),
				(Be[(Be.AUTH_0 = 1)] = "AUTH_0"),
				(Be[(Be.GOOGLE = 2)] = "GOOGLE"),
				(Be[(Be.GITHUB = 3)] = "GITHUB"),
				(Be[(Be.WORKOS = 4)] = "WORKOS");
		})(ae || (e.GetSignUpTypeResponse_SignUpType = ae = {})),
			t.proto3.util.setEnumType(
				ae,
				"aiserver.v1.GetSignUpTypeResponse.SignUpType",
				[
					{ no: 0, name: "SIGN_UP_TYPE_UNSPECIFIED" },
					{ no: 1, name: "SIGN_UP_TYPE_AUTH_0" },
					{ no: 2, name: "SIGN_UP_TYPE_GOOGLE" },
					{ no: 3, name: "SIGN_UP_TYPE_GITHUB" },
					{ no: 4, name: "SIGN_UP_TYPE_WORKOS" },
				],
			);
		class pe extends t.Message {
			constructor(Se) {
				super(), (this.teamId = 0), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetDailyTeamUsageRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new pe().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new pe().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new pe().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(pe, Se, ke);
			}
		}
		e.$E$ = pe;
		class $e extends t.Message {
			constructor(Se) {
				super(),
					(this.dailyTeamMemberUsage = []),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetDailyTeamUsageResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{
						no: 1,
						name: "daily_team_member_usage",
						kind: "message",
						T: ye,
						repeated: !0,
					},
				]);
			}
			static fromBinary(Se, ke) {
				return new $e().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new $e().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new $e().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals($e, Se, ke);
			}
		}
		e.$F$ = $e;
		class ye extends t.Message {
			constructor(Se) {
				super(),
					(this.id = 0),
					(this.dailyUsageData = []),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.DailyTeamMemberUsage";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "id", kind: "scalar", T: 5 },
					{
						no: 2,
						name: "daily_usage_data",
						kind: "message",
						T: ue,
						repeated: !0,
					},
					{ no: 3, name: "last_usage", kind: "scalar", T: 9, opt: !0 },
				]);
			}
			static fromBinary(Se, ke) {
				return new ye().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new ye().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new ye().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(ye, Se, ke);
			}
		}
		e.$G$ = ye;
		class ue extends t.Message {
			constructor(Se) {
				super(),
					(this.date = ""),
					(this.modelUsageData = []),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.DailyUsageData";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "date", kind: "scalar", T: 9 },
					{ no: 4, name: "copilot_usage", kind: "scalar", T: 5, opt: !0 },
					{
						no: 2,
						name: "model_usage_data",
						kind: "message",
						T: fe,
						repeated: !0,
					},
				]);
			}
			static fromBinary(Se, ke) {
				return new ue().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new ue().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new ue().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(ue, Se, ke);
			}
		}
		e.$H$ = ue;
		class fe extends t.Message {
			constructor(Se) {
				super(),
					(this.modelType = ""),
					(this.numRequests = 0),
					(this.numTokens = 0),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ModelUsageData";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "model_type", kind: "scalar", T: 9 },
					{ no: 2, name: "num_requests", kind: "scalar", T: 5 },
					{ no: 3, name: "num_tokens", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new fe().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new fe().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new fe().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(fe, Se, ke);
			}
		}
		e.$I$ = fe;
		class me extends t.Message {
			constructor(Se) {
				super(),
					(this.platform = ve.UNSPECIFIED),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetDownloadLinkRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{
						no: 1,
						name: "platform",
						kind: "enum",
						T: t.proto3.getEnumType(ve),
					},
				]);
			}
			static fromBinary(Se, ke) {
				return new me().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new me().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new me().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(me, Se, ke);
			}
		}
		e.$J$ = me;
		var ve;
		(function (Be) {
			(Be[(Be.UNSPECIFIED = 0)] = "UNSPECIFIED"),
				(Be[(Be.MAC_APPLE_SILICON = 1)] = "MAC_APPLE_SILICON"),
				(Be[(Be.MAC_INTEL = 2)] = "MAC_INTEL"),
				(Be[(Be.MAC_UNIVERSAL = 3)] = "MAC_UNIVERSAL"),
				(Be[(Be.WINDOWS = 4)] = "WINDOWS"),
				(Be[(Be.LINUX = 5)] = "LINUX");
		})(ve || (e.GetDownloadLinkRequest_Platform = ve = {})),
			t.proto3.util.setEnumType(
				ve,
				"aiserver.v1.GetDownloadLinkRequest.Platform",
				[
					{ no: 0, name: "PLATFORM_UNSPECIFIED" },
					{ no: 1, name: "PLATFORM_MAC_APPLE_SILICON" },
					{ no: 2, name: "PLATFORM_MAC_INTEL" },
					{ no: 3, name: "PLATFORM_MAC_UNIVERSAL" },
					{ no: 4, name: "PLATFORM_WINDOWS" },
					{ no: 5, name: "PLATFORM_LINUX" },
				],
			);
		class ge extends t.Message {
			constructor(Se) {
				super(),
					(this.cachedDownloadLink = ""),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetDownloadLinkResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "cached_download_link", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Se, ke) {
				return new ge().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new ge().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new ge().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(ge, Se, ke);
			}
		}
		e.$K$ = ge;
		class be extends t.Message {
			constructor(Se) {
				super(), (this.teamId = 0), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetSsoConfigurationLinksRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new be().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new be().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new be().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(be, Se, ke);
			}
		}
		e.$L$ = be;
		class Ce extends t.Message {
			constructor(Se) {
				super(),
					(this.ssoUrl = ""),
					(this.domainVerificationUrl = ""),
					(this.ssoStatus = ""),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetSsoConfigurationLinksResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "sso_url", kind: "scalar", T: 9 },
					{ no: 2, name: "domain_verification_url", kind: "scalar", T: 9 },
					{ no: 3, name: "sso_status", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Se, ke) {
				return new Ce().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new Ce().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new Ce().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(Ce, Se, ke);
			}
		}
		e.$M$ = Ce;
		class Le extends t.Message {
			constructor(Se) {
				super(),
					(this.teamId = 0),
					(this.adminOnlyUsagePricing = !1),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SetAdminOnlyUsagePricingRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
					{ no: 2, name: "admin_only_usage_pricing", kind: "scalar", T: 8 },
				]);
			}
			static fromBinary(Se, ke) {
				return new Le().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new Le().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new Le().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(Le, Se, ke);
			}
		}
		e.$N$ = Le;
		class Fe extends t.Message {
			constructor(Se) {
				super(), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SetAdminOnlyUsagePricingResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => []);
			}
			static fromBinary(Se, ke) {
				return new Fe().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new Fe().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new Fe().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(Fe, Se, ke);
			}
		}
		e.$O$ = Fe;
		class Oe extends t.Message {
			constructor(Se) {
				super(), (this.teamId = 0), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetYearlyUpgradeEligibilityRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new Oe().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new Oe().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new Oe().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(Oe, Se, ke);
			}
		}
		e.$P$ = Oe;
		class xe extends t.Message {
			constructor(Se) {
				super(), (this.eligible = !1), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetYearlyUpgradeEligibilityResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "eligible", kind: "scalar", T: 8 },
				]);
			}
			static fromBinary(Se, ke) {
				return new xe().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new xe().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new xe().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(xe, Se, ke);
			}
		}
		e.$Q$ = xe;
		class He extends t.Message {
			constructor(Se) {
				super(), (this.teamId = 0), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.UpgradeToYearlyRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new He().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new He().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new He().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(He, Se, ke);
			}
		}
		e.$R$ = He;
		class Ke extends t.Message {
			constructor(Se) {
				super(), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.UpgradeToYearlyResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => []);
			}
			static fromBinary(Se, ke) {
				return new Ke().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new Ke().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new Ke().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(Ke, Se, ke);
			}
		}
		e.$S$ = Ke;
		class Je extends t.Message {
			constructor(Se) {
				super(), (this.teamId = 0), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetUsageBasedPremiumRequestsRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Se, ke) {
				return new Je().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new Je().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new Je().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(Je, Se, ke);
			}
		}
		e.$T$ = Je;
		class Te extends t.Message {
			constructor(Se) {
				super(),
					(this.usageBasedPremiumRequests = !1),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetUsageBasedPremiumRequestsResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{
						no: 1,
						name: "usage_based_premium_requests",
						kind: "scalar",
						T: 8,
					},
				]);
			}
			static fromBinary(Se, ke) {
				return new Te().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new Te().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new Te().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(Te, Se, ke);
			}
		}
		e.$U$ = Te;
		class Ee extends t.Message {
			constructor(Se) {
				super(),
					(this.teamId = 0),
					(this.usageBasedPremiumRequests = !1),
					t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SetUsageBasedPremiumRequestsRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "team_id", kind: "scalar", T: 5 },
					{
						no: 2,
						name: "usage_based_premium_requests",
						kind: "scalar",
						T: 8,
					},
				]);
			}
			static fromBinary(Se, ke) {
				return new Ee().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new Ee().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new Ee().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(Ee, Se, ke);
			}
		}
		e.$V$ = Ee;
		class Ie extends t.Message {
			constructor(Se) {
				super(), t.proto3.util.initPartial(Se, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SetUsageBasedPremiumRequestsResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => []);
			}
			static fromBinary(Se, ke) {
				return new Ie().fromBinary(Se, ke);
			}
			static fromJson(Se, ke) {
				return new Ie().fromJson(Se, ke);
			}
			static fromJsonString(Se, ke) {
				return new Ie().fromJsonString(Se, ke);
			}
			static equals(Se, ke) {
				return t.proto3.util.equals(Ie, Se, ke);
			}
		}
		e.$W$ = Ie;
	},
);
