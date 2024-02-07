/* --- menu items --- */
var TREE_ITEMS = [

	[' SysMind', '../main/home_page.htm',
		[' Portada', '../main/home_page.htm'],
		[' Laburpen Posterra', '../Proiektua/Memoria/Posterra.pdf'],
		[' Aurkezpena', '../Proiektua/Aurkezpena.pptx'],
		[' Bideo-tutoriala', '../proiektua/BideoTutotiala.mp4'],
		[' Aurkibide orokorra', '../Proiektua/Memoria/AurkibideOrokorra.pdf'],				
		[' Memoria', '../Proiektua/Memoria/Memoria.pdf',
			['Egitura', '../Proiektua/Memoria/MemoriarenEgitura.htm'],
			['Portada', '../Proiektua/Memoria/0_Portada.pdf'],
			[' 1 Sarrera', '../Proiektua/Memoria/1_Sarrera.pdf'],
			[' 2 Helburuak', '../Proiektua/Memoria/2_Helburuak.pdf'],
			[' 3 Aurrekariak', '../Proiektua/Memoria/3_Aurrekariak.pdf'],
			[' 4 Egungo egoera', '../Proiektua/Memoria/4_EgungoEgoera.pdf'],
		    [' 5 Arauak eta erreferentziak', '../Proiektua/Memoria/5_ArauakEtaErreferentziak.pdf'],
			[' 6 Definizionak eta laburdurak', '../Proiektua/Memoria/6_DefinizioakEtaLaburdurak.pdf'],
			[' 7 Hasierako betekizunak', '../Proiektua/Memoria/7_HasierakoBetekizunak.pdf'],
			[' 8 Irismena', '../Proiektua/Memoria/8_Irismena.pdf'],
			[' 9 Hipotesiak eta Murriztapenak', '../Proiektua/Memoria/9_HipotesiakEtaMurriztapenak.pdf'],
			[' 10 Hautabideak eta egingarritasuna', '../Proiektua/Memoria/10_HautabideakEtaEgingarritasuna.pdf'],
			[' 11 Proposamenaren deskribapena', '../Proiektua/Memoria/11_ProposamenarenDeskribapena.pdf'],
	        [' 12 Proposamenaren arriskuak', '../Proiektua/Memoria/12_ProposamenarenArriskuak.pdf'],
	        [' 13 Proposamenaren antolaketa eta kudeaketa', '../Proiektua/Memoria/13_ProposamenarenKudekaeta.pdf'],
	        [' 14 Proposamenaren denbora planifikazioa', '../Proiektua/Memoria/14_ProposamenarenDenboraPlanifikazioa.pdf'],
	        [' 15 Aurrekontuaren laburpena', '../Proiektua/Memoria/15_AurrekontuarenLaburpena.pdf'],
			[' 16 Oinarrizko dokumentuen ordena', '../Proiektua/Memoria/16_Dokumentuen ordena.pdf']
	    ],

		[' Memoriaren eranskinak',null,
			[' A1 - Sarrerako Dokumentazioa',null,
				['Domeinuari buruzko informazioa',null,
					['Zer da frankizia bat','../Proiektua/MemoriarenEranskinak/Frankizia.pdf'],
					['Frankiziei buruzko informazioa','https://www.franchise.org/'],
					['Frankizien hornitzailei buruzko informazioa','https://www.franchise.org/suppliers'],
				],
				['Bezeroak proposatutako ebaluazio-txantiloiak',null,
					['Request for Proposals (RFP) txantiloia','../Proiektua/MemoriarenEranskinak/rfp-template-government-model.pdf'],
					['User acceptace test (UAT) txantiloia','../Proiektua/MemoriarenEranskinak/User-Accetptance-Test-Plan-Free-Word-Template.pdf'],
					['RFP erantzunen hasierako ebaluazioaren txantiloia','../Proiektua/MemoriarenEranskinak/Software projects proposals evaluation template.pdf'],
				],
				['Bezeroari buruzko informazioa','https://www.amrest-franquicias.com/en/la-tagliatella'],
				['Bezeroaren proposamen eskaera (Request for proposals - RFP)',null,
					['Bezeroaren RFP zirriborroa (adibidea)','../Proiektua/MemoriarenEranskinak/rfp-AMREST-TAG.pdf'],
					['Bezeroarengandik jasotako RFP','../Proiektua/MemoriarenEranskinak/rfp-AMREST-TAG_ofiziala.pdf'],
				],
			],
			[' A2 - Analisi eta Diseinua',null,
				[' Analisia',null,
					[' Analisis Model','../Proiektua/MemoriarenEranskinak/UML/RSAD/index.html'],
				],
				[' Arkitektura ', null,
					['Arkitektura dokumentua (Architecture Notebook)','../Proiektua/MemoriarenEranskinak/ArchitectureNotebook.pdf'],
					['Arkitektura eredua (azalekoa)','../Proiektua/MemoriarenEranskinak/arkitektura.png'],
					['Arkitektura eredua (azalekoa azaldua)','../Proiektua/MemoriarenEranskinak/Architectura_azalpenekin.pdf'],
					['Arkitektura eredua','../Proiektua/MemoriarenEranskinak/OsagaienDiagrama_Arkitektura.png'],
				],
				[' Diseinua',null,
					['Design Model',null],
					['Inplementazio-teknologien ebaluazioa', null,],
				],

			],
			[' A3 - Proposamenaren tamaina eta esfortzu estimazioa',null,
				[' UML ereduei aplikatutako metriken emaitazk',null,
					[' Software Architect: Analisi metriken txostena','../Proiektua/MemoriarenEranskinak/RSAD_Analisis/umleview_result.html'],
					[' SDMetrics: Erabilpen-kasuen ereduaren metrikak','../Proiektua/SistemarenEspezifikazioa/UML/RSAD/SDMetrics_Erabilpen-kasuen_eredua.xlsx'],
					[' SDMetrics: Analisi ereduaren metrikak','../Proiektua/MemoriarenEranskinak/UML/RSAD/SDMetrics_Analisi_eredua.xlsx'],
				],
				[' Kodeari aplikatutako metriken emaitazk',null],
			],

			[' A4 - Proposamenaren kudeaketa plana','../Proiektua/MemoriarenEranskinak/KudeaketaPlana.pdf',
				[' Integrazioaren Kudeaketa',null],
				[' Irismenaren Kudeaketa',null],
				[' Epeen Kudeaketa',null],
				[' Produktuaren Kostuen Kudeaketa',null],
				[' Kalitate Kudeaketa',null],
				[' Giza Baliabideen Kudeaketa',null],
				[' Komunikazioen Kudeaketa',null],
				[' Arriskuen Kudeaketa',null],
				[' Erosketen Kudeaketa',null],
				[' Interesatuen Kudeaketa',null],
			],
			[' A5 - Proposamenaren segurtasun plana',null,
				['Segurtasun faktore estrategikoak',null],
				['Segurtasun faktore taktikoak',null],
				['Segurtasun faktore operatiboak',null],
				['Segurtasun planaren txantiloi batzuk','../Proiektua/MemoriarenEranskinak/Segurtasun_planaren_txantiloiak.zip'],
			],
 			[' A6 - Gainerako Eranskinak', null,
				[' Hedapena', null,
					[' Backout Plana', null],
					[' Hedapen Plana', null],
					[' Erabiltzailearen eskuliburua', null],		
					[' Garatzailearen eskuliburua', null],
				],
				[' Garapena', null,
					[' Makina birtualak', null],
					[' Workspace', null],
				],
				[' Ingurunea', null,
					[' Tresnak (Tools)', null],
					[' Garapen Kasua (Project Defined Process)', null],
				],
				[' Inplementazioa (inplementation', null, 
					[' Inplementazio osoaren iturburuak', null],

				],
				[' Prototipo eta produktu exekutagarriak (build)', null, 
					[' Prototipoak', null],
					[' Produktuak ', null],
				],
				[' Test' , null,
					[' Trazabilitate Matrizea', '../Proiektua/MemoriarenEranskinak/TrazabilitateMatrizea.svg'],
					[' Proba Kasuak', null],
					[' Proba Log-a', null],
					[' Proba Script-a', null],
					[' Proben emaitzak', null],
					[' User acceptace test (UAT)','../Proiektua/MemoriarenEranskinak/User-Accetptance-Test-Plan-Free-Word-Template.pdf'],
					[' RFP erantzunen hasierako ebaluazioa','../Proiektua/MemoriarenEranskinak/Software projects proposals evaluation template.pdf'],

				],
			]
		],

		[' Sistemaren Espezifikazioa',null,
			[' Glosarioa (Glossary)','../Proiektua/SistemarenEspezifikazioa/glossary.pdf'],
			[' Bisioa (Vision)','../Proiektua/SistemarenEspezifikazioa/VisionSysMind.pdf'],
			[' Betebeharren Espezifikazioa (systemwide_req_spec)','../Proiektua/SistemarenEspezifikazioa/systemwide_req_spec.pdf'],

			[' Erabilpen kasuak (jarduera diagramekin)', null,
				[' Centralized Platform','../Proiektua/SistemarenEspezifikazioa/usecase_specification_Centralized Platform for Effective Communication, Training, and Support.pdf'],
				[' Centralized Platform (UML)','../Proiektua/SistemarenEspezifikazioa/glossary.pdf'],
				[' Financial Management','../Proiektua/SistemarenEspezifikazioa/usecase_specification_Financial Management.pdf'],
				[' Financial Management (UML)','../Proiektua/SistemarenEspezifikazioa/glossary.pdf'],
				[' Manage menu','../Proiektua/SistemarenEspezifikazioa/usecase_specification_Manage menu.pdf'],
				[' Manage menu (UML)', '../Proiektua/MemoriarenEranskinak/BasicFlowUseCaseManageMenu.png'],
				[' Process Order','../Proiektua/SistemarenEspezifikazioa/usecase_specification_Process Order.pdf'],
				[' Process Order (UML)','../Proiektua/SistemarenEspezifikazioa/glossary.pdf'],
				[' Standardized Processes and Practices',null,
					[' Use-case specification (OpenUP)',null,],
					[' Activity diagram (UML)',null,],
					[' Lan-fluxuen definizioa','https://graphviz.org/',],
					[' Pizza eskaera lan-fluxu(dot) eran','https://creately.com/diagram/example/id8ergch1/pizza-order-flowchart-classic',],
					[' Pizza eskaera prozesu (BPMN) eran','https://circle.visual-paradigm.com/pizza-order-process/',],
				],
			],
			[' Use Case Model','../Proiektua/SistemarenEspezifikazioa/UML/RSAD/index.html'],
		],
		
		[' Aurrekontua', null,
			[' Orokortasunak', null,],
			[' Edukia', null,]
		],

		[' Berariazko garrantzia duten azterlanak', null,
			[' Orokortasunak', null,],
			[' Edukia', null,]
		]
	],

	['FranchiseConnect: Barne Kudeaketa', null,
		[' Proiektuaren Barne Kudeaketa', null,
			[' Iterazio Planak' , null],
			[' Proiektu Plana', null],
			[' Arrisku Zerrenda', null],
			[' Lan-Atazen Zerrenda', null],
			[' Trebatzeko Materialak', null,],
			[' Hizkuntza Hitzarmena', null,],
			[' Bilera Aktak', null,
				['2023.02.06', null, ],
			],
		],
					
		[' Ingurunea', null,
			[' OpenUpLifecycleProccess+CCII', null,
				['Bizagi BPM sistema', 'https://www.bizagi.com/es'],
				['OpenUP+CCII prozesua (html)', '../Proiektua/BarneKudeaketa/OpenUpLifecycleProccess/OpenUP+CCII/index.html'],
				['OpenUP+CCII prozesua (bpm)', '../Proiektua/BarneKudeaketa/OpenUpLifecycleProccess/OpenUP+CCII/OpenUP+CCII.bpm'],
				['OpenUP+CCII prozesua (pdf)', '../Proiektua/BarneKudeaketa/OpenUpLifecycleProccess/bpmDokumentua.pdf'],
				['OpenUP+CCII dokumentazioa (pdf)', '../Proiektua/BarneKudeaketa/OpenUpLifecycleProccess/Erabakien_justifikazioa.pdf'],
			],
			[' OpenUpLifecycleWorkflow', null,
				['OpenUP+CCII prozesua (html)', '../Proiektua/BarneKudeaketa/OpenUpLifecycleWorkflow/openUp_lifecycle.html'],
				['OpenUP+CCII prozesua (zip)', '../Proiektua/BarneKudeaketa/OpenUpLifecycleWorkflow/openUp_lifecycle.zip'],
				['dot lengoaia(Graphviz)', 'https://graphviz.org/doc/info/lang.html'],
				['GraphML formatoa', 'http://graphml.graphdrawing.org/'],
				['dot -> GraphML bihurtzailea (Gephi)', 'https://gephi.org/'],
				['Grafoen datu-basea(Neo4j)', 'https://neo4j.com/'],
			],
			['Erremintak', null,],
		],
		[' Txantiloiak', '../Proiektua/MemoriarenEranskinak/Irakasgaiko txantiloiak.zip']
	]					
];