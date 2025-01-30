import '../../../require.js';
import '../../../exports.js';
define(de[120], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.CharCode = void 0);
			var t;
			(function (i) {
				(i[(i.Null = 0)] = "Null"),
					(i[(i.Backspace = 8)] = "Backspace"),
					(i[(i.Tab = 9)] = "Tab"),
					(i[(i.LineFeed = 10)] = "LineFeed"),
					(i[(i.CarriageReturn = 13)] = "CarriageReturn"),
					(i[(i.Space = 32)] = "Space"),
					(i[(i.ExclamationMark = 33)] = "ExclamationMark"),
					(i[(i.DoubleQuote = 34)] = "DoubleQuote"),
					(i[(i.Hash = 35)] = "Hash"),
					(i[(i.DollarSign = 36)] = "DollarSign"),
					(i[(i.PercentSign = 37)] = "PercentSign"),
					(i[(i.Ampersand = 38)] = "Ampersand"),
					(i[(i.SingleQuote = 39)] = "SingleQuote"),
					(i[(i.OpenParen = 40)] = "OpenParen"),
					(i[(i.CloseParen = 41)] = "CloseParen"),
					(i[(i.Asterisk = 42)] = "Asterisk"),
					(i[(i.Plus = 43)] = "Plus"),
					(i[(i.Comma = 44)] = "Comma"),
					(i[(i.Dash = 45)] = "Dash"),
					(i[(i.Period = 46)] = "Period"),
					(i[(i.Slash = 47)] = "Slash"),
					(i[(i.Digit0 = 48)] = "Digit0"),
					(i[(i.Digit1 = 49)] = "Digit1"),
					(i[(i.Digit2 = 50)] = "Digit2"),
					(i[(i.Digit3 = 51)] = "Digit3"),
					(i[(i.Digit4 = 52)] = "Digit4"),
					(i[(i.Digit5 = 53)] = "Digit5"),
					(i[(i.Digit6 = 54)] = "Digit6"),
					(i[(i.Digit7 = 55)] = "Digit7"),
					(i[(i.Digit8 = 56)] = "Digit8"),
					(i[(i.Digit9 = 57)] = "Digit9"),
					(i[(i.Colon = 58)] = "Colon"),
					(i[(i.Semicolon = 59)] = "Semicolon"),
					(i[(i.LessThan = 60)] = "LessThan"),
					(i[(i.Equals = 61)] = "Equals"),
					(i[(i.GreaterThan = 62)] = "GreaterThan"),
					(i[(i.QuestionMark = 63)] = "QuestionMark"),
					(i[(i.AtSign = 64)] = "AtSign"),
					(i[(i.A = 65)] = "A"),
					(i[(i.B = 66)] = "B"),
					(i[(i.C = 67)] = "C"),
					(i[(i.D = 68)] = "D"),
					(i[(i.E = 69)] = "E"),
					(i[(i.F = 70)] = "F"),
					(i[(i.G = 71)] = "G"),
					(i[(i.H = 72)] = "H"),
					(i[(i.I = 73)] = "I"),
					(i[(i.J = 74)] = "J"),
					(i[(i.K = 75)] = "K"),
					(i[(i.L = 76)] = "L"),
					(i[(i.M = 77)] = "M"),
					(i[(i.N = 78)] = "N"),
					(i[(i.O = 79)] = "O"),
					(i[(i.P = 80)] = "P"),
					(i[(i.Q = 81)] = "Q"),
					(i[(i.R = 82)] = "R"),
					(i[(i.S = 83)] = "S"),
					(i[(i.T = 84)] = "T"),
					(i[(i.U = 85)] = "U"),
					(i[(i.V = 86)] = "V"),
					(i[(i.W = 87)] = "W"),
					(i[(i.X = 88)] = "X"),
					(i[(i.Y = 89)] = "Y"),
					(i[(i.Z = 90)] = "Z"),
					(i[(i.OpenSquareBracket = 91)] = "OpenSquareBracket"),
					(i[(i.Backslash = 92)] = "Backslash"),
					(i[(i.CloseSquareBracket = 93)] = "CloseSquareBracket"),
					(i[(i.Caret = 94)] = "Caret"),
					(i[(i.Underline = 95)] = "Underline"),
					(i[(i.BackTick = 96)] = "BackTick"),
					(i[(i.a = 97)] = "a"),
					(i[(i.b = 98)] = "b"),
					(i[(i.c = 99)] = "c"),
					(i[(i.d = 100)] = "d"),
					(i[(i.e = 101)] = "e"),
					(i[(i.f = 102)] = "f"),
					(i[(i.g = 103)] = "g"),
					(i[(i.h = 104)] = "h"),
					(i[(i.i = 105)] = "i"),
					(i[(i.j = 106)] = "j"),
					(i[(i.k = 107)] = "k"),
					(i[(i.l = 108)] = "l"),
					(i[(i.m = 109)] = "m"),
					(i[(i.n = 110)] = "n"),
					(i[(i.o = 111)] = "o"),
					(i[(i.p = 112)] = "p"),
					(i[(i.q = 113)] = "q"),
					(i[(i.r = 114)] = "r"),
					(i[(i.s = 115)] = "s"),
					(i[(i.t = 116)] = "t"),
					(i[(i.u = 117)] = "u"),
					(i[(i.v = 118)] = "v"),
					(i[(i.w = 119)] = "w"),
					(i[(i.x = 120)] = "x"),
					(i[(i.y = 121)] = "y"),
					(i[(i.z = 122)] = "z"),
					(i[(i.OpenCurlyBrace = 123)] = "OpenCurlyBrace"),
					(i[(i.Pipe = 124)] = "Pipe"),
					(i[(i.CloseCurlyBrace = 125)] = "CloseCurlyBrace"),
					(i[(i.Tilde = 126)] = "Tilde"),
					(i[(i.NoBreakSpace = 160)] = "NoBreakSpace"),
					(i[(i.U_Combining_Grave_Accent = 768)] = "U_Combining_Grave_Accent"),
					(i[(i.U_Combining_Acute_Accent = 769)] = "U_Combining_Acute_Accent"),
					(i[(i.U_Combining_Circumflex_Accent = 770)] =
						"U_Combining_Circumflex_Accent"),
					(i[(i.U_Combining_Tilde = 771)] = "U_Combining_Tilde"),
					(i[(i.U_Combining_Macron = 772)] = "U_Combining_Macron"),
					(i[(i.U_Combining_Overline = 773)] = "U_Combining_Overline"),
					(i[(i.U_Combining_Breve = 774)] = "U_Combining_Breve"),
					(i[(i.U_Combining_Dot_Above = 775)] = "U_Combining_Dot_Above"),
					(i[(i.U_Combining_Diaeresis = 776)] = "U_Combining_Diaeresis"),
					(i[(i.U_Combining_Hook_Above = 777)] = "U_Combining_Hook_Above"),
					(i[(i.U_Combining_Ring_Above = 778)] = "U_Combining_Ring_Above"),
					(i[(i.U_Combining_Double_Acute_Accent = 779)] =
						"U_Combining_Double_Acute_Accent"),
					(i[(i.U_Combining_Caron = 780)] = "U_Combining_Caron"),
					(i[(i.U_Combining_Vertical_Line_Above = 781)] =
						"U_Combining_Vertical_Line_Above"),
					(i[(i.U_Combining_Double_Vertical_Line_Above = 782)] =
						"U_Combining_Double_Vertical_Line_Above"),
					(i[(i.U_Combining_Double_Grave_Accent = 783)] =
						"U_Combining_Double_Grave_Accent"),
					(i[(i.U_Combining_Candrabindu = 784)] = "U_Combining_Candrabindu"),
					(i[(i.U_Combining_Inverted_Breve = 785)] =
						"U_Combining_Inverted_Breve"),
					(i[(i.U_Combining_Turned_Comma_Above = 786)] =
						"U_Combining_Turned_Comma_Above"),
					(i[(i.U_Combining_Comma_Above = 787)] = "U_Combining_Comma_Above"),
					(i[(i.U_Combining_Reversed_Comma_Above = 788)] =
						"U_Combining_Reversed_Comma_Above"),
					(i[(i.U_Combining_Comma_Above_Right = 789)] =
						"U_Combining_Comma_Above_Right"),
					(i[(i.U_Combining_Grave_Accent_Below = 790)] =
						"U_Combining_Grave_Accent_Below"),
					(i[(i.U_Combining_Acute_Accent_Below = 791)] =
						"U_Combining_Acute_Accent_Below"),
					(i[(i.U_Combining_Left_Tack_Below = 792)] =
						"U_Combining_Left_Tack_Below"),
					(i[(i.U_Combining_Right_Tack_Below = 793)] =
						"U_Combining_Right_Tack_Below"),
					(i[(i.U_Combining_Left_Angle_Above = 794)] =
						"U_Combining_Left_Angle_Above"),
					(i[(i.U_Combining_Horn = 795)] = "U_Combining_Horn"),
					(i[(i.U_Combining_Left_Half_Ring_Below = 796)] =
						"U_Combining_Left_Half_Ring_Below"),
					(i[(i.U_Combining_Up_Tack_Below = 797)] =
						"U_Combining_Up_Tack_Below"),
					(i[(i.U_Combining_Down_Tack_Below = 798)] =
						"U_Combining_Down_Tack_Below"),
					(i[(i.U_Combining_Plus_Sign_Below = 799)] =
						"U_Combining_Plus_Sign_Below"),
					(i[(i.U_Combining_Minus_Sign_Below = 800)] =
						"U_Combining_Minus_Sign_Below"),
					(i[(i.U_Combining_Palatalized_Hook_Below = 801)] =
						"U_Combining_Palatalized_Hook_Below"),
					(i[(i.U_Combining_Retroflex_Hook_Below = 802)] =
						"U_Combining_Retroflex_Hook_Below"),
					(i[(i.U_Combining_Dot_Below = 803)] = "U_Combining_Dot_Below"),
					(i[(i.U_Combining_Diaeresis_Below = 804)] =
						"U_Combining_Diaeresis_Below"),
					(i[(i.U_Combining_Ring_Below = 805)] = "U_Combining_Ring_Below"),
					(i[(i.U_Combining_Comma_Below = 806)] = "U_Combining_Comma_Below"),
					(i[(i.U_Combining_Cedilla = 807)] = "U_Combining_Cedilla"),
					(i[(i.U_Combining_Ogonek = 808)] = "U_Combining_Ogonek"),
					(i[(i.U_Combining_Vertical_Line_Below = 809)] =
						"U_Combining_Vertical_Line_Below"),
					(i[(i.U_Combining_Bridge_Below = 810)] = "U_Combining_Bridge_Below"),
					(i[(i.U_Combining_Inverted_Double_Arch_Below = 811)] =
						"U_Combining_Inverted_Double_Arch_Below"),
					(i[(i.U_Combining_Caron_Below = 812)] = "U_Combining_Caron_Below"),
					(i[(i.U_Combining_Circumflex_Accent_Below = 813)] =
						"U_Combining_Circumflex_Accent_Below"),
					(i[(i.U_Combining_Breve_Below = 814)] = "U_Combining_Breve_Below"),
					(i[(i.U_Combining_Inverted_Breve_Below = 815)] =
						"U_Combining_Inverted_Breve_Below"),
					(i[(i.U_Combining_Tilde_Below = 816)] = "U_Combining_Tilde_Below"),
					(i[(i.U_Combining_Macron_Below = 817)] = "U_Combining_Macron_Below"),
					(i[(i.U_Combining_Low_Line = 818)] = "U_Combining_Low_Line"),
					(i[(i.U_Combining_Double_Low_Line = 819)] =
						"U_Combining_Double_Low_Line"),
					(i[(i.U_Combining_Tilde_Overlay = 820)] =
						"U_Combining_Tilde_Overlay"),
					(i[(i.U_Combining_Short_Stroke_Overlay = 821)] =
						"U_Combining_Short_Stroke_Overlay"),
					(i[(i.U_Combining_Long_Stroke_Overlay = 822)] =
						"U_Combining_Long_Stroke_Overlay"),
					(i[(i.U_Combining_Short_Solidus_Overlay = 823)] =
						"U_Combining_Short_Solidus_Overlay"),
					(i[(i.U_Combining_Long_Solidus_Overlay = 824)] =
						"U_Combining_Long_Solidus_Overlay"),
					(i[(i.U_Combining_Right_Half_Ring_Below = 825)] =
						"U_Combining_Right_Half_Ring_Below"),
					(i[(i.U_Combining_Inverted_Bridge_Below = 826)] =
						"U_Combining_Inverted_Bridge_Below"),
					(i[(i.U_Combining_Square_Below = 827)] = "U_Combining_Square_Below"),
					(i[(i.U_Combining_Seagull_Below = 828)] =
						"U_Combining_Seagull_Below"),
					(i[(i.U_Combining_X_Above = 829)] = "U_Combining_X_Above"),
					(i[(i.U_Combining_Vertical_Tilde = 830)] =
						"U_Combining_Vertical_Tilde"),
					(i[(i.U_Combining_Double_Overline = 831)] =
						"U_Combining_Double_Overline"),
					(i[(i.U_Combining_Grave_Tone_Mark = 832)] =
						"U_Combining_Grave_Tone_Mark"),
					(i[(i.U_Combining_Acute_Tone_Mark = 833)] =
						"U_Combining_Acute_Tone_Mark"),
					(i[(i.U_Combining_Greek_Perispomeni = 834)] =
						"U_Combining_Greek_Perispomeni"),
					(i[(i.U_Combining_Greek_Koronis = 835)] =
						"U_Combining_Greek_Koronis"),
					(i[(i.U_Combining_Greek_Dialytika_Tonos = 836)] =
						"U_Combining_Greek_Dialytika_Tonos"),
					(i[(i.U_Combining_Greek_Ypogegrammeni = 837)] =
						"U_Combining_Greek_Ypogegrammeni"),
					(i[(i.U_Combining_Bridge_Above = 838)] = "U_Combining_Bridge_Above"),
					(i[(i.U_Combining_Equals_Sign_Below = 839)] =
						"U_Combining_Equals_Sign_Below"),
					(i[(i.U_Combining_Double_Vertical_Line_Below = 840)] =
						"U_Combining_Double_Vertical_Line_Below"),
					(i[(i.U_Combining_Left_Angle_Below = 841)] =
						"U_Combining_Left_Angle_Below"),
					(i[(i.U_Combining_Not_Tilde_Above = 842)] =
						"U_Combining_Not_Tilde_Above"),
					(i[(i.U_Combining_Homothetic_Above = 843)] =
						"U_Combining_Homothetic_Above"),
					(i[(i.U_Combining_Almost_Equal_To_Above = 844)] =
						"U_Combining_Almost_Equal_To_Above"),
					(i[(i.U_Combining_Left_Right_Arrow_Below = 845)] =
						"U_Combining_Left_Right_Arrow_Below"),
					(i[(i.U_Combining_Upwards_Arrow_Below = 846)] =
						"U_Combining_Upwards_Arrow_Below"),
					(i[(i.U_Combining_Grapheme_Joiner = 847)] =
						"U_Combining_Grapheme_Joiner"),
					(i[(i.U_Combining_Right_Arrowhead_Above = 848)] =
						"U_Combining_Right_Arrowhead_Above"),
					(i[(i.U_Combining_Left_Half_Ring_Above = 849)] =
						"U_Combining_Left_Half_Ring_Above"),
					(i[(i.U_Combining_Fermata = 850)] = "U_Combining_Fermata"),
					(i[(i.U_Combining_X_Below = 851)] = "U_Combining_X_Below"),
					(i[(i.U_Combining_Left_Arrowhead_Below = 852)] =
						"U_Combining_Left_Arrowhead_Below"),
					(i[(i.U_Combining_Right_Arrowhead_Below = 853)] =
						"U_Combining_Right_Arrowhead_Below"),
					(i[(i.U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below = 854)] =
						"U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below"),
					(i[(i.U_Combining_Right_Half_Ring_Above = 855)] =
						"U_Combining_Right_Half_Ring_Above"),
					(i[(i.U_Combining_Dot_Above_Right = 856)] =
						"U_Combining_Dot_Above_Right"),
					(i[(i.U_Combining_Asterisk_Below = 857)] =
						"U_Combining_Asterisk_Below"),
					(i[(i.U_Combining_Double_Ring_Below = 858)] =
						"U_Combining_Double_Ring_Below"),
					(i[(i.U_Combining_Zigzag_Above = 859)] = "U_Combining_Zigzag_Above"),
					(i[(i.U_Combining_Double_Breve_Below = 860)] =
						"U_Combining_Double_Breve_Below"),
					(i[(i.U_Combining_Double_Breve = 861)] = "U_Combining_Double_Breve"),
					(i[(i.U_Combining_Double_Macron = 862)] =
						"U_Combining_Double_Macron"),
					(i[(i.U_Combining_Double_Macron_Below = 863)] =
						"U_Combining_Double_Macron_Below"),
					(i[(i.U_Combining_Double_Tilde = 864)] = "U_Combining_Double_Tilde"),
					(i[(i.U_Combining_Double_Inverted_Breve = 865)] =
						"U_Combining_Double_Inverted_Breve"),
					(i[(i.U_Combining_Double_Rightwards_Arrow_Below = 866)] =
						"U_Combining_Double_Rightwards_Arrow_Below"),
					(i[(i.U_Combining_Latin_Small_Letter_A = 867)] =
						"U_Combining_Latin_Small_Letter_A"),
					(i[(i.U_Combining_Latin_Small_Letter_E = 868)] =
						"U_Combining_Latin_Small_Letter_E"),
					(i[(i.U_Combining_Latin_Small_Letter_I = 869)] =
						"U_Combining_Latin_Small_Letter_I"),
					(i[(i.U_Combining_Latin_Small_Letter_O = 870)] =
						"U_Combining_Latin_Small_Letter_O"),
					(i[(i.U_Combining_Latin_Small_Letter_U = 871)] =
						"U_Combining_Latin_Small_Letter_U"),
					(i[(i.U_Combining_Latin_Small_Letter_C = 872)] =
						"U_Combining_Latin_Small_Letter_C"),
					(i[(i.U_Combining_Latin_Small_Letter_D = 873)] =
						"U_Combining_Latin_Small_Letter_D"),
					(i[(i.U_Combining_Latin_Small_Letter_H = 874)] =
						"U_Combining_Latin_Small_Letter_H"),
					(i[(i.U_Combining_Latin_Small_Letter_M = 875)] =
						"U_Combining_Latin_Small_Letter_M"),
					(i[(i.U_Combining_Latin_Small_Letter_R = 876)] =
						"U_Combining_Latin_Small_Letter_R"),
					(i[(i.U_Combining_Latin_Small_Letter_T = 877)] =
						"U_Combining_Latin_Small_Letter_T"),
					(i[(i.U_Combining_Latin_Small_Letter_V = 878)] =
						"U_Combining_Latin_Small_Letter_V"),
					(i[(i.U_Combining_Latin_Small_Letter_X = 879)] =
						"U_Combining_Latin_Small_Letter_X"),
					(i[(i.LINE_SEPARATOR = 8232)] = "LINE_SEPARATOR"),
					(i[(i.PARAGRAPH_SEPARATOR = 8233)] = "PARAGRAPH_SEPARATOR"),
					(i[(i.NEXT_LINE = 133)] = "NEXT_LINE"),
					(i[(i.U_CIRCUMFLEX = 94)] = "U_CIRCUMFLEX"),
					(i[(i.U_GRAVE_ACCENT = 96)] = "U_GRAVE_ACCENT"),
					(i[(i.U_DIAERESIS = 168)] = "U_DIAERESIS"),
					(i[(i.U_MACRON = 175)] = "U_MACRON"),
					(i[(i.U_ACUTE_ACCENT = 180)] = "U_ACUTE_ACCENT"),
					(i[(i.U_CEDILLA = 184)] = "U_CEDILLA"),
					(i[(i.U_MODIFIER_LETTER_LEFT_ARROWHEAD = 706)] =
						"U_MODIFIER_LETTER_LEFT_ARROWHEAD"),
					(i[(i.U_MODIFIER_LETTER_RIGHT_ARROWHEAD = 707)] =
						"U_MODIFIER_LETTER_RIGHT_ARROWHEAD"),
					(i[(i.U_MODIFIER_LETTER_UP_ARROWHEAD = 708)] =
						"U_MODIFIER_LETTER_UP_ARROWHEAD"),
					(i[(i.U_MODIFIER_LETTER_DOWN_ARROWHEAD = 709)] =
						"U_MODIFIER_LETTER_DOWN_ARROWHEAD"),
					(i[(i.U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING = 722)] =
						"U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING"),
					(i[(i.U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING = 723)] =
						"U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING"),
					(i[(i.U_MODIFIER_LETTER_UP_TACK = 724)] =
						"U_MODIFIER_LETTER_UP_TACK"),
					(i[(i.U_MODIFIER_LETTER_DOWN_TACK = 725)] =
						"U_MODIFIER_LETTER_DOWN_TACK"),
					(i[(i.U_MODIFIER_LETTER_PLUS_SIGN = 726)] =
						"U_MODIFIER_LETTER_PLUS_SIGN"),
					(i[(i.U_MODIFIER_LETTER_MINUS_SIGN = 727)] =
						"U_MODIFIER_LETTER_MINUS_SIGN"),
					(i[(i.U_BREVE = 728)] = "U_BREVE"),
					(i[(i.U_DOT_ABOVE = 729)] = "U_DOT_ABOVE"),
					(i[(i.U_RING_ABOVE = 730)] = "U_RING_ABOVE"),
					(i[(i.U_OGONEK = 731)] = "U_OGONEK"),
					(i[(i.U_SMALL_TILDE = 732)] = "U_SMALL_TILDE"),
					(i[(i.U_DOUBLE_ACUTE_ACCENT = 733)] = "U_DOUBLE_ACUTE_ACCENT"),
					(i[(i.U_MODIFIER_LETTER_RHOTIC_HOOK = 734)] =
						"U_MODIFIER_LETTER_RHOTIC_HOOK"),
					(i[(i.U_MODIFIER_LETTER_CROSS_ACCENT = 735)] =
						"U_MODIFIER_LETTER_CROSS_ACCENT"),
					(i[(i.U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR = 741)] =
						"U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR"),
					(i[(i.U_MODIFIER_LETTER_HIGH_TONE_BAR = 742)] =
						"U_MODIFIER_LETTER_HIGH_TONE_BAR"),
					(i[(i.U_MODIFIER_LETTER_MID_TONE_BAR = 743)] =
						"U_MODIFIER_LETTER_MID_TONE_BAR"),
					(i[(i.U_MODIFIER_LETTER_LOW_TONE_BAR = 744)] =
						"U_MODIFIER_LETTER_LOW_TONE_BAR"),
					(i[(i.U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR = 745)] =
						"U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR"),
					(i[(i.U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK = 746)] =
						"U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK"),
					(i[(i.U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK = 747)] =
						"U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK"),
					(i[(i.U_MODIFIER_LETTER_UNASPIRATED = 749)] =
						"U_MODIFIER_LETTER_UNASPIRATED"),
					(i[(i.U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD = 751)] =
						"U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD"),
					(i[(i.U_MODIFIER_LETTER_LOW_UP_ARROWHEAD = 752)] =
						"U_MODIFIER_LETTER_LOW_UP_ARROWHEAD"),
					(i[(i.U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD = 753)] =
						"U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD"),
					(i[(i.U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD = 754)] =
						"U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD"),
					(i[(i.U_MODIFIER_LETTER_LOW_RING = 755)] =
						"U_MODIFIER_LETTER_LOW_RING"),
					(i[(i.U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT = 756)] =
						"U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT"),
					(i[(i.U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT = 757)] =
						"U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT"),
					(i[(i.U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT = 758)] =
						"U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT"),
					(i[(i.U_MODIFIER_LETTER_LOW_TILDE = 759)] =
						"U_MODIFIER_LETTER_LOW_TILDE"),
					(i[(i.U_MODIFIER_LETTER_RAISED_COLON = 760)] =
						"U_MODIFIER_LETTER_RAISED_COLON"),
					(i[(i.U_MODIFIER_LETTER_BEGIN_HIGH_TONE = 761)] =
						"U_MODIFIER_LETTER_BEGIN_HIGH_TONE"),
					(i[(i.U_MODIFIER_LETTER_END_HIGH_TONE = 762)] =
						"U_MODIFIER_LETTER_END_HIGH_TONE"),
					(i[(i.U_MODIFIER_LETTER_BEGIN_LOW_TONE = 763)] =
						"U_MODIFIER_LETTER_BEGIN_LOW_TONE"),
					(i[(i.U_MODIFIER_LETTER_END_LOW_TONE = 764)] =
						"U_MODIFIER_LETTER_END_LOW_TONE"),
					(i[(i.U_MODIFIER_LETTER_SHELF = 765)] = "U_MODIFIER_LETTER_SHELF"),
					(i[(i.U_MODIFIER_LETTER_OPEN_SHELF = 766)] =
						"U_MODIFIER_LETTER_OPEN_SHELF"),
					(i[(i.U_MODIFIER_LETTER_LOW_LEFT_ARROW = 767)] =
						"U_MODIFIER_LETTER_LOW_LEFT_ARROW"),
					(i[(i.U_GREEK_LOWER_NUMERAL_SIGN = 885)] =
						"U_GREEK_LOWER_NUMERAL_SIGN"),
					(i[(i.U_GREEK_TONOS = 900)] = "U_GREEK_TONOS"),
					(i[(i.U_GREEK_DIALYTIKA_TONOS = 901)] = "U_GREEK_DIALYTIKA_TONOS"),
					(i[(i.U_GREEK_KORONIS = 8125)] = "U_GREEK_KORONIS"),
					(i[(i.U_GREEK_PSILI = 8127)] = "U_GREEK_PSILI"),
					(i[(i.U_GREEK_PERISPOMENI = 8128)] = "U_GREEK_PERISPOMENI"),
					(i[(i.U_GREEK_DIALYTIKA_AND_PERISPOMENI = 8129)] =
						"U_GREEK_DIALYTIKA_AND_PERISPOMENI"),
					(i[(i.U_GREEK_PSILI_AND_VARIA = 8141)] = "U_GREEK_PSILI_AND_VARIA"),
					(i[(i.U_GREEK_PSILI_AND_OXIA = 8142)] = "U_GREEK_PSILI_AND_OXIA"),
					(i[(i.U_GREEK_PSILI_AND_PERISPOMENI = 8143)] =
						"U_GREEK_PSILI_AND_PERISPOMENI"),
					(i[(i.U_GREEK_DASIA_AND_VARIA = 8157)] = "U_GREEK_DASIA_AND_VARIA"),
					(i[(i.U_GREEK_DASIA_AND_OXIA = 8158)] = "U_GREEK_DASIA_AND_OXIA"),
					(i[(i.U_GREEK_DASIA_AND_PERISPOMENI = 8159)] =
						"U_GREEK_DASIA_AND_PERISPOMENI"),
					(i[(i.U_GREEK_DIALYTIKA_AND_VARIA = 8173)] =
						"U_GREEK_DIALYTIKA_AND_VARIA"),
					(i[(i.U_GREEK_DIALYTIKA_AND_OXIA = 8174)] =
						"U_GREEK_DIALYTIKA_AND_OXIA"),
					(i[(i.U_GREEK_VARIA = 8175)] = "U_GREEK_VARIA"),
					(i[(i.U_GREEK_OXIA = 8189)] = "U_GREEK_OXIA"),
					(i[(i.U_GREEK_DASIA = 8190)] = "U_GREEK_DASIA"),
					(i[(i.U_IDEOGRAPHIC_FULL_STOP = 12290)] = "U_IDEOGRAPHIC_FULL_STOP"),
					(i[(i.U_LEFT_CORNER_BRACKET = 12300)] = "U_LEFT_CORNER_BRACKET"),
					(i[(i.U_RIGHT_CORNER_BRACKET = 12301)] = "U_RIGHT_CORNER_BRACKET"),
					(i[(i.U_LEFT_BLACK_LENTICULAR_BRACKET = 12304)] =
						"U_LEFT_BLACK_LENTICULAR_BRACKET"),
					(i[(i.U_RIGHT_BLACK_LENTICULAR_BRACKET = 12305)] =
						"U_RIGHT_BLACK_LENTICULAR_BRACKET"),
					(i[(i.U_OVERLINE = 8254)] = "U_OVERLINE"),
					(i[(i.UTF8_BOM = 65279)] = "UTF8_BOM"),
					(i[(i.U_FULLWIDTH_SEMICOLON = 65307)] = "U_FULLWIDTH_SEMICOLON"),
					(i[(i.U_FULLWIDTH_COMMA = 65292)] = "U_FULLWIDTH_COMMA");
			})(t || (e.CharCode = t = {}));
		}),
		