import { ProductsContainer, ProductSection, ProductsHeading, ProductWrapper } from "./styles/Products.styled";
import { features } from '../data/itemLists';
import { FeatureInfo, FeatureCard, FeatureDesc, FeatureButton } from "./styles/Features.styled";


const Features = () => {
    return (
        <ProductsContainer>
            <ProductSection>
                <ProductsHeading>Why Choose Dadonuts?</ProductsHeading>
                <ProductWrapper>
                    {features.map((feature, index) => {
                        return (
                            <FeatureCard key={index}>
                                <FeatureInfo>
                                    {feature.icon}
                                    <h2>{feature.title}</h2>
                                    <FeatureDesc>{feature.desc}</FeatureDesc>
                                    <FeatureButton>{feature.button}</FeatureButton>
                                </FeatureInfo>   
                            </FeatureCard>
                        );
                    })}
                </ProductWrapper>
            </ProductSection>
        </ProductsContainer>
    );
}
 
export default Features;