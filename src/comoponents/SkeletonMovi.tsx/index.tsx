import * as C from './styles';

export const SkeletonMovi = () => {
    
    return (
        <C.Container>
            <C.MovieArea>
                <div className='imgFake'></div>

				<C.InfoArea>
					<C.Title></C.Title>
                    
					<C.infoP></C.infoP>
					<C.infoP></C.infoP>
				</C.InfoArea>     
            </C.MovieArea>
        </C.Container>
    )
}