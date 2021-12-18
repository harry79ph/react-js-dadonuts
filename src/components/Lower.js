import { ProductsContainer, ProductSection, ProductsHeading, ProductWrapper } from "./styles/Products.styled";
import { features } from './itemLists';
import { FeatureInfo, FeatureCard, FeatureTitle, FeatureDesc, FeatureButton } from "./styles/Lower.styled";


const Lower = () => {
    return (
        <ProductsContainer>
            <ProductSection>
                <ProductsHeading>Why Choose Dadonut?</ProductsHeading>
                <ProductWrapper>
                    {features.map((feature, index) => {
                        return (
                            <FeatureCard key={index}>
                                <FeatureInfo>
                                    {feature.icon}
                                    <FeatureTitle>{feature.title}</FeatureTitle>
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
 
export default Lower;