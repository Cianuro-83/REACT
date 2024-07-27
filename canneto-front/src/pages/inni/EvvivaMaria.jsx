import React from 'react';

const text = `
Rit. Evviva Maria nell'ermo Canneto.
Un popolo lieto evviva gridò.

Sui balzi in Canneto comparve Maria,
un suon d'allegria quel bosco mandò.

Quel bosco, quel prato si scelse a dimora,
di grazie l'aurora per noi cominciò.

Apparso tra i monti quell'iri vivace,
un'ara di pace sui monti s’alzò.

Allora festante su quel sacro suolo
innumero stuolo di popoli andò.

I popoli accorsi cercarono l'ara
e fecero a gara a chi più l’amò.

E viste l'auguste sembianze leggiadre,
di grazie la Madre in lei salutò.

A nostra custodia dal cielo discese
lo sguardo distese e il turbo fugò.

Al raggio primiero dell'alma sua fronte
l'immenso orizzonte di luce brillò.

Le fulge sul petto più viva più bella
a tremola stella che l'alba annunziò.

A quanti percossi di nera procella
quest'alma donzella soccorso portò.

O torre agguerrita roveto incombusto
letizia del giusto ognun ti chiamò.

Deh porgi soccorso al mesto mortale
che il genio del male afflisse e macchiò.

T'invocan i Regi t'acclaman le genti
ché de' tuoi portenti il mondo suonò.

De' miseri sei l'estremo conforto
adduci nel porto chi a Te si fidò.

Tu l'angue atterrasti del primo delitto;
l'Averno sconfitto per te sol restò.

La fonte verace di viva pietade
le nostre contrade difender giurò.

Il pianto de' figli s'alzava da un canto
ed essa a quel pianto lo sguardo abbassò.

Rit. Evviva Maria nell'ermo Canneto.
Un popolo lieto evviva gridò.
`;

const EvvivaMaria = () => {
	const lines = text.trim().split('\n');

	return (
		<div className="rfc-EvvivaMaria">
			<h3 className="text-center text-uppercase mt-3 fw-bolder">
				evviva maria <br />
				inno ufficiale della basilica-santuario s. maria di canneto
			</h3>
			<p>
				Il canto dei pellegrini di Canneto, fino al 1874, attingeva al
				repertorio mariano tradizionale, comune ai vari paesi, formato da
				antiche canzoncine alla Madonna, come "Salve del ciel, Regina", "Ti
				voglio amar Maria" e le Litanie Lauretane. Dal 1874 ad oggi, signore
				dei canti del Santuario di Canneto è l'Evviva Maria, sgorgato dal
				cuore del poeta-pellegrino Aniceto Venturini (1843-1887), sindaco di
				Settefrati e grande erudito. L'inno, ispirato al noto motivo
				musicale della comune "Evviva Maria e chi la creò", è composto da 18
				quartine in versi senari. Il primo verso è libero, il secondo e
				terzo in rima baciata, il quarto è tronco. Le prime otto strofe
				ricantano la leggenda, le altre dieci le glorie di Maria.
			</p>
			<div className="evvivamaria">
				{lines.map((line, index) => (
					<React.Fragment key={index}>
						{index < 2 || index >= lines.length - 2 ? (
							<strong>{line}</strong>
						) : (
							line
						)}
						<br />
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default EvvivaMaria;
