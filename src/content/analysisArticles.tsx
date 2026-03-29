import { SectionImage } from '../components/doc/SectionImage'
import { ANALYSIS_IMAGES } from '../data/analysisImages'
import {
  dashLi,
  dashUl,
  midP,
  midWrap,
  ol1,
  strong1,
} from './docHierarchy'

export function UserFlowArticle() {
  return (
    <div className="max-w-none space-y-8">
      <SectionImage
        src={ANALYSIS_IMAGES.serviceFlow}
        alt="MedNeuro 서비스 이용 흐름도"
        caption="서비스 이용 흐름"
      />
      <ol className={ol1}>
        <li>
          <span className={strong1}>다이어그램 요약</span>
          <div className={midWrap}>
            <p className={midP}>
              사용자가 NIfTI 파일을 업로드하고 메타데이터를 확인한 뒤, 2D 슬라이스
              탐색과 3D 시각화로 이어지는 주요 단계를 순서도로 정리했습니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>설계 시 확인한 점</span>
          <div className={midWrap}>
            <p className={midP}>
              오류·재시도·세션 만료 등 예외 흐름과, 처리 완료 후 결과물을 다시
              불러오는 경로가 누락되지 않도록 했습니다.
            </p>
            <ul className={dashUl}>
              <li className={dashLi}>
                업로드 성공 후 바로 2D 뷰어로 진입하는지, 중간 검증 단계가
                있는지 구분합니다.
              </li>
              <li className={dashLi}>
                3D 렌더링이 비동기일 경우 로딩·실패 UI가 흐름도와 일치하는지
                맞춥니다.
              </li>
            </ul>
          </div>
        </li>
       
      </ol>
    </div>
  )
}

export function UseCaseArticle() {
  return (
    <div className="max-w-none space-y-8">
      <SectionImage
        src={ANALYSIS_IMAGES.useCase}
        alt="MedNeuro 유스케이스 다이어그램"
        caption="유스케이스 다이어그램"
      />
      <ol className={ol1}>
        <li>
          <span className={strong1}>액터와 범위</span>
          <div className={midWrap}>
            <p className={midP}>
              일반 사용자·의사 등 시스템과 상호작용하는 주체를
              구분하고, 각 액터가 접근할 수 있는 유스케이스 묶음을 나누었습니다.
            </p>
          </div>
        </li>
      </ol>
    </div>
  )
}

export function RequirementsArticle() {
  return (
    <div className="max-w-none space-y-8">
      <p className="mb-2 text-[15px] leading-relaxed text-slate-600 sm:text-base">
        프로젝트 전체 요구사항은 총으로 8건
        으로, 아래 정의서 캡처는 그중{' '}
        <strong className="font-semibold text-slate-900">
          2D 뷰어·3D 뷰어
        </strong>{' '}
         기능을 중심으로 발췌했습니다.
      </p>

      <SectionImage
        src={ANALYSIS_IMAGES.requirements}
        alt="MedNeuro 요구사항 정의서"
        caption="요구사항 정의서"
      />
      <ol className={ol1}>
        <li>
          <span className={strong1}>기능 요구</span>
          <div className={midWrap}>
            <p className={midP}>
              파일 입력, 유효성 검사, 뷰어 동작, 내보내기 등 사용자에게 보이는
              동작을 항목별로 나누었습니다.
            </p>
            <ul className={dashUl}>
              <li className={dashLi}>
                NIfTI 헤더·차원 정보 표시, 슬라이스 인덱스 이동 등 UI 요구가
                포함됩니다.
              </li>
              <li className={dashLi}>
                3D 뷰어는 볼륨 로딩·렌더링 동작과 사용자 조작(회전·확대 등)에
                대한 요구를 함께 정리했습니다.
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  )
}
