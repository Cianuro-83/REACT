import { Link } from 'react-router-dom';

const PellegrinaggioHome = () => {
	return (
		<div className="rfc-PellegrinaggioHome container">
			<h1 className="text-center text-uppercase fw-bolder">
				pellegrinaggio
			</h1>
			<div>
				<p>
					La Valle di Canneto, come detto gia in precedenza nella sezione
					riguardante la Storia, conosce fin dall’antichità due tipi di
					pellegrinaggi ben distinti e caratterizzati: quello pagano in
					epoche pre-cristiane, incentrato sul culto della deità fluviale
					di Capodacqua, alle sorgenti del Melfa, e quello mariano di oggi.
					L’uno ebbe frequentazione piuttosto limitata, dal IV al sec. II
					a.C.; l’altro, iniziato storicamente nei primi secoli del secondo
					millennio, dura a tutt’oggi. Questo pellegrinaggio può essere
					testimoniato dalle prime donazioni alla chiesa di Canneto. Quando
					i primi fedeli cominciarono a visitare l’edicola della Vergine
					(tale doveva essere nei suoi primordi la chiesa), iniziarono
					anche le prime offerte di terre e di altri beni. Tra
					pellegrinaggio ed offerte esiste un rapporto diretto, una
					progressione aritmetica, per cui all’incremento del primo
					corrisponde un incremento delle seconde. Anche la bolla del 1475
					non manca di metterlo in luce. I fedeli, dice il documento,
					desiderosi di aiuto divino e riconoscimenti delle grazie gia
					ricevute lassù, si sentirono sempre più spinti a visitare la
					chiesa e a dare il proprio obolo per il suo restauro. Ora, data
					la connessione tra i due fenomeni, dalla progressiva entità di
					patrimonio fondiario di Canneto è possibile dedurre delle
					indicazioni, anche se indirette, sull’andamento del suo
					pellegrinaggio. Il primo nucleo di quel beneficio, frutto insieme
					dei primi pellegrinaggi e delle prime donazioni pie, appare ben
					delineato nel dicembre 1288, data del rescritto di Niccolò IV. In
					questo stesso periodo nella chiesa di S. Maria di Canneto
					troviamo per la prima volta un collegio di chierici, addetto al
					servizio del tempio e all’assistenza religiosa dei devoti, che
					qui affluivano. Col tempo esso crebbe nel numero dei fedeli e nei
					giorni delle visite, soprattutto dopo il 25 novembre 1475, quando
					la Santa Sede concesse l’indulgenza di 100 giorni da potersi
					lucrare in cinque ricorrenze liturgiche: l’Assunzione, la sua
					Ottava, la Natività di Maria, la Natività di S. Giovanni Battista
					e la Dedicazione della chiesa. All’epoca dello scrittore alvitano
					Prudenzio (1574) i devoti si portavano a Canneto con frequenza,
					specialmente in quei cinque giorni dell’indulgenza; in spirito di
					penitenza e di preghiera, provenienti dai paesi vicini.
				</p>
				<div className="image-container">
					<img
						src="/img/pellegrinaggio/pellegrinaggio 1.webp"
						alt="pellegrini a canneto"
						className="responsive-img"
					/>
				</div>
				<p>
					Ma con il passare del tempo quasi tutti quei “gironi della visita
					” caddero l’uno dopo l’altro in disuso e sopravisse solo l’ottava
					dell’Assunzione della Vergine, il 22 agosto, che divenne la festa
					secolare della Madonna di Canneto. In seguito, quasi a compensare
					quelli decaduti, si ebbero nuovi “giorni di visita ”, ovviamente
					non più indulgenziati come i primi, che lentamente andarono a
					concentrarsi immediatamente prima del 22 agosto e che divennero
					di preparazione alla grande festa, occupando a poco a poco tutto
					lo spazio di tempo occorrente per compiere un lungo
					pellegrinaggio a piedi, dalla partenza al ritorno. Il primo di
					questi “nuovi” giorni ad imporsi fu logicamente quello della
					vigilia, il 21 agosto che si affermò come “Festa delle Reliquie”,
					che si celebra ancora a Picinisco appunto in quella data, poi di
					vigilia in vigilia si anticipò ancora, fino agli attuali cinque
					giorni della festa, a cominciare dal 18 agosto. Le Compagnie
					salgono sull’ermo Canneto, sgranate in lunghe processioni,
					attraversi antichi tratturi scavati sulla roccia e sui balzi a
					strapiombo, già conosciuti dal pellegrinaggio pre-cristiano. Nel
					giorno della festa esse si riversano nella valle da ogni angolo:
					a Nord provenienti dall’alto Sangro, attraverso i valichi oggi
					detti di Forca Resuni e Passo dell’Orso; ad Est dall’alto e medio
					Volturno attraverso il Passo dei Monaci; a Sud dal versante del
					Melfa e del medio e Basso Liri, via Settefrati e Picinisco.
				</p>
				<div className="image-container">
					<img
						src="/img/pellegrinaggio/pellegrinaggio 2.webp"
						alt="pellegrini a canneto"
						className="responsive-img"
					/>
				</div>
				<div className="d-flex justify-content-center">
					{/*<button type="button" className="btn btn-primary">
						 <Link to="/app/pellegrinaggio/compagnie">
							Elenco compagnie
						</Link> 
					</button>*/}
					<button type="button" className="btn btn-primary">
						<Link to="/app/pellegrinaggio/feste">Festività</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default PellegrinaggioHome;
