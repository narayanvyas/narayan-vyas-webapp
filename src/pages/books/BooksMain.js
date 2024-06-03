// src/pages/BooksMain.js

import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumnew';
import CTA from '../../components/CTA';
import SingleProduct from '../../components/Product';
import booksData from '../../data/booksData';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

const BooksMain = () => {
	// Sort books by release date, latest first
	const sortedBooks = booksData.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));

	return (
		<main>
			<Breadcrumb pageTitle="Books" />
			<div className="product__area product__plr mt-100 mb-70">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-12">
							<div className="product__title-sm wow animate__fadeInUp" data-wow-duration="1.1s">
								<h4>Showing All Published Books</h4>
							</div>
						</div>
					</div>
					<div className="row">
						{sortedBooks.map((book) => (
							<div
								key={book.id}
								className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp"
								data-wow-duration="1.1s"
							>
								<SingleProduct
									Image={book.title.image}
									Title={book.title.text}
									Publisher={book.publisher}
									Price={book.price}
									Url={book.permalink}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<CTA 

			/>
		</main>
	);
}

export default BooksMain;
