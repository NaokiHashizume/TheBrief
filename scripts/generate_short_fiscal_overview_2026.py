#!/usr/bin/env python3

from __future__ import annotations

import os
import sys
from pathlib import Path


ENGINE_DIR = Path(os.environ.get("THEBRIEF_ENGINE_DIR", "/Users/naokihashizume/Desktop"))
if str(ENGINE_DIR) not in sys.path:
    sys.path.insert(0, str(ENGINE_DIR))

from thebrief_short_engine import render_short


CONFIG = {
    "topic": "fiscal_overview_2026",
    "rate": "+15%",
    "narrations": [
        ("s1", "2026年度の一般会計は、およそ115兆円です。かなり大きい。", 0.3),
        ("s2", "でも注目点は規模より構造です。社会保障と国債費が特に重い。", 0.3),
        ("s3", "歳入のうち、およそ30兆円は国債発行。つまり借金です。", 0.3),
        ("s4", "社会保障は約38兆円、国債費は約28兆円。ここで大半が決まります。", 0.3),
        ("s5", "しかも普通国債残高は約1150兆円。対GDP比でも極めて重い。", 0.3),
        ("s6", "金利が上がると利払い費も増えるので、財政はさらに固くなります。", 0.3),
        ("s7", "だから論点は、何を削るかより、どの負担をどう分けるかです。", 0.3),
        ("s8", "日本財政の全体像、詳しくはザ・ブリーフで。", 0.4),
    ],
    "slides": [
        {
            "kind": "hook",
            "accent": "RED",
            "eyebrow": "ECONOMY / FISCAL",
            "big": "115兆円",
            "big_suffix": "2026年度 一般会計",
            "title": "日本の財政、\nまず見るべきは規模より構造",
            "subtitle": "The Brief の財政解説記事をもとに、歳入・歳出・国債の全体像を1分で整理。",
            "note": "https://thebrief.info/economy/japan-fiscal-overview-2026",
        },
        {
            "kind": "cards",
            "accent": "AMBER",
            "eyebrow": "THE FRAME",
            "title": "まず、どこを見るべきか",
            "items": [
                {"title": "歳出総額", "body": "一般会計は約115兆円。コロナ前より大きい。", "color": "RED"},
                {"title": "社会保障", "body": "高齢化で自然増が続き、約38兆円まで膨らむ。", "color": "AMBER"},
                {"title": "国債費", "body": "返済と利払いで約28兆円。金利上昇で重くなる。", "color": "PURPLE"},
                {"title": "財政の硬直化", "body": "自由に動かせる予算はかなり限られる。", "color": "CYAN"},
            ],
        },
        {
            "kind": "bars",
            "accent": "BLUE",
            "eyebrow": "REVENUE",
            "title": "歳入だけでは足りない",
            "subtitle": "税収が伸びても、国債発行への依存は残る。",
            "items": [
                {"label": "税収", "value": "約78兆円", "ratio": 0.68, "color": "GREEN"},
                {"label": "その他収入", "value": "約7兆円", "ratio": 0.06, "color": "BLUE"},
                {"label": "国債発行", "value": "約30兆円", "ratio": 0.26, "color": "RED"},
                {"label": "借金依存度", "value": "約26%", "ratio": 0.26, "color": "AMBER"},
            ],
        },
        {
            "kind": "bars",
            "accent": "RED",
            "eyebrow": "SPENDING",
            "title": "重いのは、この2つ",
            "subtitle": "社会保障と国債費で、歳出の半分超を占める。",
            "items": [
                {"label": "社会保障関係費", "value": "約38兆円", "ratio": 0.33, "color": "RED"},
                {"label": "国債費", "value": "約28兆円", "ratio": 0.24, "color": "AMBER"},
                {"label": "地方交付税等", "value": "約17兆円", "ratio": 0.15, "color": "BLUE"},
                {"label": "残りの政策経費", "value": "約32兆円", "ratio": 0.28, "color": "CYAN"},
            ],
        },
        {
            "kind": "bars",
            "accent": "PURPLE",
            "eyebrow": "DEBT STOCK",
            "title": "積み上がった借金はさらに大きい",
            "subtitle": "記事では普通国債残高の重さも強調している。",
            "items": [
                {"label": "普通国債残高", "value": "約1,150兆円", "ratio": 1.0, "color": "PURPLE"},
                {"label": "対GDP比", "value": "約260%", "ratio": 0.78, "color": "RED"},
                {"label": "新規国債発行", "value": "年約30兆円", "ratio": 0.26, "color": "AMBER"},
                {"label": "先進国比較", "value": "極めて重い水準", "ratio": 0.92, "color": "CYAN"},
            ],
        },
        {
            "kind": "cards",
            "accent": "CYAN",
            "eyebrow": "WHY IT MATTERS",
            "title": "なぜ今つらいのか",
            "items": [
                {"title": "金利上昇", "body": "低金利時代が終わると、利払い費が増えやすい。", "color": "AMBER"},
                {"title": "防衛費増", "body": "安全保障コストも追加で財政を圧迫する。", "color": "RED"},
                {"title": "高齢化", "body": "社会保障費は自然に増えやすく、抑えにくい。", "color": "CYAN"},
                {"title": "政策余地減", "body": "新しい投資や減税の余白が狭くなる。", "color": "PURPLE"},
            ],
        },
        {
            "kind": "summary",
            "accent": "RED",
            "eyebrow": "THE POINT",
            "title": "問題は、予算の大きさより\n固定費化した構造",
            "points": [
                "税収が増えても、社会保障と国債費の重さは簡単に消えません。",
                "金利が上がるほど、借金の利払いが政策の自由度を削ります。",
                "財政論は、増税か削減かだけでなく、負担配分の設計が核心です。",
            ],
        },
        {
            "kind": "cta",
            "accent": "RED",
            "eyebrow": "READ MORE",
            "title": "日本の財政は、\n数字を並べると構造が見える。",
            "body": "歳入、歳出、国債残高、利払いのつながりを\nThe Brief で詳しく解説しています。",
            "url": "thebrief.info",
            "note": "詳しくはザ・ブリーフで。",
        },
    ],
}


if __name__ == "__main__":
    render_short(CONFIG)
