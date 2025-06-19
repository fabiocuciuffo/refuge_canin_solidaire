import { useState, useRef } from 'react';
import OptionDon from './OptionDon';
import Button from './Button';

function DonBanner() {
  const montants = [5, 10, 20, 30, 50, 140, 150, 200]
  const containerOptions = useRef<HTMLDivElement | null>(null)
  type MontantKey = "5" | "10" | "20" | "30" | "50" | "140" | "150" | "200";
  let [selectedAmount, setSelectedAmount] = useState<MontantKey>("5")
  const montantsDesc = {
    "5": "Un vermifuge pour un petit chien ou une gamelle en inox toute neuve.",
    "10": "Une pipette antiparasitaire (puces, tiques) ou un jouet d’enrichissement.",
    "20": "Un sac de 8 kg de croquettes de qualité vétérinaire (environ 5 jours de nourriture).",
    "30": "Une consultation vétérinaire simple ou un tapis de sol lavable pour plus de confort.",
    "50": "18 à 20 kg de croquettes (environ 2 semaines de repas pour un chien de taille moyenne).",
    "140": "Un soin vétérinaire important : la castration pour préparer une adoption dans les meilleures conditions.",
    "150": "Un panier orthopédique douillet ou du matériel de sécurisation (grillage, niche, barrière).",
    "200": "Le kit complet pour une adoption responsable (Panier, gamelles, croquettes, harnais, laisse).",
  }
  function handleAmountChange(e: React.MouseEvent<HTMLDivElement>) {
    if (e.currentTarget.getElementsByClassName("coche_value")[0].textContent) {
      const value = e.currentTarget.getElementsByClassName("coche_value")[0].textContent ?? "5";
      setSelectedAmount(value as MontantKey);
      if (containerOptions.current) {
        if (containerOptions.current.getElementsByClassName('coche_option')) {
          Array.from(containerOptions.current.getElementsByClassName('coche_option')).map((coche) => {
            const value = (coche as HTMLElement).dataset.value;
          })
        }
      }

    }
  }
  return (
    <section className='p-4 md:p-10'>
      <div className='mb-8'>
      <h2 className='title2 mb-4'>À quoi sert <span className='svg_background'>votre don</span> ?</h2>
      <p>Chaque euro compte, et on veut vous montrer comment. Découvrez ce que nous pouvons faire grâce à vos dons</p>
      </div>
      <div className='flex flex-row md:flex-col w-full justify-between items-center'>
        <div ref={containerOptions} className='flex flex-col-reverse md:flex-row me-8 md:me-0 md:mb-8'>
          {montants.map((m) => {
            return <OptionDon content={m.toString()} selectedAmount={selectedAmount} onClickCallback={handleAmountChange} key={m.toString()} />
          })}
        </div>
        <div className='flex flex-col bg-beige p-4 rounded-lg h-fit'>
          <h4 className='title4'>Pour <span className='text-red'>{selectedAmount} €</span></h4>
          <p className='my-4 md:my-10'>{montantsDesc[selectedAmount]}</p>
          <Button className='bg-blue text-white px-4 whitespace-nowrap w-fit mb-0 mt-auto' link='/'>Je fais un don de {selectedAmount} €</Button>
        </div>
      </div>
    </section>
  )
}

export default DonBanner;