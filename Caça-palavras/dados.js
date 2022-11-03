let palavrasListadas = []

const letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

const direcoes = ["horizontal","vertical","diagonalPrincipal", "diagonalSecundária", "horizontalInvertida",
    "verticalSubindo","diagonalPrincialinvertida", "diagonalSecundáriaInvertida"]

const elementosQuimicos = ['Hidrogênio','Hélio','Lítio','Berílio','Boro','Carbono','Nitrogênio','Oxigênio','Flúor','Neônio','Sódio','Magnésio','Alumínio','Silício','Fósforo','Enxofre','Cloro','Argônio','Potássio','Cálcio','Escândio','Titânio','Vanádio','Crômio','Manganês','Ferro','Cobalto','Níquel','Cobre','Zinco','Gálio','Germânio','Arsênio','Selênio','Bromo','Criptônio','Rubídio','Estrôncio','Ítrio','Zircônio','Nióbio','Molibdênio','Tecnécio','Rutênio','Ródio','Paládio','Prata','Cádmio','Índio','Estanho','Antimônio','Telúrio','Iodo','Xenônio','Césio','Bário','Lantânio','Cério','Praseodímio','Neodímio','Promécio','Samário','Európio','Gadolínio','Térbio','Disprósio','Hólmio','Érbio','Túlio','Itérbio','Lutécio','Háfnio','Tântalo','Tungstênio','Rênio','Ósmio','Irídio','Platina','Ouro','Mercúrio','Tálio','Chumbo','Bismuto','Polônio','Astato','Radônio','Frâncio','Rádio','Actínio','Tório','Protactínio','Urânio','Netúnio','Plutônio','Amerício','Cúrio','Berquélio','Califórnio','Einstéinio','Férmio','Mendelévio','Nobélio','Laurêncio','Rutherfórdio','Dúbio','Seabórgio','Bório','Hássio','Meitnerio','Darmstádio','Roentgênio','Copernício','Nihônio','Fleróvio','Moscóvio','Livermório','Tenessino','Oganessônio']
const paises = ['Afeganistão','Albânia','Alemanha','Andorra','Angola','Argélia','Argentina','Armênia','Austrália','Áustria','Azerbaijão','Bahamas','Bangladesh','Barbados','Barein','Bélgica','Belize','Benin','Bielorrússia','Bolívia','Botsuana','Brasil','Brunei','Bulgária','Burundi','Butão','Camarões','Camboja','Canadá','Catar','Cazaquistão','Chade','Chile','China','Chipre','Cingapura','Colômbia','Comores','Congo','Croácia','Cuba','Dinamarca','Djibuti','Dominica','Egito','Equador','Eritreia','Eslováquia','Eslovênia','Espanha','Estônia','Etiópia','Fiji','Filipinas','Finlândia','França','Gabão','Gâmbia','Gana','Geórgia','Granada','Grécia','Guatemala','Guiana','Guiné','Guiné-Bissau','Guiné-Equatorial','Haiti','Holanda','Honduras','Hungria','Iêmen','Índia','Indonésia','Irã','Iraque','Irlanda','Islândia','Israel','Itália','Jamaica','Japão','Jordânia','Kiribati','Kuweit','Laos','Lesoto','Letônia','Líbano','Libéria','Líbia','Liechtenstein','Lituânia','Luxemburgo','Macedônia','Madagascar','Malásia','Malavi','Maldivas','Mali','Malta','Marrocos','Maurício','Mauritânia','México','Mianmar','Micronésia','Moçambique','Moldávia','Mônaco','Mongólia','Montenegro','Namíbia','Nauru','Nepal','Nicarágua','Níger','Nigéria','Noruega','Omã','Palau','Panamá','Paquistão','Paraguai','Peru','Polônia','Portugal','Quênia','Quirguistão','Romênia','Ruanda','Rússia','Senegal','Sérvia','Seychelles','Síria','Somália','Suazilândia','Sudão','Suécia','Suíça','Suriname','Tadjiquistão','Tailândia','Tanzânia','Taywan','Togo','Tonga','Tunísia','Turcomenistão','Turquia','Tuvalu','Ucrânia','Uganda','Uruguai','Uzbequistão','Vanuatu','Vaticano','Venezuela','Vietnã','Zâmbia','Zimbábue']
const animais = ['abelha','abutre','ácaro','águia','albatroz','alce','alpaca','anaconda','anchova','andorinha','anta','antílope','aranha','arara','asno','atum','avestruz','babuíno','bacalhau','bacuri','badejo','bagre','baiacu','baleia','barata','barbo','barracuda','beija-flor','bem-te-vi','besouro','bezerro','bicho-da-seda','bisonte','bode','borboleta','boto','búfalo','burro','cabra','cachalote','cachorro','cágado','camaleão','camarão','camelo','camundongo','canário','canguru','capivara','caracol','caranguejo','carneiro','carrapato','cascavel','castor','cavalo','cavalo-marinho','cegonha','centopeia','chimpanzé','chinchila','chita','cigarra','cisne','coala','cobra','codorna','coelho','coiote','coruja','corvo','crocodilo','cupim','cutia','damão','dançador','degolado','degu','diablotim','diabo-da-tasmânia','diamante-de-gould','dingo','dinossauro','dodô','doninha','dourado','dragão-de-komodo','dragão-do-banhado','dragão-voador','dromedário','dugongo','égua','elefante','elefante-marinho','enchova','enferrujado','enguia','enho','escaravelho','escorpião','escrevedeira','esmerilhão','espadarte','esponja','esquilo','estorninho','estrela-do-mar','esturjão','faisão','falcão','ferreirinho','flamingo','flautim','foca','formiga','fossa','fraca-da-guiné','freirinha','fuinha','furão','gafanhoto','gaivota','galinha','galo','gambá','gamo','ganso','garça','garoupa','gato','gavião','gazela','geco','gerbo','gibão','girafa','girino','golfinho','gorila','gralha','grifo','grilo','grou','guará:','guaxinim','hadoque','hamster','harpia','hiena','hipopótamo','hírax','iaque','íbex','íbis','iguana','iguanara','impala','indicador','indri', 
    'inhacoso','inhala','inhambu','irapuã','irara','iratim','itapema','jabiru','jabuti','jaçanã','jacaré','jacu','jacupará','jaguar','jamanta','jararaca','javali','jegue','jiboia','joaninha','joão-de-barro','jumento','kakapo','kinguio','kiwi','koala','kookaburra','kowari','krill','kudu','lacraia','lagarta','lagartixa','lagarto','lagosta','lampreia','lavadeira','lavagante','leão','leão-marinho','lebre','lêmure','leopardo','lesma','lhama','libélula','lince','linguado','lobo','lombriga','lontra','lula','macaco','mamute','manatim','mandril','mangangá','maracanã','marimbondo','mariposa','marisco','marmota','marreco','marta','massarongo','medusa','melro','mergulhão','merluza','mexilhão','mico','milhafre','mineirinho','minhoca','mocho','mono','morcego','moreia','morsa','mosca','mosquito','muçurana','mula','musaranho','naja','nambu','nandaia','narceja','narval','náutilo','negrinho','neon','nhacundá','nhandiá','niala','niquim','noitibó','numbat','nútria','ocapi','olho-de-boi','onça','orangotango','orca','órix','ornitorrinco','osga','ostra','otária','ouriço','ouriço-do-mar','ovelha','panda','pantera','papagaio','pardal','pássaro','pato','pavão','peixe','peixe-boi','pelicano','percevejo','perereca','periquito','pernilongo','peru','pescada','pica-pau','pinguim','piolho','piranha','pirarucu','polvo','pombo','pônei','porco','porco-espinho','porquinho-da-índia','preá','preguiça','pulga','quati','quatimirim','quatipuru','quebra-nozes','quebra-ossos','queixada','quem-te-vestiu','quero-quero','quetzal','quiriquiri','rabudinho','raia','raposa','ratazana','rato','rêmora','rena','rendeira','rinoceronte','robalo','rouxinol','sabiá','sagui','salamandra','salmão','sanguessuga','sapo','sardão','sardinha','saúva','seriema','serpente','siri','suçuarana','sucuri','suiriri','suricate','surubi','surucucu','tainha','tamanduá','tamboril','tapir','tarântula','tartaruga','tatu','tatuí','tentilhão','tetra','texugo','tico-tico','tigre','tilápia','tordo','tororó','toupeira','touro','tritão','truta','tubarão','tucano','tucuxi','uacari','unau','unha-longa','unicórnio','urso','urubu','urutaurana','urutu','vaca','vaca-marinha','vaga-lume','veado','verdilhão','verdinho','vespa','víbora','vieira','vira-bosta','vison','vitela','viúva','viúva-negra','wallaby','weimaraner','wombat','xajá','xangó','xarelete','xaréu','xaru','xauim','xero','xexéu','ximango','ximburé','xofrango','xuri','ynambu','yorkshire','zabelê','zangão','zaragateiro','zarro','zebra','zebu','zidedê','zombeteiro','zorrilho']
const frutas = ['cajá','caju','coco','abiu','figo','ingá','jaca','açaí','maçã','pera','romã','umbu','cacau','caqui','jambo','manga','melão','pequi','uvaia','amora','banana','goiaba','jatobá','lichia','marolo','ameixa','pinhão','tucumã','abacate','cupuaçu','embaúba','jamelão','laranja','macaúba','acerola','marmelo','morango','nêspera','pêssego','pitanga','graviola','maracujá','melancia','mexerica','carambola','ciriguela','framboesa','fruta-pão','mandacaru','nectarina','tangerina','jabuticaba','fruta-do-conde','lima-da-pérsia','ameixa-amarela','pera-do-cerrado','amora-silvestre','castanha-do-pará','tomate-de-árvore']
const carros = ['Audi','Edra','Emis','Ford','Jeep','Tico','Tipo','Puma','Clio','Edge','Elba','Emme','City','Bolt','Leaf','Inca','Onça','Mobi','Spin','Kwid','Oggi','Effa','Fiat','IBAP','Lada','Golf','Move','Romi','Bora','Idea','SEAT','Aero','Saga','Onix','Volt','Toro','Argo','Jetta','Equus','Versa','Civic','Cuore','Equus','Azera','Hilux','Jimny','Ibiza','Focus','Honda','Lanos','Lexus','Camry','Volvo','Stark','Lafer','Kyron','Kicks','Coupé','Chery','Prius','Nobre','Ibiza','Kombi','Miura','Smart','Creta','Vogue','Logus','Marea','Astra','Lifan','Ragge','Rally','Adamo','Villa','Yaris','Aldee','Etios','Cruze','Celer',
    'Linea','March','Simca','Pampa','Stilo','Bravo','Brava','Tiida','Farus','Punto','Senna','Twizy','Geely','Opala','Logan','Corsa','Macan','Mazda','Palio','Celta','Meriva','Terios','Trimax','Previa','Corcel','Kadett','Malibu','Mondeo','Passat','Scénic','Squalo','Tempra','Livina','Amarok','Bugato','Ducato','Savana','Toyota','Dakota','Strada','Corona','Tivoli','Twingo','Apollo','Actyon','Tiguan','Agrale','Tucson','Artigo','Daewoo','Nubira','Envesa','Subaru','Dankar','Lorena','Camper','Duster','Marruá','Voyage','Verona','Zafira','Captur','Hoggar','Hummer','Bianco','Fusion','Grande','Virtus','Kadron','Spirit','Prisma',
    'Gurgel','Legacy','Lucena','Magnum','S-Type','Gringo','Marajó','Parati','Fiesta','Isetta','Início','Polara','Royale','Sonata','Blazer','Taurus','Lobini','Vectra','Prince','Capeta','Lancer','Aurora','Accord','Prêmio','Belcar','Cronos','Tanger','Cobalt','Camaro','Spazio','Escort','Suzuki','Jaguar','Pajero','Fortwo','Sentra','Editar','Engesa','Envemo','Rexton','Mirage','Feroza','Cooper','Nissan','Belina','Eclipse','Bonanza','Córdoba','Fluence','Ipanema','Pointer','Touareg','Courier','Compass','Galaxie','Mustang','Montana','Genesis','Stratus','Monarca','Corolla','Lincoln','Troller','Regente','Teimoso','Jangada',
    'Peugeot','Suprema','Grancar','Leganza','Outback','Malzoni','Impreza','Caravan','Fissore','Gordini','Korando','Beretta','Amazona','LeBaron','Renault','Caprice','Quantum','Variant','Lassale','Caiçara','Journey','Corisco','Fielder','Protegè','T-Cross','Citroën','Durango','Saveiro','Carajás','Charger','Fiorino','Santana','Sandero','Inbrave','Glaspac','Hyundai','Furglass','Veracruz','Alvorada','Dauphine','Pantanal','EcoSport','Panorama','Frontier','Wrangler','Chambord','Veraneio','Brasília','Concorde','Maverick','Mahindra','Cherokee','Avallone','Chevette','Forester','Aircross','Candango','Veloster','Renegade','Defender','Daihatsu','Vemaguet','Applause','Chamonix','Camioneta','Supermini','SsangYong','Chevrolet','Silverado','Itamaraty','DKW-Vemag','Engerauto','Democrata','Polystilo','Tocantins','Esplanada','Outlander','Discovery','Volkswagen','Hofstetter','Countryman','Mitsubishi','Versailles','TrailBlazer','Motomachine','Continental','Mercedes-Benz']
const cidadesBrasileiras =['Brasília','Salvador','Fortaleza','Manaus','Curitiba','Recife','Goiânia','Belém','Guarulhos','Campinas','Maceió','Natal','Teresina','Uberlândia','Osasco','Sorocaba','Contagem','Aracaju','Cuiabá','Joinville','Londrina','Ananindeua','Serra','Macapá','Niterói','Florianópolis','Betim','Maringá','Santos','Diadema','Jundiaí','Piracicaba','Carapicuíba','Anápolis','Olinda','Cariacica','Bauru','Itaquaquecetuba','Vitória','Caruaru','Caucaia','Blumenau','Petrolina','Franca','Canoas','Pelotas','Uberaba','Paulista','Cascavel','Guarujá','Taubaté','Palmas','Limeira','Camaçari','Santarém','Petrópolis','Mossoró','Suzano','Sumaré','Marabá','Gravataí','Barueri','Parnamirim','Ipatinga','Macaé','Indaiatuba','Imperatriz','Cotia','Viamão','Colombo','Itaboraí','Americana','Itapevi','Divinópolis','Marília','Araraquara','Rondonópolis','Hortolândia','Jacareí','Arapiraca','Maracanaú','Dourados','Chapecó','Itajaí','Juazeiro','Criciúma',
    'Parauapebas','Luziânia','Itabuna','Sobral','Alvorada','Castanhal','Araçatuba','Araguaína','Teresópolis','Ibirité','Guarapuava','Linhares','Palhoça','Mesquita','Pindamonhangaba','Timon','Maricá','Itapetininga','Caxias','Nilópolis','Abaetetuba','Camaragibe','Barreiras','Ilhéus','Paranaguá','Lages','Jequié','Parnaíba','Alagoinhas','Queimados','Botucatu','Sinop','Araucária','Atibaia','Toledo','Garanhuns','Cametá','Brusque','Barbacena','Sabará','Varginha','Apucarana','Araras','Itaguaí','Araruama','Marituba','Pinhais','Crato','Resende','Valinhos','Cubatão','Cachoeirinha','Trindade','Vespasiano','Itapipoca','Maranguape','Ji-Paraná','Bragança','Barcarena','Guarapari','Sertãozinho','Jandira','Uruguaiana','Arapongas','Birigui','Formosa','Caraguatatuba','Santana','Votorantim','Colatina','Itatiba','Tatuí','Barretos','Guaratinguetá','Catanduva','Itabira','Salto','Igarassu','Araguari','Altamira','Piraquara','Tucuruí','Parintins','Passos',
    'Paragominas','Eunápolis','Ourinhos','Paulínia','Açailândia','Umuarama','Catalão','Corumbá','Tailândia','Ariquemes','Muriaé','Patos','Araxá','Cambé','Erechim','Tubarão','Itumbiara','Japeri','Lagarto','Ituiutaba','Assis','Lavras','Bacabal','Aracruz','Vilhena','Itaperuna','Itanhaém','Breves','Itacoatiara','Caieiras','Mairiporã','Iguatu','Jataí','Itaituba','Manacapuru','Ipojuca','Sarandi','Guaíba','Valença','Itajubá','Bayeux','Balsas','Itabaiana','Votuporanga','Caçapava','Cáceres','Itapeva','Sorriso','Paracatu','Itaúna','Caratinga','Ubatuba','Arujá','Patrocínio','Manhuaçu','Saquarema','Avaré','Planaltina','Timóteo','Lorena','Paranavaí','Quixadá','Gurupi','Candeias','Camboriú','Coari','Cacoal','Redenção','Lajeado','Navegantes','Pacatuba','Guanambi','Gravatá','Araripina','Carpina','Cianorte','Pinheiro','Matão','Seropédica','Esteio','Cruzeiro','Macaíba','Quixeramobim','Serrinha','Aquiraz','Vinhedo','Curvelo','Alfenas','Jacobina',
    'Viana','Chapadinha','Sapiranga','Goiana','Ibiúna','Caçador','Viçosa','Russas','Cajamar','Picos','Jaboticabal','Bebedouro','Canindé','Itapetinga','Pirassununga','Valença','Tianguá','Cataguases','Itapira','Concórdia','Aracati','Arcoverde','Crateús','Oriximiná','Cosmópolis','Ceará-Mirim','Pacajus','Irecê','Farroupilha','Buriticupu','Amparo','Cascavel','Esmeraldas','Alegrete','Janaúba','Indaial','Castro','Goianésia','Gaspar','Grajaú','Biguaçu','Ouricuri','Embu-Guaçu','Sousa','Estância','Capanema','Cabedelo','Escada','Peruíbe','Horizonte','Fernandópolis','Araranguá','Mineiros','Itapema','Itapecuru-Mirim','Mococa','Caicó','Tabatinga','Rolândia','Pesqueira','Januária','Formiga','Brumado','Vacaria','Camaquã','Surubim','Maués','Montenegro','Bertioga','Coroatá','Itaberaba','Benevides','Tomé-Açu','Itamaraju','Itupeva','Camocim','Penápolis','Penedo','Barreirinhas','Portel','Piripiri','Moreno','Palmares','Acaraú','Batatais',
    'Igarapé-Miri','Boituva','Cajazeiras','Carazinho','Ulianópolis','Guapimirim','Viseu','Mariana','Barbalha','Salgueiro','Irati','Cristalina','Ibitinga','Bezerros','Sidrolândia','Mirassol','Jacundá','Frutal','Floriano','Juruti','Tutóia','Jaguariúna','Buíque','Parobé','Guarabira','Ipirá','Mongaguá','Içara','Taquara','Coruripe','Taquaritinga','Manicoré','Alenquer','Paudalho','Andradina','Humaitá','Capivari','Pirapora','Mafra','Trairi','Naviraí','Registro','Canguçu','Limoeiro','Congonhas','Acará','Piedade','Ibiporã','Olímpia','Granja','Eusébio','Jaguaquara','Araci','Acopiara','Vigia']
const cidadesEstrangeiras = ['Shanghai','Bombay','Istanbul','Manila','Moscow','Delhi','Peking','Lagos','Jakarta','Kinshasa','Cairo','London','Bogotá','Bangalore','Singapore','Yangon','Bangkok','Ibadan','Santiago','Riyadh','Toronto','Tianjin','Chongqing','Madras','Alexandria','Abidjan','Calcutta','Ankara','Wuhan','Nanjing','Harbin','Hyderabad','Shenyang','Sydney','Yokohama','Chengdu','Gizeh','Melbourne','Nairobi','Durban','Jaipur','Berlin','Pyongyang','Montreal','Jiddah','Algiers','Madrid','Casablanca','Pusan','Kabul','Changchun','Guangzhou','Taiyuan','İzmir','Lakhnau','Luanda',
    'Shijiazhuang','Surabaya','Khartoum','Salvador','Dakar','Bekasi','Nanchang','Changsha','Benin','Chicago','Mashhad','Jilin','Fortaleza','Yaoundé','Bandung','Douala','Jinan','Dalian','Guayaquil','Maracaibo','Medellín','Taegu','Xinyang','Accra','Nagoya','Kaduna','Hangzhou','Vancouver','Tashkent','Paris','Medan','Johannesburg','Houston','Havanna','Patna','Kumasi','Depok','Soweto','Zhengzhou','Pimpri','Indore','Caracas','Bamako','Tangerang','Pretoria','Suzhou','Aleppo','Sapporo','Damascus','Brisbane','Manaus','Antananarivo','Qingdao','Bucharest','Rongcheng','Minsk','Rabat',
    'Lubumbashi','Jiulong','Urumqi','Dubai','Quito','Hamburg','Curitiba','Conakry','Valencia','Mbuji-Mayi','Vienna','Warsaw','Ouagadougou','Karaj','Harare','Tangshan','Bursa','Abuja','Kampala','Muqdisho','Vadodara','Barcelona','Shenzhen','Budapest','Brazzaville','Adana','Mecca','Lomé','Semarang','Xuzhou','Recife','Gaziantep','Lusaka','Fushun','Córdoba','Philadelphia','Mandalay','Kwangju','Shantou','Novosibirsk','Palembang','Fukuoka','Phoenix','Baotou','Wuxi','Lanzhou','Guadalajara','Kharkiv','Almatı','Davao','Hefei','Kawasaki','Handan','Belém','Hyderabad','Luoyang','Munich',
    'Yekaterinburg','Fuzhou','Huainan','Makasar','Juárez','Perth','Tijuana','Goiânia','Montevideo','Milan','Gazipur','Baoding','Stockholm','Anshan','Amritsar','Saitama','Xianggangdao','Prague','Guarulhos','Benxi','Kigali','København','Rosario','Xianyang','Srīnagar','Zapopan','Maiduguri','al-Madīnah','Dallas','Guiyang','Hiroshima','Kunming','Ilorin','Barquisimeto','Samara','Kazan','Guatemala','Maputo','Chelyabinsk','Batam','Taian','Monrovia','Tegucigalpa','Barranquilla','Brussels','Tbilisi','Calgary','Aşgabat','Changzhou','Koyampattur','Monterrey','Datong','Yerevan',
    'Jabalpur','Changwŏn','Sofia','Shubra-El-Khema','Kananga','Suwŏn','Ulsan','Rostov-na-Donu','Niamey','Campinas','Yongin','Belgrade','Huaibei','Dublin','Adelaide','Visakhapatnam','Jodhpur','Qiqihar','Warri','Salem','Sendai','Bhubaneswar','Zhangjiakou','Bogor','Onitsha','Kathmandu','Cologne','Wenzhou','Volgograd','Krasnoyarsk','Voronezh','Edmonton','Bişkek','Mombasa','Sharjah','Chandīgarh','Akure','Maceió','Arequipa','Chiba','Gwalior','Donetsk','Odesa','Kisangani','Kitakyūshū','Sŏngnam','Bhiwandi','Hubli','Cartagena','Ottawa','Marrakech','Jalandhar','Puyang',
    'Koyang','Konya','Madurai','Mendoza','Yantai','an-Najaf','Qinhuangdao','Alīgarh','Foshan','Birmingham','Naples','Denpasar','Managua','Raipur','Trujillo','Hamamatsu','Xining','Pietermaritzburg','Pingdingshan','Xingtai','Hegang','Ulaanbaatar','Nouakchott']

const todasPalavras = [animais, frutas,  carros,  cidadesBrasileiras,  cidadesEstrangeiras,elementosQuimicos, paises]
const todosTemas = [ "Animais", "Frutas", "Carros", "Cidades Brasileiras", "Cidades Estrangeiras", "ElementosQuímicos", "Países"]

let nColunas = 25
let nLinhas = 36
let tentativas = 50
let dificuldade = 8
let nPalavras = 25
let contagemErro = 0
let contagemAcerto = 0
let momentoInicial = 0
let momentoFinal = 0
let podeJogar = true
let limiteErros = 10
let campoStatusJogo = document.getElementById("status-jogo")
let opcoesTemas = document.querySelector("#tema")

for (tema of todosTemas){
    let opcao = document.createElement("option")
    opcao.innerText = tema
    opcoesTemas.appendChild(opcao)
}