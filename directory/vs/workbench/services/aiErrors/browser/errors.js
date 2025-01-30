import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/bufbuild/connect.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../base/common/constants.js';
define(de[1286], he([1, 0, 340, 83, 58]), function (ce /*require*/,
 e /*exports*/,
 t /*connect*/,
 i /*utils_pb*/,
 w /*constants*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Q6b = void 0);
			class E extends t.ConnectError {
				constructor(d, m, r) {
					super(
						`You have exceeded your usage limit for the ${d} model. Please upgrade your account.`,
					),
						(this.model = d),
						(this.error = m),
						(this.rerun = r);
				}
				toMessage() {
					switch (this.error) {
						case i.ErrorDetails_Error.FREE_USER_RATE_LIMIT_EXCEEDED:
							return `It seems like you're making an too many requests too quickly. Please try again in a minute. If you think this is a mistake, please contact ${w.$vV}`;
						case i.ErrorDetails_Error.PRO_USER_RATE_LIMIT_EXCEEDED:
							return `It seems like you're making an unusual number of AI requests. Please try again later. If you think this is a mistake, please contact ${w.$vV}`;
						case i.ErrorDetails_Error.FREE_USER_USAGE_LIMIT:
							return `Our servers are currently overloaded for non-pro users, and you've used your free quota. Please try again in a few minutes. If you think this is a mistake, please contact ${w.$vV}`;
						case i.ErrorDetails_Error.PRO_USER_USAGE_LIMIT:
							return `We're currently recieving a large number of slow requests and could not queue yours. Please try again. If you see this message often, please contact ${w.$vV}`;
						case i.ErrorDetails_Error.BAD_API_KEY:
							return "The provided API key is invalid. Please provide a valid API key.";
						case i.ErrorDetails_Error.BAD_MODEL_NAME:
							return `The model ${this.model} does not work with your current plan or api key`;
						case i.ErrorDetails_Error.INVALID_AUTH_ID:
						case i.ErrorDetails_Error.NOT_LOGGED_IN:
						case i.ErrorDetails_Error.AGENT_REQUIRES_LOGIN:
						case i.ErrorDetails_Error.USER_NOT_FOUND:
							return "You are not logged in. Please log in to continue.";
						case i.ErrorDetails_Error.NOT_HIGH_ENOUGH_PERMISSIONS:
							return "Without the pro plan, you do not have access to this feature/model.";
						case i.ErrorDetails_Error.UNSPECIFIED:
						default:
							return "An unspecified error occurred. Please try again";
					}
				}
			}
			e.$Q6b = E;
		}),
		