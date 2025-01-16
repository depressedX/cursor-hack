define(de[1468], he([1, 0, 86]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$H0 =
					e.$G0 =
					e.$F0 =
					e.$E0 =
					e.$D0 =
					e.$C0 =
					e.GetEmailResponse_SignUpType =
					e.$B0 =
					e.$A0 =
					e.$z0 =
					e.$y0 =
					e.$x0 =
					e.$w0 =
					e.$v0 =
					e.$u0 =
					e.$t0 =
					e.GetSessionTokenRequest_Destination =
					e.$s0 =
					e.$r0 =
						void 0);
			class i extends t.Message {
				constructor($) {
					super(), (this.id = ""), t.proto3.util.initPartial($, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.User";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 2, name: "id", kind: "scalar", T: 9 },
						{ no: 3, name: "email", kind: "scalar", T: 9, opt: !0 },
						{ no: 4, name: "email_verified", kind: "scalar", T: 8, opt: !0 },
						{ no: 5, name: "first_name", kind: "scalar", T: 9, opt: !0 },
						{ no: 6, name: "last_name", kind: "scalar", T: 9, opt: !0 },
						{ no: 7, name: "created_at", kind: "scalar", T: 9, opt: !0 },
						{ no: 8, name: "updated_at", kind: "scalar", T: 9, opt: !0 },
					]);
				}
				static fromBinary($, v) {
					return new i().fromBinary($, v);
				}
				static fromJson($, v) {
					return new i().fromJson($, v);
				}
				static fromJsonString($, v) {
					return new i().fromJsonString($, v);
				}
				static equals($, v) {
					return t.proto3.util.equals(i, $, v);
				}
			}
			e.$r0 = i;
			class w extends t.Message {
				constructor($) {
					super(),
						(this.destination = E.UNSPECIFIED),
						t.proto3.util.initPartial($, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetSessionTokenRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "user", kind: "message", T: i },
						{
							no: 2,
							name: "destination",
							kind: "enum",
							T: t.proto3.getEnumType(E),
						},
						{ no: 3, name: "stub", kind: "scalar", T: 9, opt: !0 },
						{ no: 4, name: "code", kind: "scalar", T: 9, opt: !0 },
					]);
				}
				static fromBinary($, v) {
					return new w().fromBinary($, v);
				}
				static fromJson($, v) {
					return new w().fromJson($, v);
				}
				static fromJsonString($, v) {
					return new w().fromJsonString($, v);
				}
				static equals($, v) {
					return t.proto3.util.equals(w, $, v);
				}
			}
			e.$s0 = w;
			var E;
			(function (y) {
				(y[(y.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(y[(y.PORTAL = 1)] = "PORTAL"),
					(y[(y.AISERVER = 2)] = "AISERVER"),
					(y[(y.AUTH_PROXY = 3)] = "AUTH_PROXY");
			})(E || (e.GetSessionTokenRequest_Destination = E = {})),
				t.proto3.util.setEnumType(
					E,
					"aiserver.v1.GetSessionTokenRequest.Destination",
					[
						{ no: 0, name: "DESTINATION_UNSPECIFIED" },
						{ no: 1, name: "DESTINATION_PORTAL" },
						{ no: 2, name: "DESTINATION_AISERVER" },
						{ no: 3, name: "DESTINATION_AUTH_PROXY" },
					],
				);
			class C extends t.Message {
				constructor($) {
					super(), (this.sessionToken = ""), t.proto3.util.initPartial($, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetSessionTokenResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "session_token", kind: "scalar", T: 9 },
						{ no: 2, name: "id", kind: "scalar", T: 9, opt: !0 },
					]);
				}
				static fromBinary($, v) {
					return new C().fromBinary($, v);
				}
				static fromJson($, v) {
					return new C().fromJson($, v);
				}
				static fromJsonString($, v) {
					return new C().fromJsonString($, v);
				}
				static equals($, v) {
					return t.proto3.util.equals(C, $, v);
				}
			}
			e.$t0 = C;
			class d extends t.Message {
				constructor($) {
					super(), (this.sessionToken = ""), t.proto3.util.initPartial($, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CheckSessionTokenRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "session_token", kind: "scalar", T: 9 },
						{ no: 2, name: "user", kind: "message", T: i },
					]);
				}
				static fromBinary($, v) {
					return new d().fromBinary($, v);
				}
				static fromJson($, v) {
					return new d().fromJson($, v);
				}
				static fromJsonString($, v) {
					return new d().fromJsonString($, v);
				}
				static equals($, v) {
					return t.proto3.util.equals(d, $, v);
				}
			}
			e.$u0 = d;
			class m extends t.Message {
				constructor($) {
					super(), (this.valid = !1), t.proto3.util.initPartial($, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CheckSessionTokenResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "valid", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary($, v) {
					return new m().fromBinary($, v);
				}
				static fromJson($, v) {
					return new m().fromJson($, v);
				}
				static fromJsonString($, v) {
					return new m().fromJsonString($, v);
				}
				static equals($, v) {
					return t.proto3.util.equals(m, $, v);
				}
			}
			e.$v0 = m;
			class r extends t.Message {
				constructor($) {
					super(), (this.email = ""), t.proto3.util.initPartial($, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CustomerIdRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "email", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary($, v) {
					return new r().fromBinary($, v);
				}
				static fromJson($, v) {
					return new r().fromJson($, v);
				}
				static fromJsonString($, v) {
					return new r().fromJsonString($, v);
				}
				static equals($, v) {
					return t.proto3.util.equals(r, $, v);
				}
			}
			e.$w0 = r;
			class u extends t.Message {
				constructor($) {
					super(), t.proto3.util.initPartial($, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CustomerIdResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "customer_id", kind: "scalar", T: 9, opt: !0 },
					]);
				}
				static fromBinary($, v) {
					return new u().fromBinary($, v);
				}
				static fromJson($, v) {
					return new u().fromJson($, v);
				}
				static fromJsonString($, v) {
					return new u().fromJsonString($, v);
				}
				static equals($, v) {
					return t.proto3.util.equals(u, $, v);
				}
			}
			e.$x0 = u;
			class a extends t.Message {
				constructor($) {
					super(),
						(this.isUsingCurrentAndOnboardingFormat = !1),
						(this.privacy = !1),
						t.proto3.util.initPartial($, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.MarkPrivacyRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 2,
							name: "current_privacy_mode",
							kind: "scalar",
							T: 8,
							opt: !0,
						},
						{
							no: 3,
							name: "onboarding_privacy_mode",
							kind: "scalar",
							T: 8,
							opt: !0,
						},
						{
							no: 4,
							name: "is_using_current_and_onboarding_format",
							kind: "scalar",
							T: 8,
						},
						{ no: 1, name: "privacy", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary($, v) {
					return new a().fromBinary($, v);
				}
				static fromJson($, v) {
					return new a().fromJson($, v);
				}
				static fromJsonString($, v) {
					return new a().fromJsonString($, v);
				}
				static equals($, v) {
					return t.proto3.util.equals(a, $, v);
				}
			}
			e.$y0 = a;
			class h extends t.Message {
				constructor($) {
					super(), t.proto3.util.initPartial($, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.MarkPrivacyResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary($, v) {
					return new h().fromBinary($, v);
				}
				static fromJson($, v) {
					return new h().fromJson($, v);
				}
				static fromJsonString($, v) {
					return new h().fromJsonString($, v);
				}
				static equals($, v) {
					return t.proto3.util.equals(h, $, v);
				}
			}
			e.$z0 = h;
			class c extends t.Message {
				constructor($) {
					super(), t.proto3.util.initPartial($, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetEmailRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary($, v) {
					return new c().fromBinary($, v);
				}
				static fromJson($, v) {
					return new c().fromJson($, v);
				}
				static fromJsonString($, v) {
					return new c().fromJsonString($, v);
				}
				static equals($, v) {
					return t.proto3.util.equals(c, $, v);
				}
			}
			e.$A0 = c;
			class n extends t.Message {
				constructor($) {
					super(),
						(this.email = ""),
						(this.signUpType = g.UNSPECIFIED),
						t.proto3.util.initPartial($, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetEmailResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "email", kind: "scalar", T: 9 },
						{
							no: 2,
							name: "sign_up_type",
							kind: "enum",
							T: t.proto3.getEnumType(g),
						},
					]);
				}
				static fromBinary($, v) {
					return new n().fromBinary($, v);
				}
				static fromJson($, v) {
					return new n().fromJson($, v);
				}
				static fromJsonString($, v) {
					return new n().fromJsonString($, v);
				}
				static equals($, v) {
					return t.proto3.util.equals(n, $, v);
				}
			}
			e.$B0 = n;
			var g;
			(function (y) {
				(y[(y.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(y[(y.AUTH_0 = 1)] = "AUTH_0"),
					(y[(y.GITHUB = 2)] = "GITHUB"),
					(y[(y.GOOGLE = 3)] = "GOOGLE"),
					(y[(y.WORKOS = 4)] = "WORKOS");
			})(g || (e.GetEmailResponse_SignUpType = g = {})),
				t.proto3.util.setEnumType(
					g,
					"aiserver.v1.GetEmailResponse.SignUpType",
					[
						{ no: 0, name: "SIGN_UP_TYPE_UNSPECIFIED" },
						{ no: 1, name: "SIGN_UP_TYPE_AUTH_0" },
						{ no: 2, name: "SIGN_UP_TYPE_GITHUB" },
						{ no: 3, name: "SIGN_UP_TYPE_GOOGLE" },
						{ no: 4, name: "SIGN_UP_TYPE_WORKOS" },
					],
				);
			class p extends t.Message {
				constructor($) {
					super(), (this.email = ""), t.proto3.util.initPartial($, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.EmailValidRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "email", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary($, v) {
					return new p().fromBinary($, v);
				}
				static fromJson($, v) {
					return new p().fromJson($, v);
				}
				static fromJsonString($, v) {
					return new p().fromJsonString($, v);
				}
				static equals($, v) {
					return t.proto3.util.equals(p, $, v);
				}
			}
			e.$C0 = p;
			class o extends t.Message {
				constructor($) {
					super(), (this.valid = !1), t.proto3.util.initPartial($, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.EmailValidResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "valid", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary($, v) {
					return new o().fromBinary($, v);
				}
				static fromJson($, v) {
					return new o().fromJson($, v);
				}
				static fromJsonString($, v) {
					return new o().fromJsonString($, v);
				}
				static equals($, v) {
					return t.proto3.util.equals(o, $, v);
				}
			}
			e.$D0 = o;
			class f extends t.Message {
				constructor($) {
					super(),
						(this.machineId = ""),
						(this.applicationName = ""),
						(this.version = ""),
						t.proto3.util.initPartial($, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.DownloadUpdateRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "machine_id", kind: "scalar", T: 9 },
						{ no: 2, name: "application_name", kind: "scalar", T: 9 },
						{ no: 3, name: "version", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary($, v) {
					return new f().fromBinary($, v);
				}
				static fromJson($, v) {
					return new f().fromJson($, v);
				}
				static fromJsonString($, v) {
					return new f().fromJsonString($, v);
				}
				static equals($, v) {
					return t.proto3.util.equals(f, $, v);
				}
			}
			e.$E0 = f;
			class b extends t.Message {
				constructor($) {
					super(), (this.canDownload = !1), t.proto3.util.initPartial($, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.DownloadUpdateResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "can_download", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary($, v) {
					return new b().fromBinary($, v);
				}
				static fromJson($, v) {
					return new b().fromJson($, v);
				}
				static fromJsonString($, v) {
					return new b().fromJsonString($, v);
				}
				static equals($, v) {
					return t.proto3.util.equals(b, $, v);
				}
			}
			e.$F0 = b;
			class s extends t.Message {
				constructor($) {
					super(), (this.useTurbo = !1), t.proto3.util.initPartial($, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SwitchCmdKFractionRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "use_turbo", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary($, v) {
					return new s().fromBinary($, v);
				}
				static fromJson($, v) {
					return new s().fromJson($, v);
				}
				static fromJsonString($, v) {
					return new s().fromJsonString($, v);
				}
				static equals($, v) {
					return t.proto3.util.equals(s, $, v);
				}
			}
			e.$G0 = s;
			class l extends t.Message {
				constructor($) {
					super(), t.proto3.util.initPartial($, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SwitchCmdKFractionResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary($, v) {
					return new l().fromBinary($, v);
				}
				static fromJson($, v) {
					return new l().fromJson($, v);
				}
				static fromJsonString($, v) {
					return new l().fromJsonString($, v);
				}
				static equals($, v) {
					return t.proto3.util.equals(l, $, v);
				}
			}
			e.$H0 = l;
		}),
		