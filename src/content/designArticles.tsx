import { SectionImage } from '../components/doc/SectionImage'
import { DESIGN_IMAGES } from '../data/designImages'
import {
  dashLi,
  dashUl,
  midP,
  midWrap,
  ol1,
  strong1,
} from './docHierarchy'

export function ScreenDesignUploadArticle() {
  return (
    <div className="max-w-none space-y-8">
      <p className="mb-2 text-[15px] leading-relaxed text-slate-600 sm:text-base">
        전체 화면 설계 8건 중,{' '}
        <strong className="font-semibold text-slate-900">
          NIfTI 업로드 페이지
        </strong>
        에 해당하는 와이어프레임입니다.
      </p>

      <SectionImage
        src={DESIGN_IMAGES.screenUpload}
        alt="MedNeuro 파일 업로드 화면 설계"
        caption="화면 설계서 — 업로드"
      />
      <ol className={ol1}>
        <li>
          <span className={strong1}>입력·피드백</span>
          <div className={midWrap}>
            <p className={midP}>
              파일 선택 후 검증 중·완료·실패 상태가 상단 진행 표시와 함께
              노출되도록 했습니다.
            </p>
            <ul className={dashUl}>
              <li className={dashLi}>
                지원 확장자·최대 용량 안내는 업로드 전에 항상 보이게 했습니다.
              </li>
            </ul>
          </div>
        </li>
        <li>
          <span className={strong1}>다음 단계 연결</span>
          <div className={midWrap}>
            <p className={midP}>
              업로드가 끝나면 2D 뷰어로 이동하는 주 버튼과, 세션을 유지한 채
              목록으로 돌아가는 보조 동선을 구분했습니다.
            </p>
          </div>
        </li>
      </ol>
    </div>
  )
}

export function ScreenDesign2dArticle() {
  return (
    <div className="max-w-none space-y-8">
      <p className="mb-2 text-[15px] leading-relaxed text-slate-600 sm:text-base">
        <strong className="font-semibold text-slate-900">2D 분석(슬라이스)</strong>{' '}
        화면으로, 축 방향 전환·슬라이스 인덱스 등이 한 레이아웃에 들어가도록 했습니다.
      </p>

      <SectionImage
        src={DESIGN_IMAGES.screen2d}
        alt="MedNeuro 2D 분석 화면 설계"
        caption="화면 설계서 — 2D 분석"
      />
      <ol className={ol1}>
        <li>
          <span className={strong1}>뷰포트·컨트롤</span>
          <div className={midWrap}>
            <p className={midP}>
              중앙에 단일 슬라이스 뷰, 하단 또는 측면에 슬라이더·축 선택을 두어
              손목 피로를 줄였습니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>3D·업로드와의 정합</span>
          <div className={midWrap}>
            <p className={midP}>
              동일 헤더·네비게이션을 유지해 업로드 → 2D → 3D 전환이 자연스럽게
              이어지도록 설계했습니다.
            </p>
          </div>
        </li>
      </ol>
    </div>
  )
}

export function DbErdArticle() {
  return (
    <div className="max-w-none space-y-8">
      <SectionImage
        src={DESIGN_IMAGES.erd}
        alt="MedNeuro 논리 ERD"
        caption="논리 ERD (발표 자료)"
      />

      <div className="space-y-4 text-[15px] leading-relaxed text-slate-600 sm:text-base">
        <p>
          위 다이어그램은 MedNeuro 서비스 기준{' '}
          <strong className="font-medium text-slate-800">논리 데이터 모델</strong>
          을 정리한 것입니다. 회원·세션·NIfTI 업로드·영상 메타데이터·2D/3D
          뷰 상태·병변 마커·진단 코멘트 등이 한 흐름으로 연결되도록 엔티티와
          관계를 설계했습니다.
        </p>
        <p>
          실제 운영 시에는 Oracle 등 선택한 DB의 물리 스키마(DDL)·인덱스·제약
          조건에 맞춰 컬럼 타입·이름을 조정했으며, 대용량 바이너리(.nii 등)는
          DB에는 경로·메타만 두고 파일은 스토리지에 두는 구조를 전제로 했습니다.
        </p>
        <p>
          마커와 코멘트는 동일 슬라이스·볼륨 좌표를 참조해 감사·재현 가능한
          협진 기록을 남길 수 있게 FK로 묶었고, 업로드 세션 단위로 작업 이력을
          추적할 수 있게 했습니다.
        </p>
      </div>

      <ol className={ol1}>
        <li>
          <span className={strong1}>핵심 엔티티</span>
          <div className={midWrap}>
            <p className={midP}>
              사용자, 분석 작업(세션), 업로드 파일, 영상 메타·슬라이스 정보,
              3D 메쉬/오브젝트 참조, 마커·코멘트로 구성됩니다.
            </p>
            <ul className={dashUl}>
              <li className={dashLi}>
                회원은 여러 분석 작업을 가질 수 있고, 작업마다 하나 이상의
                NIfTI 파일이 연결됩니다.
              </li>
              <li className={dashLi}>
                마커·코멘트는 특정 작업·파일·뷰 모드(2D 축/슬라이스 또는 3D
                좌표)에 종속되도록 설계했습니다.
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  )
}
