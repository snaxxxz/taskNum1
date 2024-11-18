import styles from './ProductCard.module.css'


function ProductCard() {

	return(
		<>
			
				<div className={styles.info__block}>
					<div className={styles.inside__block}>
						<div className={styles.images__block}>
							<img 
							className={styles.mainImages}
							src="./public/images/img-desktop1.png" 
							alt="Masked Image"  
							/>
							<img 
							className={styles.interactiveImages__block} 
							src="./public/images/Stickers.png" 
							alt="stickers" />
						</div>
						<div className={styles.textInfo__block}>
								<div className={styles.link_block}>
									<div className={styles.activelink}>
										<a className={styles.itemLink} href="#">Gaming</a>
									</div>
									<div className={styles.links}>
										<a className={styles.itemLink} href="#">Artículo</a>
										<a className={styles.itemLink} href="#">Niños</a>
										<a className={styles.itemLink} href="#">Proyecto</a>
									</div>
								</div>
								<h3 className={styles.mainText__inBlock}>
								El Artista Técnico, cuando la programación y el diseño de juegos se juntan
								</h3>
								<div className={styles.textAndtime__block}>
									<p className={styles.text__block}>¡Es posible unir la pasión por los dos universos! ¿Habías escuchado este término antes? Si no te suena de nada, no te sientas mal, el concepto es nuevo. ¡Nosotros te lo explicamos!</p>
									<div className={styles.time__Block}>
										<div className={styles.date}>
											<img 
											src="./public/images/icon-calendar.png" 
											alt="calendar" />
											<p className={styles.textDate}>2 de junio de 2022</p>
										</div>
										<div className={styles.time}>
											<img 
											src="./public/images/icon-watch.png" 
											alt="" />
											<p className={styles.textTime}>10 min</p>
										</div>
									</div>
								</div>
								<button className={styles.cardBtn__block}>
										<p className={styles.cardBtn__inBlock}>
											Leer el artículo
										</p> 
								</button>
						</div>
					</div>
				</div>
			
		</>
	)
}
export default ProductCard