import { TiArrowRightThick } from 'react-icons/ti';
import ConversionRateBox from '@/components/realty/conversion-rate/ConversionRateBox';

const ConversionRatePage = () => {
	return (
		<div className="flex flex-col gap-y-6">
			<ConversionRateBox
				title={
					<>
						💸 월세 <TiArrowRightThick /> 전세
					</>
				}
			>
				<div>
					<label>보증금</label>
					<input />
				</div>
				<div>
					<label>월세</label>
					<input />
				</div>
				<div>
					<label>전환율</label>
					<input placeholder="" />
				</div>
				<div>
					<label>예상 전세 보증금</label>
					<input placeholder="" />
				</div>
			</ConversionRateBox>
			<div className="bg-white shadow-lg rounded-xl p-5">
				<h3 className="text-xl font-bold flex items-center gap-x-2">
					💸 전세 <TiArrowRightThick /> 월세
				</h3>
				<div>
					<div>
						<label>총 전세 보증금</label>
						<input />
					</div>
					<div>
						<label>보증금</label>
						<input />
					</div>
					<div>
						<label>월세로 전환할 보증금</label>
						<input placeholder="총 전세 보증금 - 보증금" />
					</div>
					<div>
						<label>전환율</label>
						<input placeholder="" />
					</div>
					<div>
						<label>예상 월세</label>
						<p></p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConversionRatePage;
