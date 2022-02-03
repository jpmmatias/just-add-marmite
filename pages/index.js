import { createClient } from 'contentful';
import RecipeCard from '../components/RecipeCard';

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE,
		accessToken: process.env.ACCESS_TOKEN_COTENTFUL,
	});

	const res = await client.getEntries({ content_type: 'recipe' });

	return {
		props: {
			recipes: res.items,
		},
		revalidate: 604800 * 4,
	};
}

export default function Recipes({ recipes }) {
	return (
		<div className='recipe-list'>
			{recipes.map((recipe) => (
				<RecipeCard key={recipe.id} recipe={recipe} />
			))}
			<style jsx>
				{`
					.recipe-list {
						display: grid;
						grid-template-columns: 1fr 1fr;
						grid-gap: 30px 60px;
					}
				`}
			</style>
		</div>
	);
}
