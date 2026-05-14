export const VISUAL_LIBRARY = {
  "categories": {
    "caries": {
      "icon": "🦷",
      "uk": "Карієс",
      "cs": "Kaz",
      "en": "Caries"
    },
    "pulp": {
      "icon": "🔥",
      "uk": "Пульпа / пульпіт",
      "cs": "Dřeň / pulpitida",
      "en": "Pulp / pulpitis"
    },
    "endo": {
      "icon": "🧬",
      "uk": "Ендодонтія",
      "cs": "Endodoncie",
      "en": "Endodontics"
    },
    "perio": {
      "icon": "🩸",
      "uk": "Пародонтологія",
      "cs": "Parodontologie",
      "en": "Periodontology"
    },
    "implants": {
      "icon": "🔩",
      "uk": "Імплантологія",
      "cs": "Implantologie",
      "en": "Implantology"
    },
    "surgery": {
      "icon": "🦷",
      "uk": "Хірургія",
      "cs": "Chirurgie",
      "en": "Surgery"
    },
    "prosthetics": {
      "icon": "👑",
      "uk": "Протезування",
      "cs": "Protetika",
      "en": "Prosthetics"
    },
    "hygiene": {
      "icon": "🪥",
      "uk": "Гігієна",
      "cs": "Hygiena",
      "en": "Hygiene"
    },
    "radiology": {
      "icon": "📷",
      "uk": "OPG / RTG",
      "cs": "OPG / RTG",
      "en": "OPG / X-ray"
    }
  },
  "items": [
    {
      "id": "tooth_anatomy_section",
      "category": "caries",
      "audience": "all",
      "type": "image",
      "icon": "🦷",
      "title": {
        "uk": "Будова зуба в розрізі",
        "cs": "Stavba zubu v řezu",
        "en": "Tooth anatomy cross-section"
      },
      "description": {
        "uk": "Емаль, дентин, пульпа, корінь, ясна та кістка.",
        "cs": "Sklovina, dentin, dřeň, kořen, dáseň a kost.",
        "en": "Enamel, dentin, pulp, root, gum and bone."
      },
      "patientText": {
        "uk": "Зуб має тверду зовнішню оболонку — емаль. Під нею є дентин, а всередині розташована пульпа з нервами та судинами.",
        "cs": "Zub má tvrdou vnější vrstvu — sklovinu. Pod ní je dentin a uvnitř je zubní dřeň s nervy a cévami.",
        "en": "A tooth has a hard outer layer called enamel. Under it is dentin, and inside is the pulp with nerves and blood vessels."
      },
      "tags": [
        "tooth",
        "anatomy",
        "enamel",
        "dentin",
        "pulp"
      ],
      "asset": "assets/visuals/realistic/tooth_anatomy_section_v2.jpg",
      "recommendedFor": [
        "tooth",
        "anatomy",
        "enamel",
        "dentin"
      ]
    },
    {
      "id": "early_enamel_caries",
      "category": "caries",
      "audience": "patient",
      "type": "image",
      "icon": "⚪",
      "title": {
        "uk": "Початковий карієс в емалі",
        "cs": "Počáteční kaz ve sklovině",
        "en": "Early enamel caries"
      },
      "description": {
        "uk": "Поверхневе ураження без проникнення в дентин.",
        "cs": "Povrchové poškození bez průniku do dentinu.",
        "en": "Surface lesion without dentin involvement."
      },
      "patientText": {
        "uk": "На ранньому етапі карієс уражає тільки поверхневий шар зуба. Часто його можна лікувати мінімально інвазивно.",
        "cs": "V rané fázi kaz postihuje jen povrchovou vrstvu zubu. Často lze postupovat minimálně invazivně.",
        "en": "At an early stage, decay affects only the surface layer of the tooth and can often be treated minimally invasively."
      },
      "tags": [
        "caries",
        "enamel",
        "white spot",
        "prevention"
      ],
      "asset": "assets/visuals/realistic/early_enamel_caries.jpg",
      "recommendedFor": [
        "caries",
        "enamel",
        "white spot",
        "prevention"
      ]
    },
    {
      "id": "early_fissure_caries",
      "category": "caries",
      "audience": "patient",
      "type": "image",
      "icon": "🦷",
      "title": {
        "uk": "Початковий фісурний карієс",
        "cs": "Počáteční fisurální kaz",
        "en": "Early fissure caries"
      },
      "description": {
        "uk": "Невеликий карієс у борозенках жувальної поверхні.",
        "cs": "Malý kaz v rýhách žvýkací plošky.",
        "en": "A small lesion in the grooves of the chewing surface."
      },
      "patientText": {
        "uk": "Фісури на жувальній поверхні легко затримують наліт. На ранньому етапі карієс може виглядати маленьким, але поступово проникати глибше.",
        "cs": "Fisury na žvýkací ploše snadno zachytávají plak. V počáteční fázi může kaz vypadat malý, ale postupně pronikat hlouběji.",
        "en": "Grooves on the chewing surface trap plaque easily. Early fissure caries may look small but can gradually progress deeper."
      },
      "tags": [
        "caries",
        "fissure",
        "occlusal",
        "early"
      ],
      "asset": "assets/visuals/realistic/early_fissure_caries.jpg",
      "recommendedFor": [
        "caries",
        "fissure",
        "occlusal",
        "early"
      ]
    },
    {
      "id": "dentin_caries",
      "category": "caries",
      "audience": "patient",
      "type": "image",
      "icon": "🟤",
      "title": {
        "uk": "Карієс у дентині",
        "cs": "Kaz v dentinu",
        "en": "Dentin caries"
      },
      "description": {
        "uk": "Ураження проходить глибше і наближається до пульпи.",
        "cs": "Poškození postupuje hlouběji a blíží se ke dřeni.",
        "en": "The lesion progresses deeper and approaches the pulp."
      },
      "patientText": {
        "uk": "Коли карієс проходить у дентин, ураження розвивається швидше. Зуб може реагувати на холодне, солодке або на їжу.",
        "cs": "Když kaz pronikne do dentinu, postupuje rychleji. Zub může reagovat na studené, sladké nebo jídlo.",
        "en": "When decay reaches dentin, it can progress faster. The tooth may react to cold, sweets or food."
      },
      "tags": [
        "caries",
        "dentin",
        "sensitivity",
        "restoration"
      ],
      "asset": "assets/visuals/realistic/dentin_caries.jpg",
      "recommendedFor": [
        "caries",
        "dentin",
        "sensitivity",
        "restoration"
      ]
    },
    {
      "id": "caries_to_pulp_progression",
      "category": "caries",
      "audience": "patient",
      "type": "animation",
      "icon": "🔥",
      "title": {
        "uk": "Як карієс доходить до пульпи",
        "cs": "Jak kaz proniká ke dřeni",
        "en": "How decay reaches the pulp"
      },
      "description": {
        "uk": "4 етапи: емаль → дентин → пульпа.",
        "cs": "4 kroky: sklovina → dentin → dřeň.",
        "en": "4 steps: enamel → dentin → pulp."
      },
      "patientText": {
        "uk": "Без лікування карієс поступово проходить глибше. Коли бактерії доходять до пульпи, може виникнути сильний біль і потреба в лікуванні каналів.",
        "cs": "Bez léčby kaz postupně proniká hlouběji. Když bakterie dosáhnou dřeně, může vzniknout silná bolest a potřeba ošetření kořenových kanálků.",
        "en": "Without treatment, decay gradually moves deeper. When bacteria reach the pulp, severe pain and root canal treatment may become necessary."
      },
      "tags": [
        "caries",
        "pulp",
        "pulpitis",
        "pain",
        "endo"
      ],
      "asset": "assets/visuals/realistic/caries_to_pulp_progression.jpg",
      "recommendedFor": [
        "caries",
        "pulp",
        "pulpitis",
        "pain"
      ]
    },
    {
      "id": "untreated_caries_consequences",
      "category": "caries",
      "audience": "patient",
      "type": "image",
      "icon": "⚠️",
      "title": {
        "uk": "Що буде, якщо не лікувати карієс",
        "cs": "Co se stane, když se kaz neléčí",
        "en": "What happens if decay is untreated"
      },
      "description": {
        "uk": "Карієс → пульпіт → запалення біля кореня.",
        "cs": "Kaz → zánět dřeně → zánět u kořene.",
        "en": "Decay → pulpitis → inflammation near the root."
      },
      "patientText": {
        "uk": "Нелікований карієс може перейти у запалення нерва, а потім у запалення біля кореня зуба.",
        "cs": "Neléčený kaz může přejít do zánětu nervu a později do zánětu u kořene zubu.",
        "en": "Untreated decay can lead to inflammation of the nerve and later inflammation near the tooth root."
      },
      "tags": [
        "caries",
        "pulpitis",
        "abscess",
        "infection"
      ],
      "asset": "assets/visuals/caries/untreated_caries_consequences.svg",
      "recommendedFor": [
        "caries",
        "pulpitis",
        "abscess",
        "infection"
      ]
    },
    {
      "id": "pulpitis_inflamed_pulp",
      "category": "pulp",
      "audience": "patient",
      "type": "image",
      "icon": "🔥",
      "title": {
        "uk": "Запалення пульпи",
        "cs": "Zánět zubní dřeně",
        "en": "Inflamed dental pulp"
      },
      "description": {
        "uk": "Пульпа всередині зуба запалена.",
        "cs": "Dřeň uvnitř zubu je zanícená.",
        "en": "The pulp inside the tooth is inflamed."
      },
      "patientText": {
        "uk": "Пульпіт — це запалення внутрішньої частини зуба, де проходять нерви та судини. Саме тому зуб може сильно боліти.",
        "cs": "Pulpitida je zánět vnitřní části zubu, kde jsou nervy a cévy. Proto může zub velmi bolet.",
        "en": "Pulpitis is inflammation of the inner part of the tooth where nerves and vessels are located. This is why the tooth may hurt strongly."
      },
      "tags": [
        "pulpitis",
        "pulp",
        "pain",
        "nerve"
      ],
      "asset": "assets/visuals/pulp/pulpitis_inflamed_pulp.svg",
      "recommendedFor": [
        "pulpitis",
        "pulp",
        "pain",
        "nerve"
      ]
    },
    {
      "id": "caries_vs_pulpitis",
      "category": "pulp",
      "audience": "patient",
      "type": "image",
      "icon": "↔️",
      "title": {
        "uk": "Карієс vs пульпіт",
        "cs": "Kaz vs. pulpitida",
        "en": "Caries vs pulpitis"
      },
      "description": {
        "uk": "Порівняння поверхневого ураження та запалення пульпи.",
        "cs": "Srovnání povrchového kazu a zánětu dřeně.",
        "en": "Comparison of decay and pulp inflammation."
      },
      "patientText": {
        "uk": "Карієс уражає тверді тканини зуба. Пульпіт виникає тоді, коли запалюється внутрішня частина зуба — пульпа.",
        "cs": "Kaz poškozuje tvrdé tkáně zubu. Pulpitida vzniká tehdy, když se zanítí vnitřní část zubu — dřeň.",
        "en": "Decay affects the hard tissues of the tooth. Pulpitis occurs when the inner part of the tooth — the pulp — becomes inflamed."
      },
      "tags": [
        "caries",
        "pulpitis",
        "diagnosis"
      ],
      "asset": "assets/visuals/pulp/caries_vs_pulpitis.svg",
      "recommendedFor": [
        "caries",
        "pulpitis",
        "diagnosis"
      ]
    },
    {
      "id": "why_pulpitis_hurts",
      "category": "pulp",
      "audience": "patient",
      "type": "animation",
      "icon": "💥",
      "title": {
        "uk": "Чому болить зуб при пульпіті",
        "cs": "Proč zub bolí při pulpitidě",
        "en": "Why pulpitis hurts"
      },
      "description": {
        "uk": "Запалення і тиск у закритому просторі зуба.",
        "cs": "Zánět a tlak v uzavřeném prostoru zubu.",
        "en": "Inflammation and pressure in the closed tooth space."
      },
      "patientText": {
        "uk": "Пульпа знаходиться всередині твердого зуба. Коли вона запалюється, тиск усередині зростає, тому біль може бути дуже сильним.",
        "cs": "Dřeň je uvnitř tvrdého zubu. Když se zanítí, tlak uvnitř roste a bolest může být velmi silná.",
        "en": "The pulp is inside the hard tooth. When it becomes inflamed, pressure increases and pain can be very strong."
      },
      "tags": [
        "pulpitis",
        "pain",
        "pressure",
        "nerve"
      ],
      "asset": "assets/visuals/pulp/why_pulpitis_hurts.svg",
      "recommendedFor": [
        "pulpitis",
        "pain",
        "pressure",
        "nerve"
      ]
    },
    {
      "id": "tooth_nerve_simple",
      "category": "pulp",
      "audience": "patient",
      "type": "image",
      "icon": "🧠",
      "title": {
        "uk": "Що таке “нерв” у зубі",
        "cs": "Co je „nerv“ v zubu",
        "en": "What is the tooth “nerve”"
      },
      "description": {
        "uk": "Пульпа, канали, нерви та судини.",
        "cs": "Dřeň, kanálky, nervy a cévy.",
        "en": "Pulp, canals, nerves and vessels."
      },
      "patientText": {
        "uk": "Коли пацієнти кажуть “нерв зуба”, зазвичай мають на увазі пульпу — тканину всередині зуба з нервами та судинами.",
        "cs": "Když pacienti říkají „nerv zubu“, obvykle myslí dřeň — tkáň uvnitř zubu s nervy a cévami.",
        "en": "When patients say the tooth “nerve”, they usually mean the pulp — tissue inside the tooth containing nerves and vessels."
      },
      "tags": [
        "pulp",
        "nerve",
        "root canal"
      ],
      "asset": "assets/visuals/pulp/tooth_nerve_simple.svg",
      "recommendedFor": [
        "pulp",
        "nerve",
        "root canal"
      ]
    },
    {
      "id": "infected_root_canal",
      "category": "endo",
      "audience": "patient",
      "type": "image",
      "icon": "🦠",
      "title": {
        "uk": "Інфекція в кореневому каналі",
        "cs": "Infekce v kořenovém kanálku",
        "en": "Infected root canal"
      },
      "description": {
        "uk": "Бактерії всередині каналу можуть поширюватися до верхівки.",
        "cs": "Bakterie v kanálku se mohou šířit ke špičce kořene.",
        "en": "Bacteria inside the canal can spread to the root tip."
      },
      "patientText": {
        "uk": "Коли бактерії потрапляють у кореневий канал, інфекція може поширюватися до верхівки кореня.",
        "cs": "Když se bakterie dostanou do kořenového kanálku, infekce se může šířit ke špičce kořene.",
        "en": "When bacteria enter the root canal, infection can spread toward the root tip."
      },
      "tags": [
        "endo",
        "infection",
        "root canal",
        "bacteria"
      ],
      "asset": "assets/visuals/endo/infected_root_canal.svg",
      "recommendedFor": [
        "endo",
        "infection",
        "root canal",
        "bacteria"
      ]
    },
    {
      "id": "root_canal_treatment_overview",
      "category": "endo",
      "audience": "patient",
      "type": "image",
      "icon": "🧬",
      "title": {
        "uk": "Що таке лікування каналів",
        "cs": "Co je ošetření kořenových kanálků",
        "en": "What is root canal treatment"
      },
      "description": {
        "uk": "Очищення, дезінфекція і герметичне заповнення каналів.",
        "cs": "Vyčištění, dezinfekce a hermetické zaplnění kanálků.",
        "en": "Cleaning, disinfection and sealing of canals."
      },
      "patientText": {
        "uk": "Лікування каналів означає очищення внутрішньої частини зуба від інфікованої тканини, дезінфекцію і герметичне заповнення каналів.",
        "cs": "Ošetření kanálků znamená odstranění infikované tkáně zevnitř zubu, dezinfekci a hermetické zaplnění kanálků.",
        "en": "Root canal treatment means cleaning infected tissue from inside the tooth, disinfecting it and sealing the canals."
      },
      "tags": [
        "endo",
        "root canal",
        "treatment"
      ],
      "asset": "assets/visuals/endo/root_canal_treatment_overview.svg",
      "recommendedFor": [
        "endo",
        "root canal",
        "treatment"
      ]
    },
    {
      "id": "endo_steps",
      "category": "endo",
      "audience": "patient",
      "type": "animation",
      "icon": "1️⃣",
      "title": {
        "uk": "Етапи ендодонтичного лікування",
        "cs": "Kroky endodontického ošetření",
        "en": "Steps of endodontic treatment"
      },
      "description": {
        "uk": "Доступ → очищення → дезінфекція → пломбування → реставрація.",
        "cs": "Přístup → čištění → dezinfekce → plnění → rekonstrukce.",
        "en": "Access → cleaning → disinfection → filling → restoration."
      },
      "patientText": {
        "uk": "Лікування каналів складається з кількох етапів: доступ, очищення, дезінфекція, пломбування каналів і відновлення зуба.",
        "cs": "Ošetření kanálků má několik kroků: přístup, vyčištění, dezinfekci, zaplnění kanálků a rekonstrukci zubu.",
        "en": "Root canal treatment consists of access, cleaning, disinfection, canal filling and tooth restoration."
      },
      "tags": [
        "endo",
        "steps",
        "root canal"
      ],
      "asset": "assets/visuals/endo/endo_steps.svg",
      "recommendedFor": [
        "endo",
        "steps",
        "root canal"
      ]
    },
    {
      "id": "periapical_lesion",
      "category": "endo",
      "audience": "all",
      "type": "image",
      "icon": "⭕",
      "title": {
        "uk": "Періапікальне запалення",
        "cs": "Periapikální zánět",
        "en": "Periapical lesion"
      },
      "description": {
        "uk": "Запалення біля верхівки кореня.",
        "cs": "Zánět u hrotu kořene.",
        "en": "Inflammation near the root tip."
      },
      "patientText": {
        "uk": "Інфекція з кореневого каналу може викликати запалення біля верхівки кореня. На рентгені це часто виглядає як темна ділянка.",
        "cs": "Infekce z kořenového kanálku může vyvolat zánět u hrotu kořene. Na RTG to často vypadá jako tmavá oblast.",
        "en": "Infection from the root canal may cause inflammation near the root tip. On X-ray it often appears as a dark area."
      },
      "tags": [
        "endo",
        "periapical",
        "xray",
        "lesion"
      ],
      "asset": "assets/visuals/realistic/periapical_lesion.jpg",
      "recommendedFor": [
        "endo",
        "periapical",
        "xray",
        "lesion"
      ]
    },
    {
      "id": "tooth_before_after_endo",
      "category": "endo",
      "audience": "patient",
      "type": "image",
      "icon": "✅",
      "title": {
        "uk": "Зуб до і після ендо",
        "cs": "Zub před a po endodoncii",
        "en": "Tooth before and after endo"
      },
      "description": {
        "uk": "Інфікована пульпа → очищені й запломбовані канали.",
        "cs": "Infikovaná dřeň → vyčištěné a zaplněné kanálky.",
        "en": "Infected pulp → cleaned and filled canals."
      },
      "patientText": {
        "uk": "Мета лікування каналів — прибрати інфекцію всередині зуба і зберегти зуб, якщо це можливо.",
        "cs": "Cílem ošetření kanálků je odstranit infekci uvnitř zubu a zachovat zub, pokud je to možné.",
        "en": "The goal of root canal treatment is to remove infection inside the tooth and preserve it when possible."
      },
      "tags": [
        "endo",
        "before after",
        "root canal"
      ],
      "asset": "assets/visuals/endo/tooth_before_after_endo.svg",
      "recommendedFor": [
        "endo",
        "before after",
        "root canal"
      ]
    },
    {
      "id": "healthy_gums_vs_gingivitis",
      "category": "perio",
      "audience": "patient",
      "type": "image",
      "icon": "🩸",
      "title": {
        "uk": "Здорові ясна vs гінгівіт",
        "cs": "Zdravé dásně vs. gingivitida",
        "en": "Healthy gums vs gingivitis"
      },
      "description": {
        "uk": "Порівняння здорових і запалених ясен.",
        "cs": "Srovnání zdravých a zanícených dásní.",
        "en": "Comparison of healthy and inflamed gums."
      },
      "patientText": {
        "uk": "Гінгівіт — це запалення ясен. Часто він проявляється кровоточивістю, почервонінням і набряком.",
        "cs": "Gingivitida je zánět dásní. Často se projevuje krvácením, zarudnutím a otokem.",
        "en": "Gingivitis is gum inflammation. It often appears as bleeding, redness and swelling."
      },
      "tags": [
        "perio",
        "gingivitis",
        "gums",
        "bleeding"
      ],
      "asset": "assets/visuals/realistic/healthy_gums_vs_gingivitis.jpg",
      "recommendedFor": [
        "perio",
        "gingivitis",
        "gums",
        "bleeding"
      ]
    },
    {
      "id": "gingivitis_vs_periodontitis",
      "category": "perio",
      "audience": "patient",
      "type": "image",
      "icon": "↔️",
      "title": {
        "uk": "Гінгівіт vs пародонтит",
        "cs": "Gingivitida vs. parodontitida",
        "en": "Gingivitis vs periodontitis"
      },
      "description": {
        "uk": "При пародонтиті втрачається кісткова опора зубів.",
        "cs": "U parodontitidy se ztrácí kostní opora zubů.",
        "en": "Periodontitis involves loss of bone support."
      },
      "patientText": {
        "uk": "Гінгівіт уражає переважно ясна. Пародонтит — глибше захворювання, при якому може втрачатися кісткова опора зубів.",
        "cs": "Gingivitida postihuje hlavně dáseň. Parodontitida je hlubší onemocnění, při kterém se může ztrácet kostní opora zubů.",
        "en": "Gingivitis mainly affects the gums. Periodontitis is deeper disease where bone support may be lost."
      },
      "tags": [
        "perio",
        "gingivitis",
        "periodontitis",
        "bone loss"
      ],
      "asset": "assets/visuals/perio/gingivitis_vs_periodontitis.svg",
      "recommendedFor": [
        "perio",
        "gingivitis",
        "periodontitis",
        "bone loss"
      ]
    },
    {
      "id": "bone_loss_periodontitis",
      "category": "perio",
      "audience": "patient",
      "type": "image",
      "icon": "📉",
      "title": {
        "uk": "Втрата кістки при пародонтиті",
        "cs": "Ztráta kosti při parodontitidě",
        "en": "Bone loss in periodontitis"
      },
      "description": {
        "uk": "Зниження рівня кістки навколо зуба.",
        "cs": "Snížení úrovně kosti kolem zubu.",
        "en": "Reduced bone level around the tooth."
      },
      "patientText": {
        "uk": "При пародонтиті поступово втрачається кістка навколо зуба. Через це зуб може почати рухатися.",
        "cs": "Při parodontitidě se postupně ztrácí kost kolem zubu. Zub se proto může začít hýbat.",
        "en": "In periodontitis, bone around the tooth is gradually lost. This may make the tooth mobile."
      },
      "tags": [
        "perio",
        "periodontitis",
        "bone loss",
        "mobility"
      ],
      "asset": "assets/visuals/perio/bone_loss_periodontitis.svg",
      "recommendedFor": [
        "perio",
        "periodontitis",
        "bone loss",
        "mobility"
      ]
    },
    {
      "id": "plaque_calculus_inflammation",
      "category": "perio",
      "audience": "patient",
      "type": "animation",
      "icon": "🦷",
      "title": {
        "uk": "Наліт і камінь як причина запалення",
        "cs": "Plak a kámen jako příčina zánětu",
        "en": "Plaque and calculus cause inflammation"
      },
      "description": {
        "uk": "Наліт → камінь → запалення ясен.",
        "cs": "Plak → kámen → zánět dásní.",
        "en": "Plaque → calculus → gum inflammation."
      },
      "patientText": {
        "uk": "Наліт і зубний камінь подразнюють ясна та підтримують запалення. Тому професійна гігієна є важливою частиною лікування.",
        "cs": "Plak a zubní kámen dráždí dáseň a udržují zánět. Profesionální hygiena je proto důležitou součástí léčby.",
        "en": "Plaque and calculus irritate the gums and maintain inflammation. Professional hygiene is an important part of treatment."
      },
      "tags": [
        "perio",
        "plaque",
        "calculus",
        "hygiene"
      ],
      "asset": "assets/visuals/realistic/plaque_calculus_inflammation.jpg",
      "recommendedFor": [
        "perio",
        "plaque",
        "calculus",
        "hygiene"
      ]
    },
    {
      "id": "mobile_teeth_periodontitis",
      "category": "perio",
      "audience": "patient",
      "type": "image",
      "icon": "↕️",
      "title": {
        "uk": "Чому зуби хитаються",
        "cs": "Proč se zuby viklají",
        "en": "Why teeth become mobile"
      },
      "description": {
        "uk": "Менше кісткової опори — більше рухомості.",
        "cs": "Méně kostní opory — větší viklavost.",
        "en": "Less bone support means more mobility."
      },
      "patientText": {
        "uk": "Зуб тримається в кістці. Коли кісткова опора зменшується, зуб може стати рухомим.",
        "cs": "Zub drží v kosti. Když se kostní opora zmenšuje, zub se může začít viklat.",
        "en": "A tooth is held by bone. When bone support decreases, the tooth may become mobile."
      },
      "tags": [
        "perio",
        "mobility",
        "bone loss"
      ],
      "asset": "assets/visuals/perio/mobile_teeth_periodontitis.svg",
      "recommendedFor": [
        "perio",
        "mobility",
        "bone loss"
      ]
    },
    {
      "id": "dental_implant_components",
      "category": "implants",
      "audience": "patient",
      "type": "image",
      "icon": "🔩",
      "title": {
        "uk": "Що таке імплант",
        "cs": "Co je zubní implantát",
        "en": "What is a dental implant"
      },
      "description": {
        "uk": "Імплант, абатмент і коронка.",
        "cs": "Implantát, abutment a korunka.",
        "en": "Implant, abutment and crown."
      },
      "patientText": {
        "uk": "Імплант замінює корінь зуба. На нього фіксується абатмент і коронка, яка виглядає як зуб.",
        "cs": "Implantát nahrazuje kořen zubu. Na něj se upevní abutment a korunka, která vypadá jako zub.",
        "en": "An implant replaces the tooth root. An abutment and crown are attached to it."
      },
      "tags": [
        "implant",
        "abutment",
        "crown",
        "prosthetics"
      ],
      "asset": "assets/visuals/realistic/implant_crown_components.jpg",
      "recommendedFor": [
        "implant",
        "abutment",
        "crown",
        "prosthetics"
      ]
    },
    {
      "id": "implant_in_bone_section",
      "category": "implants",
      "audience": "patient",
      "type": "image",
      "icon": "🦴",
      "title": {
        "uk": "Імплант у кістці",
        "cs": "Implantát v kosti",
        "en": "Implant in bone"
      },
      "description": {
        "uk": "Розріз щелепи з імплантом у кістці.",
        "cs": "Řez čelistí s implantátem v kosti.",
        "en": "Jaw section with implant in bone."
      },
      "patientText": {
        "uk": "Імплант встановлюється в кістку. Після загоєння на нього можна виготовити коронку.",
        "cs": "Implantát se zavádí do kosti. Po zhojení je možné na něj zhotovit korunku.",
        "en": "The implant is placed in bone. After healing, a crown can be made on it."
      },
      "tags": [
        "implant",
        "bone",
        "surgery"
      ],
      "asset": "assets/visuals/realistic/implant_in_bone_section.jpg",
      "recommendedFor": [
        "implant",
        "bone",
        "surgery"
      ]
    },
    {
      "id": "implant_treatment_steps",
      "category": "implants",
      "audience": "patient",
      "type": "animation",
      "icon": "1️⃣",
      "title": {
        "uk": "Етапи імплантації",
        "cs": "Kroky implantace",
        "en": "Implant treatment steps"
      },
      "description": {
        "uk": "Планування → імплант → загоєння → коронка.",
        "cs": "Plánování → implantát → hojení → korunka.",
        "en": "Planning → implant → healing → crown."
      },
      "patientText": {
        "uk": "Імплантація складається з планування, встановлення імпланта, періоду загоєння і виготовлення коронки.",
        "cs": "Implantace zahrnuje plánování, zavedení implantátu, dobu hojení a zhotovení korunky.",
        "en": "Implant treatment includes planning, implant placement, healing and crown fabrication."
      },
      "tags": [
        "implant",
        "steps",
        "osseointegration",
        "crown"
      ],
      "asset": "assets/visuals/implants/implant_treatment_steps.svg",
      "recommendedFor": [
        "implant",
        "steps",
        "osseointegration",
        "crown"
      ]
    },
    {
      "id": "osseointegration",
      "category": "implants",
      "audience": "patient",
      "type": "animation",
      "icon": "🔗",
      "title": {
        "uk": "Остеоінтеграція",
        "cs": "Osseointegrace",
        "en": "Osseointegration"
      },
      "description": {
        "uk": "Кістка стабільно з’єднується з поверхнею імпланта.",
        "cs": "Kost se stabilně spojí s povrchem implantátu.",
        "en": "Bone integrates with the implant surface."
      },
      "patientText": {
        "uk": "Остеоінтеграція — це процес, під час якого кістка стабільно з’єднується з поверхнею імпланта.",
        "cs": "Osseointegrace je proces, při kterém se kost stabilně spojí s povrchem implantátu.",
        "en": "Osseointegration is the process where bone becomes stably connected to the implant surface."
      },
      "tags": [
        "implant",
        "osseointegration",
        "bone",
        "healing"
      ],
      "asset": "assets/visuals/implants/osseointegration.svg",
      "recommendedFor": [
        "implant",
        "osseointegration",
        "bone",
        "healing"
      ]
    },
    {
      "id": "implant_vs_bridge",
      "category": "implants",
      "audience": "patient",
      "type": "image",
      "icon": "⚖️",
      "title": {
        "uk": "Імплант vs міст",
        "cs": "Implantát vs. můstek",
        "en": "Implant vs bridge"
      },
      "description": {
        "uk": "Порівняння заміщення одного відсутнього зуба.",
        "cs": "Srovnání náhrady jednoho chybějícího zubu.",
        "en": "Comparison of replacing one missing tooth."
      },
      "patientText": {
        "uk": "Імплант замінює відсутній зуб без обточування сусідніх зубів. Міст фіксується на сусідні зуби.",
        "cs": "Implantát nahrazuje chybějící zub bez obroušení sousedních zubů. Můstek se fixuje na sousední zuby.",
        "en": "An implant replaces a missing tooth without preparing adjacent teeth. A bridge is fixed to neighboring teeth."
      },
      "tags": [
        "implant",
        "bridge",
        "prosthetics",
        "missing tooth"
      ],
      "asset": "assets/visuals/implants/implant_vs_bridge.svg",
      "recommendedFor": [
        "implant",
        "bridge",
        "prosthetics",
        "missing tooth"
      ]
    },
    {
      "id": "wisdom_tooth_extraction",
      "category": "surgery",
      "audience": "patient",
      "type": "image",
      "icon": "🦷",
      "title": {
        "uk": "Видалення зуба мудрості",
        "cs": "Extrakce zubu moudrosti",
        "en": "Wisdom tooth extraction"
      },
      "description": {
        "uk": "Нахилений третій моляр і ризик для сусіднього зуба.",
        "cs": "Skloněný třetí molár a riziko pro sousední zub.",
        "en": "Angled third molar and risk to neighboring tooth."
      },
      "patientText": {
        "uk": "Зуб мудрості іноді не має достатньо місця для прорізування. У таких випадках він може викликати біль, запалення або пошкоджувати сусідній зуб.",
        "cs": "Zub moudrosti někdy nemá dost místa k prořezání. Může způsobovat bolest, zánět nebo poškozovat sousední zub.",
        "en": "A wisdom tooth may lack space to erupt. It can cause pain, inflammation or damage the adjacent tooth."
      },
      "tags": [
        "surgery",
        "wisdom tooth",
        "extraction"
      ],
      "asset": "assets/visuals/surgery/wisdom_tooth_extraction.svg",
      "recommendedFor": [
        "surgery",
        "wisdom tooth",
        "extraction"
      ]
    },
    {
      "id": "extraction_socket_healing",
      "category": "surgery",
      "audience": "patient",
      "type": "image",
      "icon": "🩹",
      "title": {
        "uk": "Лунка після видалення",
        "cs": "Lůžko po extrakci a hojení",
        "en": "Extraction socket healing"
      },
      "description": {
        "uk": "Згусток і перші етапи загоєння.",
        "cs": "Krevní sraženina a první fáze hojení.",
        "en": "Blood clot and early healing steps."
      },
      "patientText": {
        "uk": "Після видалення важливо зберегти кров’яний згусток у лунці. Він є основою нормального загоєння.",
        "cs": "Po extrakci je důležité zachovat krevní sraženinu v lůžku. Je základem normálního hojení.",
        "en": "After extraction, preserving the blood clot in the socket is important. It is the basis for normal healing."
      },
      "tags": [
        "surgery",
        "extraction",
        "healing",
        "socket"
      ],
      "asset": "assets/visuals/surgery/extraction_socket_healing.svg",
      "recommendedFor": [
        "surgery",
        "extraction",
        "healing",
        "socket"
      ]
    },
    {
      "id": "dental_crown_on_tooth",
      "category": "prosthetics",
      "audience": "patient",
      "type": "image",
      "icon": "👑",
      "title": {
        "uk": "Коронка на зуб",
        "cs": "Korunka na zub",
        "en": "Dental crown"
      },
      "description": {
        "uk": "Коронка накриває ослаблений зуб.",
        "cs": "Korunka překrývá oslabený zub.",
        "en": "A crown covers a weakened tooth."
      },
      "patientText": {
        "uk": "Коронка захищає ослаблений зуб і відновлює його форму, функцію та естетику.",
        "cs": "Korunka chrání oslabený zub a obnovuje jeho tvar, funkci a estetiku.",
        "en": "A crown protects a weakened tooth and restores its shape, function and appearance."
      },
      "tags": [
        "crown",
        "prosthetics",
        "restoration"
      ],
      "asset": "assets/visuals/realistic/dental_crown_on_tooth.jpg",
      "recommendedFor": [
        "crown",
        "prosthetics",
        "restoration"
      ]
    },
    {
      "id": "dental_bridge",
      "category": "prosthetics",
      "audience": "patient",
      "type": "image",
      "icon": "🌉",
      "title": {
        "uk": "Міст",
        "cs": "Zubní můstek",
        "en": "Dental bridge"
      },
      "description": {
        "uk": "Заміщення відсутнього зуба з опорою на сусідні зуби.",
        "cs": "Náhrada chybějícího zubu s oporou na sousedních zubech.",
        "en": "Replacement of a missing tooth using adjacent teeth."
      },
      "patientText": {
        "uk": "Міст замінює відсутній зуб, спираючись на сусідні зуби. Для цього опорні зуби зазвичай потрібно обточити.",
        "cs": "Můstek nahrazuje chybějící zub a opírá se o sousední zuby. Opěrné zuby se obvykle musí obrousit.",
        "en": "A bridge replaces a missing tooth by using adjacent teeth as supports. These teeth usually need preparation."
      },
      "tags": [
        "bridge",
        "prosthetics",
        "missing tooth"
      ],
      "asset": "assets/visuals/realistic/dental_bridge.jpg",
      "recommendedFor": [
        "bridge",
        "prosthetics",
        "missing tooth"
      ]
    },
    {
      "id": "plaque_accumulation_zones",
      "category": "hygiene",
      "audience": "patient",
      "type": "image",
      "icon": "🪥",
      "title": {
        "uk": "Де накопичується наліт",
        "cs": "Kde se hromadí plak",
        "en": "Where plaque accumulates"
      },
      "description": {
        "uk": "Міжзубні проміжки, лінія ясен і важкодоступні місця.",
        "cs": "Mezizubní prostory, linie dásní a hůře dostupná místa.",
        "en": "Interdental spaces, gumline and hard-to-reach areas."
      },
      "patientText": {
        "uk": "Наліт найчастіше накопичується біля ясен і між зубами. Саме ці місця потрібно чистити особливо уважно.",
        "cs": "Plak se nejčastěji hromadí u dásní a mezi zuby. Tato místa je potřeba čistit zvlášť pečlivě.",
        "en": "Plaque most often accumulates near the gums and between teeth. These areas need special attention."
      },
      "tags": [
        "hygiene",
        "plaque",
        "prevention",
        "brushing"
      ],
      "asset": "assets/visuals/realistic/plaque_accumulation_zones.jpg",
      "recommendedFor": [
        "hygiene",
        "plaque",
        "prevention",
        "brushing"
      ]
    },
    {
      "id": "what_is_opg",
      "category": "radiology",
      "audience": "patient",
      "type": "image",
      "icon": "📷",
      "title": {
        "uk": "Що таке OPG",
        "cs": "Co je OPG",
        "en": "What is an OPG"
      },
      "description": {
        "uk": "Оглядовий знімок зубів, щелеп і навколишніх структур.",
        "cs": "Přehledový snímek zubů, čelistí a okolních struktur.",
        "en": "Overview image of teeth, jaws and surrounding structures."
      },
      "patientText": {
        "uk": "OPG — це оглядовий рентгенівський знімок, на якому видно зуби, щелепи та частину навколишніх структур. Для точнішої діагностики іноді потрібні додаткові знімки.",
        "cs": "OPG je přehledový rentgenový snímek, na kterém jsou vidět zuby, čelisti a část okolních struktur. Pro přesnější diagnostiku jsou někdy potřeba doplňkové snímky.",
        "en": "An OPG is an overview X-ray showing teeth, jaws and some surrounding structures. Additional images may be needed for precise diagnosis."
      },
      "tags": [
        "opg",
        "radiology",
        "xray",
        "panoramic"
      ],
      "asset": "assets/visuals/radiology/what_is_opg.svg",
      "recommendedFor": [
        "opg",
        "radiology",
        "xray",
        "panoramic"
      ]
    },
    {
      "id": "interdental_cleaning",
      "category": "hygiene",
      "audience": "patient",
      "type": "image",
      "icon": "🧵",
      "title": {
        "uk": "Міжзубна чистка",
        "cs": "Mezizubní čištění",
        "en": "Interdental cleaning"
      },
      "description": {
        "uk": "Йоршики та флос очищають там, куди щітка не дістає.",
        "cs": "Mezizubní kartáčky a nit čistí místa, kam se běžný kartáček nedostane.",
        "en": "Interdental brushes and floss clean where a toothbrush cannot reach."
      },
      "patientText": {
        "uk": "Звичайна щітка не очищає повністю проміжки між зубами. Для цього потрібен йоршик або флос відповідного розміру.",
        "cs": "Běžný kartáček nevyčistí mezizubní prostory úplně. K tomu slouží mezizubní kartáček nebo nit správné velikosti.",
        "en": "A regular toothbrush does not fully clean between teeth. Use the right size interdental brush or floss."
      },
      "tags": [
        "hygiene",
        "floss",
        "interdental",
        "prevention"
      ],
      "asset": "assets/visuals/hygiene/interdental_cleaning.svg",
      "recommendedFor": [
        "hygiene",
        "floss",
        "interdental",
        "prevention"
      ]
    },
    {
      "id": "brushing_angle_gumline",
      "category": "hygiene",
      "audience": "patient",
      "type": "image",
      "icon": "🪥",
      "title": {
        "uk": "Кут щітки біля ясен",
        "cs": "Úhel kartáčku u dásní",
        "en": "Brush angle at the gumline"
      },
      "description": {
        "uk": "Щітка під кутом приблизно 45° краще очищає лінію ясен.",
        "cs": "Kartáček pod úhlem přibližně 45° lépe čistí linii dásní.",
        "en": "A brush angled about 45° cleans the gumline better."
      },
      "patientText": {
        "uk": "Найважливіше місце — межа зуба і ясен. М’які рухи під кутом допомагають прибрати наліт без травми ясен.",
        "cs": "Nejdůležitější místo je hranice zubu a dásně. Jemné pohyby pod úhlem pomáhají odstranit plak bez poranění dásní.",
        "en": "The key area is where tooth meets gum. Gentle angled strokes remove plaque without injuring the gums."
      },
      "tags": [
        "hygiene",
        "brushing",
        "gumline",
        "prevention"
      ],
      "asset": "assets/visuals/hygiene/brushing_angle_gumline.svg",
      "recommendedFor": [
        "hygiene",
        "brushing",
        "gumline",
        "prevention"
      ]
    },
    {
      "id": "bitewing_vs_opg",
      "category": "radiology",
      "audience": "doctor",
      "type": "image",
      "icon": "📷",
      "title": {
        "uk": "BW vs OPG: що видно краще",
        "cs": "BW vs OPG: co je vidět lépe",
        "en": "Bitewing vs OPG: what each shows best"
      },
      "description": {
        "uk": "Bitewing краще для міжзубного карієсу, OPG — для огляду щелеп.",
        "cs": "Bitewing je lepší pro mezizubní kazy, OPG pro přehled čelistí.",
        "en": "Bitewings are better for proximal caries; OPG is an overview."
      },
      "patientText": {
        "uk": "OPG дає загальну картину, але дрібний міжзубний карієс часто краще оцінювати на bitewing-знімках.",
        "cs": "OPG dává celkový přehled, ale drobné mezizubní kazy se často lépe hodnotí na bitewing snímcích.",
        "en": "An OPG gives an overview, but small proximal lesions are often assessed better on bitewings."
      },
      "tags": [
        "radiology",
        "bitewing",
        "opg",
        "caries",
        "doctor"
      ],
      "asset": "assets/visuals/radiology/bitewing_vs_opg.svg",
      "recommendedFor": [
        "radiology",
        "bitewing",
        "opg",
        "caries",
        "doctor"
      ]
    },
    {
      "id": "periapical_xray_indications",
      "category": "radiology",
      "audience": "doctor",
      "type": "image",
      "icon": "🎯",
      "title": {
        "uk": "Коли потрібен PA-знімок",
        "cs": "Kdy je potřeba PA snímek",
        "en": "When a PA X-ray is needed"
      },
      "description": {
        "uk": "Прицільний знімок для верхівки кореня, ендо та локальної діагностики.",
        "cs": "Cílený snímek pro apex, endodoncii a lokální diagnostiku.",
        "en": "Targeted image for apex, endodontics and local diagnosis."
      },
      "patientText": {
        "uk": "Якщо потрібна точна оцінка верхівки кореня, ендодонтичного лікування або локального дефекту, OPG часто недостатньо — потрібен прицільний PA.",
        "cs": "Pro přesné hodnocení apexu, endodontického ošetření nebo lokálního defektu OPG často nestačí — je potřeba cílený PA snímek.",
        "en": "For precise apex, endodontic, or local defect assessment, an OPG is often insufficient — a PA film is needed."
      },
      "tags": [
        "radiology",
        "periapical",
        "endo",
        "doctor"
      ],
      "asset": "assets/visuals/radiology/periapical_xray_indications.svg",
      "recommendedFor": [
        "radiology",
        "periapical",
        "endo",
        "doctor"
      ]
    },
    {
      "id": "veneer_vs_crown",
      "category": "prosthetics",
      "audience": "patient",
      "type": "image",
      "icon": "👑",
      "title": {
        "uk": "Вінір vs коронка",
        "cs": "Fazeta vs korunka",
        "en": "Veneer vs crown"
      },
      "description": {
        "uk": "Вінір покриває переважно передню поверхню, коронка — весь зуб.",
        "cs": "Fazeta kryje hlavně přední plochu, korunka celý zub.",
        "en": "A veneer covers mainly the front; a crown covers the whole tooth."
      },
      "patientText": {
        "uk": "Вінір є тонкою накладкою для естетики. Коронка потрібна, коли зуб сильно зруйнований або потребує повного покриття.",
        "cs": "Fazeta je tenká estetická náhrada. Korunka je vhodná, když je zub výrazně poškozený nebo potřebuje celkové krytí.",
        "en": "A veneer is a thin aesthetic facing. A crown is used when a tooth is heavily damaged or needs full coverage."
      },
      "tags": [
        "veneer",
        "crown",
        "prosthetics",
        "aesthetic"
      ],
      "asset": "assets/visuals/prosthetics/veneer_vs_crown.svg",
      "recommendedFor": [
        "veneer",
        "crown",
        "prosthetics",
        "aesthetic"
      ]
    },
    {
      "id": "inlay_onlay_overlay",
      "category": "prosthetics",
      "audience": "patient",
      "type": "image",
      "icon": "🧩",
      "title": {
        "uk": "Inlay / Onlay / Overlay",
        "cs": "Inlay / Onlay / Overlay",
        "en": "Inlay / Onlay / Overlay"
      },
      "description": {
        "uk": "Лабораторні вкладки відновлюють зуб точніше, ніж велика пломба.",
        "cs": "Laboratorní výplně obnovují zub přesněji než velká plomba.",
        "en": "Lab-made restorations rebuild teeth more precisely than large fillings."
      },
      "patientText": {
        "uk": "Коли дефект великий, вкладка або overlay може краще відновити форму і міцність зуба, ніж звичайна велика пломба.",
        "cs": "U větších defektů může inlay, onlay nebo overlay lépe obnovit tvar a pevnost zubu než běžná velká výplň.",
        "en": "For larger defects, an inlay/onlay/overlay can restore tooth shape and strength better than a large filling."
      },
      "tags": [
        "inlay",
        "onlay",
        "overlay",
        "prosthetics"
      ],
      "asset": "assets/visuals/realistic/inlay_onlay_overlay.jpg",
      "recommendedFor": [
        "inlay",
        "onlay",
        "overlay",
        "prosthetics"
      ]
    },
    {
      "id": "dry_socket_prevention",
      "category": "surgery",
      "audience": "patient",
      "type": "image",
      "icon": "🩹",
      "title": {
        "uk": "Як уникнути dry socket",
        "cs": "Jak předejít dry socket",
        "en": "How to reduce dry socket risk"
      },
      "description": {
        "uk": "Після видалення важливо зберегти кров’яний згусток у лунці.",
        "cs": "Po extrakci je důležité zachovat krevní sraženinu v lůžku.",
        "en": "After extraction, preserving the blood clot is important."
      },
      "patientText": {
        "uk": "Не полощіть активно, не куріть і не пийте через трубочку в перші дні. Це допомагає зберегти згусток і зменшити ризик болю.",
        "cs": "První dny intenzivně nevyplachujte, nekuřte a nepijte brčkem. Pomáhá to zachovat sraženinu a snížit riziko bolesti.",
        "en": "Avoid vigorous rinsing, smoking, and straws for the first days. This helps keep the clot and lowers pain risk."
      },
      "tags": [
        "surgery",
        "extraction",
        "dry socket",
        "healing"
      ],
      "asset": "assets/visuals/surgery/dry_socket_prevention.svg",
      "recommendedFor": [
        "surgery",
        "extraction",
        "dry socket",
        "healing"
      ]
    },
    {
      "id": "suture_care_after_surgery",
      "category": "surgery",
      "audience": "patient",
      "type": "image",
      "icon": "🪡",
      "title": {
        "uk": "Догляд за швами після операції",
        "cs": "Péče o stehy po zákroku",
        "en": "Suture care after surgery"
      },
      "description": {
        "uk": "Шви захищають рану, але потребують обережної гігієни.",
        "cs": "Stehy chrání ránu, ale vyžadují opatrnou hygienu.",
        "en": "Sutures protect the wound but need careful hygiene."
      },
      "patientText": {
        "uk": "Не тягніть шви язиком або пальцями. Чистіть навколо обережно м’якою щіткою та дотримуйтесь рекомендацій лікаря.",
        "cs": "Netahejte za stehy jazykem ani prsty. Okolí čistěte opatrně měkkým kartáčkem a dodržujte pokyny lékaře.",
        "en": "Do not pull sutures with tongue or fingers. Clean gently around them and follow your dentist’s instructions."
      },
      "tags": [
        "surgery",
        "sutures",
        "healing",
        "postop"
      ],
      "asset": "assets/visuals/surgery/suture_care_after_surgery.svg",
      "recommendedFor": [
        "surgery",
        "sutures",
        "healing",
        "postop"
      ]
    },
    {
      "id": "peri_implantitis_warning",
      "category": "implants",
      "audience": "doctor",
      "type": "image",
      "icon": "⚠️",
      "title": {
        "uk": "Періімплантит: ранні ознаки",
        "cs": "Periimplantitida: časné známky",
        "en": "Peri-implantitis: early signs"
      },
      "description": {
        "uk": "Кровоточивість, поглиблення кишені та кісткова втрата навколо імпланта.",
        "cs": "Krvácení, prohloubení chobotu a kostní ztráta kolem implantátu.",
        "en": "Bleeding, deeper pocketing and bone loss around an implant."
      },
      "patientText": {
        "uk": "Почервоніння, кровоточивість або прогресивна втрата кістки навколо імпланта потребують контролю і лікування, щоб зберегти імплант.",
        "cs": "Zarudnutí, krvácení nebo progresivní úbytek kosti kolem implantátu vyžadují kontrolu a léčbu pro zachování implantátu.",
        "en": "Redness, bleeding or progressive bone loss around an implant needs assessment and treatment to preserve it."
      },
      "tags": [
        "implant",
        "periimplantitis",
        "doctor",
        "maintenance"
      ],
      "asset": "assets/visuals/implants/peri_implantitis_warning.svg",
      "recommendedFor": [
        "implant",
        "periimplantitis",
        "doctor",
        "maintenance"
      ]
    },
    {
      "id": "working_length_apex",
      "category": "endo",
      "audience": "doctor",
      "type": "image",
      "icon": "📏",
      "title": {
        "uk": "Робоча довжина в ендо",
        "cs": "Pracovní délka v endodoncii",
        "en": "Endodontic working length"
      },
      "description": {
        "uk": "Контроль довжини допомагає обробити канал до апікальної межі.",
        "cs": "Kontrola délky pomáhá opracovat kanálek po apikální hranici.",
        "en": "Length control helps instrument the canal to the apical limit."
      },
      "patientText": {
        "uk": "Правильна робоча довжина знижує ризик недообробки каналу або виведення матеріалу за верхівку.",
        "cs": "Správná pracovní délka snižuje riziko nedostatečného opracování nebo přeplnění za apex.",
        "en": "Correct working length reduces under-instrumentation and overextension beyond the apex."
      },
      "tags": [
        "endo",
        "working length",
        "apex",
        "doctor"
      ],
      "asset": "assets/visuals/endo/working_length_apex.svg",
      "recommendedFor": [
        "endo",
        "working length",
        "apex",
        "doctor"
      ]
    },
    {
      "id": "implant_bone_grafting",
      "category": "implants",
      "audience": "patient",
      "type": "image",
      "icon": "🔩",
      "title": {
        "uk": "Імплант із кістковою пластикою",
        "cs": "Implantát s kostní augmentací",
        "en": "Implant with bone grafting"
      },
      "description": {
        "uk": "Імплант встановлюється разом із додаванням кісткового матеріалу.",
        "cs": "Implantát je zaveden spolu s doplněním kostního materiálu.",
        "en": "An implant placed with additional bone graft material."
      },
      "patientText": {
        "uk": "Якщо кістки недостатньо, під час або перед імплантацією можна додати кістковий матеріал. Це створює кращу опору для імпланта.",
        "cs": "Pokud není dostatek kosti, lze při implantaci nebo před ní doplnit kostní materiál. Tím se vytvoří lepší opora pro implantát.",
        "en": "If there is not enough bone, graft material can be added before or during implant placement to support the implant."
      },
      "tags": [
        "implant",
        "bone graft",
        "augmentation",
        "gbr"
      ],
      "asset": "assets/visuals/realistic/implant_bone_grafting.jpg",
      "recommendedFor": [
        "implant",
        "bone graft",
        "augmentation",
        "gbr"
      ]
    },
    {
      "id": "socket_preservation_bone_graft",
      "category": "surgery",
      "audience": "patient",
      "type": "image",
      "icon": "🦷",
      "title": {
        "uk": "Збереження лунки після видалення",
        "cs": "Zachování lůžka po extrakci",
        "en": "Socket preservation after extraction"
      },
      "description": {
        "uk": "Лунка після видалення заповнюється кістковим матеріалом і закривається мембраною.",
        "cs": "Lůžko po extrakci se vyplní kostním materiálem a zakryje membránou.",
        "en": "The extraction socket is filled with graft material and covered with a membrane."
      },
      "patientText": {
        "uk": "Після видалення зуба кістка може зменшуватися. Socket preservation допомагає зберегти об’єм кістки для майбутнього імпланта або кращої естетики.",
        "cs": "Po extrakci zubu se kost může zmenšovat. Socket preservation pomáhá zachovat objem kosti pro budoucí implantát nebo lepší estetiku.",
        "en": "After extraction, bone volume may shrink. Socket preservation helps maintain bone for a future implant or better aesthetics."
      },
      "tags": [
        "extraction",
        "socket preservation",
        "bone graft",
        "membrane"
      ],
      "asset": "assets/visuals/realistic/socket_preservation_bone_graft.jpg",
      "recommendedFor": [
        "extraction",
        "socket preservation",
        "bone graft",
        "membrane"
      ]
    },
    {
      "id": "dental_filling_section",
      "category": "caries",
      "audience": "patient",
      "type": "image",
      "icon": "🦷",
      "title": {
        "uk": "Пломба в зубі в розрізі",
        "cs": "Výplň v zubu v řezu",
        "en": "Dental filling cross-section"
      },
      "description": {
        "uk": "Як пломба відновлює зуб після очищення карієсу.",
        "cs": "Jak výplň obnovuje zub po odstranění kazu.",
        "en": "How a filling restores a tooth after decay removal."
      },
      "patientText": {
        "uk": "Після очищення карієсу порожнина заповнюється пломбувальним матеріалом. Він повертає форму зуба і захищає його від подальшого руйнування.",
        "cs": "Po odstranění kazu se kavita vyplní výplňovým materiálem. Ten obnoví tvar zubu a chrání ho před dalším poškozením.",
        "en": "After decay is removed, the cavity is filled with restorative material to restore shape and protect the tooth."
      },
      "tags": [
        "filling",
        "caries",
        "restoration",
        "composite"
      ],
      "asset": "assets/visuals/realistic/dental_filling_section.jpg",
      "recommendedFor": [
        "filling",
        "caries",
        "restoration",
        "composite"
      ]
    },
    {
      "id": "guided_implant_surgery",
      "category": "implants",
      "audience": "patient",
      "type": "image",
      "icon": "🎯",
      "title": {
        "uk": "Навігаційний шаблон для імплантації",
        "cs": "Navigační šablona pro implantaci",
        "en": "Guided implant surgery"
      },
      "description": {
        "uk": "Імплант встановлюється через прозорий хірургічний шаблон.",
        "cs": "Implantát se zavádí přes průhlednou chirurgickou šablonu.",
        "en": "An implant is placed through a transparent surgical guide."
      },
      "patientText": {
        "uk": "Хірургічний шаблон допомагає встановити імплант у заздалегідь спланованому положенні. Це підвищує точність і передбачуваність процедури.",
        "cs": "Chirurgická šablona pomáhá zavést implantát do předem naplánované polohy. Zvyšuje přesnost a předvídatelnost zákroku.",
        "en": "A surgical guide helps place the implant in a pre-planned position, improving precision and predictability."
      },
      "tags": [
        "implant",
        "guided surgery",
        "surgical guide",
        "navigation"
      ],
      "asset": "assets/visuals/realistic/guided_implant_surgery.jpg",
      "recommendedFor": [
        "implant",
        "guided surgery",
        "surgical guide",
        "navigation"
      ]
    }
  ]
};
export default VISUAL_LIBRARY;
