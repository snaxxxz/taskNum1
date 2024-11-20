import styles from './SecondProductCard.module.css'

function SecondProductCard() {

	return(
		<>
			<div className={styles.info__block}>
				<div className={styles.firstInfo__block}>
					<div className={styles.first_card__inBlock}>
						<div className={styles.images__block}>
							<img 
							className={styles.mainImages} 
							src="./public/images/img-desktop2.png" 
							alt="" 
							/>
							<img 
							className={styles.interactiveImages__block} 
							src="./public/images/icon-fashion.png" 
							alt="" 
							/>
						</div>
						<div className={styles.textInfo__block}>
							<div className={styles.first__textBlock}>
								<div className={styles.link_block}>
										<div className={styles.activelink}>
												<a className={styles.itemLink} href="#">Fashion</a>
										</div>
										<div className={styles.links}>
											<a className={styles.itemLink} href="#">Artículo</a>
											<a className={styles.itemLink} href="#">Niños</a>
											<a className={styles.itemLink} href="#">Proyecto</a>
										</div>
									</div>
									<h4 className={styles.mainText__inBlock}>
										¿Cómo hacer el cambio de carrera a Diseño de Productos 		Digitales?
									</h4>
							</div>
							<div className={styles.second__textBlock}>
								<p className={styles.text__block}>
									¿Quieres saber qué se estudia para ser paisajista y formar 	parte de uno de los gremios que están en auge a nivel laboral? 	Sigue leyendo.
								</p>
								<div className={styles.dateAndTime__block}>
									<div className={styles.dateBlock}>
										<img src="./public/images/icon-calendar.png" alt="" />
										<p className={styles.textDate}>2 de junio de 2022</p>
									</div>
									<div className={styles.timeBlock}>
									<img src="./public/images/icon-watch.png" alt="" />
									<p className={styles.textTime}>10 min</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.second_card__inBlock}>
						<div className={styles.first_card__inBlock}>
							<div className={styles.images__block}>
								<img 
								className={styles.mainImages} 
								src="./public/images/img-desktop3.png" 
								alt="" 
								/>
								<img 
								className={styles.interactiveImages__block} 
								src="./public/images/icon-diseno.png" 
								alt="" 
								/>
							</div>
							<div className={styles.textInfo__block}>
								<div className={styles.first__textBlock}>
									<div className={styles.link_block}>
											<div className={styles.activelink}>
													<a className={styles.itemLink} href="#">Diseño</a>
											</div>
											<div className={styles.links}>
												<a className={styles.itemLink} href="#">Artículo</a>
												<a className={styles.itemLink} href="#">Niños</a>
												<a className={styles.itemLink} href="#">Proyecto</a>
											</div>
										</div>
										<h4 className={styles.mainText__inBlock}>
											¿Qué hace un paisajista y cuánto gana?
										</h4>
								</div>
								<div className={styles.second__textBlock}>
									<p className={styles.text__block}>
										¿Quieres saber qué se estudia para ser paisajista y formar 	parte de uno de los gremios que están en auge a nivel 	laboral? Sigue leyendo.
									</p>
									<div className={styles.dateAndTime__block}>
										<div className={styles.dateBlock}>
											<img src="./public/images/icon-calendar.png" alt="" />
											<p className={styles.textDate}>2 de junio de 2022</p>
										</div>
										<div className={styles.timeBlock}>
										<img src="./public/images/icon-watch.png" alt="" />
										<p className={styles.textTime}>10 min</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* 3bq */}
				<div className={styles.third_card__inBlock}>
					<div className={styles.third_images__block}>
						<img 
						className={styles.third_mainImages} 
						src="./public/images/img-desktop4.png" 
						alt="" 
						/>
						<img 
						className={styles.third_interactiveImages__block} 
						src="./public/images/icon-diseno.png" 
						alt="" 
						/>
					</div>
					<div className={styles.mainTextInfo__block}>
						<div className={styles.linkText__block}>
							<div className={styles.third_linkBlock}>
								<div className={styles.third_activelink}>
										<a className={styles.itemLink} href="#">Diseño</a>
								</div>
								<div className={styles.links}>
									<a className={styles.itemLink} href="#">Artículo</a>
									<a className={styles.itemLink} href="#">Niños</a>
									<a className={styles.itemLink} href="#">Proyecto</a>
								</div>
							</div>
							<div className={styles.dateAndTime__block}>
								<div className={styles.dateBlock}>
									<p className={styles.third_textDate}>2 de junio de 2022</p>
									<img src="./public/images/icon-calendar.png" alt="" />
								</div>
								<div className={styles.timeBlock}>
									<p className={styles.third_textTime}>10 min</p>
									<img src="./public/images/icon-watch.png" alt="" />
								</div>
							</div>
						</div>
						<div className={styles.thirdMainText__inBlock}>
							<h3 className={styles.thirdMainText}>Todo lo que querías saber sobre Diseño UX / UI
							</h3>
							<p className={styles.thirdText}>
								Aunque los conceptos de experiencia de usuario y desarrollo de 	interfaces han estado presentes durante décadas en numerosas 	industrias, muchas personas aún tienen dudas sobre lo que 	realmente hace un profesional en este campo. 
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default SecondProductCard