import React from "react";

const ProjectList = () => {

  const task = [
    {
      id: "dc0a2591-4b0d-4b84-88c7-c79b246ce9e6",
      project_id: "8be94ffc-553d-4787-8ee5-8fb764b8aed0",
      task_name: "metus",
      description: "Balkan nephropathy",
      work_hour_required: 70,
      status: "Complete",
      priority: "medium",
      assignee_id: "3eeaee38-b78c-4c19-b0a1-b04cae64f84d",
      complete: false,
      assignee_dates: "1/10/2023",
      completed_dates: "7/22/2023",
    },
    {
      id: "bc3262b3-6010-4f3d-ae93-1b8aab403899",
      project_id: "53960823-85c2-4139-8e94-b3cab1f5bd0c",
      task_name: "placerat ante",
      description:
        "Legal intervnt w injury by rubr bulet, bystand inj, sequela",
      work_hour_required: 77,
      status: "Working",
      priority: "high",
      assignee_id: "e652c4a4-1abf-4ec3-9f64-4dd17b18f9b3",
      complete: true,
      assignee_dates: "6/2/2023",
      completed_dates: "12/25/2022",
    },
    {
      id: "b5a8bc73-9aac-4d78-a744-a7e41ce584fd",
      project_id: "3c146c5f-26ea-4c7f-8435-e11cc8a5c9a3",
      task_name: "platea dictumst maecenas ut",
      description:
        "Unsp open wound of abd wall, periumb rgn w/o penet perit cav",
      work_hour_required: 77,
      status: "On track",
      priority: "medium",
      assignee_id: "621c419e-ee60-4a02-8e25-b8cd8ba00321",
      complete: true,
      assignee_dates: "8/10/2023",
      completed_dates: "10/17/2023",
    },
    {
      id: "ba6d481e-1c1b-4750-a2ed-667caed67f50",
      project_id: "802d08d1-40d7-4d63-8eff-d5e218848a11",
      task_name: "libero rutrum ac",
      description: "Nondisp commnt fx shaft of humer, r arm, 7thK",
      work_hour_required: 5,
      status: "Pending",
      priority: "medium",
      assignee_id: "04c7a81d-bc20-47b5-861e-c64ff50f0492",
      complete: false,
      assignee_dates: "5/23/2023",
      completed_dates: "12/5/2023",
    },
    {
      id: "49507da2-1936-4a1c-9b33-fd6e98dcb4cd",
      project_id: "54831185-e1fd-44e0-8b06-49adde51bdfe",
      task_name: "justo",
      description: "Nondisp oblique fx shaft of humerus, left arm, sequela",
      work_hour_required: 91,
      status: "Off track",
      priority: "medium",
      assignee_id: "804e5683-176f-45ff-8ec2-03ea24d52587",
      complete: true,
      assignee_dates: "11/11/2023",
      completed_dates: "10/2/2023",
    },
    {
      id: "40dc114a-2546-472a-b3f4-393f9af013a6",
      project_id: "136cea4c-01ac-45d0-80b2-9705a5a5c05d",
      task_name: "in leo",
      description:
        "Age-rel osteopor w current path fracture, l humerus, sequela",
      work_hour_required: 9,
      status: "Off track",
      priority: "low",
      assignee_id: "8bb2cf1d-8b02-423e-839a-4fb73d64f231",
      complete: true,
      assignee_dates: "11/6/2023",
      completed_dates: "12/8/2023",
    },
    {
      id: "8b20860f-528d-4008-9923-1c87c997c5e4",
      project_id: "010568e6-47c3-46a5-a594-163eaf797eac",
      task_name: "ut suscipit a",
      description: "Leptospirosis, unspecified",
      work_hour_required: 88,
      status: "Off track",
      priority: "low",
      assignee_id: "989d0a0d-b787-4a4e-a548-95881ae22ccd",
      complete: false,
      assignee_dates: "12/19/2022",
      completed_dates: "12/11/2023",
    },
    {
      id: "9c102eed-b652-4550-84eb-744c91a68f97",
      project_id: "53f115b9-6f9c-4750-8643-17b2b4e208fc",
      task_name: "neque vestibulum",
      description: "Poisn by oth agents aff the cardiovasc sys, undet, sequela",
      work_hour_required: 63,
      status: "Complete",
      priority: "low",
      assignee_id: "dc1b4d96-e711-46d5-9c4a-dadea765a5ee",
      complete: false,
      assignee_dates: "6/11/2023",
      completed_dates: "6/14/2023",
    },
    {
      id: "f8e4d58c-53f4-4d57-a7d7-49ac43f3d131",
      project_id: "4e242065-2927-4dbd-9574-683099172374",
      task_name: "justo in hac habitasse",
      description:
        "Non-pressure chronic ulcer of left calf w fat layer exposed",
      work_hour_required: 82,
      status: "Working",
      priority: "medium",
      assignee_id: "aeba570f-d70a-41b9-bd95-e16187b36f24",
      complete: false,
      assignee_dates: "10/11/2023",
      completed_dates: "7/20/2023",
    },
    {
      id: "dfce2e31-4daa-47c1-8891-bbd627aa366e",
      project_id: "d4d97641-bb0b-49a4-8ab7-7b32e1f53e77",
      task_name: "aenean fermentum donec ut mauris",
      description:
        "Asphyxiation due to plastic bag, assault, initial encounter",
      work_hour_required: 56,
      status: "Pending",
      priority: "medium",
      assignee_id: "b6cc46b9-cbe9-4516-9f9b-733847bb7ccd",
      complete: true,
      assignee_dates: "8/29/2023",
      completed_dates: "4/11/2023",
    },
    {
      id: "4afa748c-47e6-40fc-984a-decbfc1a77a5",
      project_id: "18f67f67-25f9-4473-a5a1-de61f3e59695",
      task_name: "placerat ante nulla justo aliquam",
      description:
        "Sublux of proximal interphaln joint of l mid finger, sequela",
      work_hour_required: 62,
      status: "Pending",
      priority: "high",
      assignee_id: "fd91f367-82c5-440b-b569-4910f8def17f",
      complete: true,
      assignee_dates: "11/12/2023",
      completed_dates: "4/19/2023",
    },
    {
      id: "b2dafaa6-dce2-4bad-a556-8204dc6cb863",
      project_id: "b0c284a5-9709-4980-8ed4-893989434a0a",
      task_name: "vel dapibus at diam",
      description: "Insect bite (nonvenomous) of breast, right breast, subs",
      work_hour_required: 10,
      status: "Complete",
      priority: "high",
      assignee_id: "6630152f-8503-4781-a4db-0119446b74f3",
      complete: true,
      assignee_dates: "5/21/2023",
      completed_dates: "9/14/2023",
    },
    {
      id: "d8b7cd7e-83be-44c2-b664-05d4d6fcd202",
      project_id: "b9e70364-fe8a-4179-a433-ca5bf81d7329",
      task_name: "suspendisse potenti nullam",
      description: "Other congenital malformations of vulva",
      work_hour_required: 75,
      status: "On track",
      priority: "low",
      assignee_id: "760d7892-a529-47fb-a38a-e1a5d0cab0ca",
      complete: false,
      assignee_dates: "8/21/2023",
      completed_dates: "7/27/2023",
    },
    {
      id: "c9a004f0-48a1-4262-b144-1f2626553777",
      project_id: "505a0b80-efb4-43c6-b6b9-8b91be3f0e23",
      task_name: "curabitur in libero",
      description: "Ped on foot injured in clsn w rail trn/veh in traf, subs",
      work_hour_required: 33,
      status: "Working",
      priority: "low",
      assignee_id: "d7d276b1-732d-46fa-b151-c836febfeff0",
      complete: false,
      assignee_dates: "4/28/2023",
      completed_dates: "3/16/2023",
    },
    {
      id: "b5d69f88-59b6-40d5-87ea-671275df4acd",
      project_id: "732afb21-b67f-4cd8-8fe1-8bda7e163928",
      task_name: "orci luctus et ultrices",
      description: "Oth enterovirus as the cause of diseases classd elswhr",
      work_hour_required: 2,
      status: "On track",
      priority: "low",
      assignee_id: "728463ac-af8c-4726-91e8-03a5a8d5ddf4",
      complete: true,
      assignee_dates: "2/17/2023",
      completed_dates: "8/21/2023",
    },
    {
      id: "0012576d-83bd-429f-adb0-aeeb655095b0",
      project_id: "cbed6efa-8e5b-419c-ae59-2dbfbec8f65f",
      task_name: "amet nulla quisque arcu libero",
      description:
        "Drown due to being washed overboard from inflatbl crft, init",
      work_hour_required: 94,
      status: "Complete",
      priority: "medium",
      assignee_id: "0e33cc80-5d60-409a-9813-4fcc14360ed2",
      complete: true,
      assignee_dates: "1/17/2023",
      completed_dates: "3/7/2023",
    },
    {
      id: "678f2a53-c52a-409b-9213-3e8131e13336",
      project_id: "d1f658df-83f8-4778-9ff3-c3f55f6686ec",
      task_name: "rhoncus sed",
      description: "Disp fx of greater tuberosity of l humer, 7thG",
      work_hour_required: 99,
      status: "Pending",
      priority: "high",
      assignee_id: "05ee9d8a-0e03-4df4-997a-e895349a9810",
      complete: false,
      assignee_dates: "8/22/2023",
      completed_dates: "11/7/2023",
    },
    {
      id: "a0a80a97-cb3e-4637-96cd-54afcf1b25dd",
      project_id: "643e0cf4-fd72-46b1-854a-b537d841e578",
      task_name: "libero",
      description: "Other specified inflammatory liver diseases",
      work_hour_required: 68,
      status: "On track",
      priority: "medium",
      assignee_id: "27f4c957-2766-40b8-a2e1-7ed7eec93516",
      complete: true,
      assignee_dates: "5/23/2023",
      completed_dates: "4/29/2023",
    },
    {
      id: "7d864188-b4a6-4af0-ab5e-6f6b05eeb6a7",
      project_id: "434ac8ad-d81f-4b66-b8dd-c30356e50b9d",
      task_name: "id nisl venenatis",
      description:
        "Disp fx of med phalanx of l lit fngr, subs for fx w nonunion",
      work_hour_required: 59,
      status: "Pending",
      priority: "high",
      assignee_id: "3679ecef-65ea-424c-a1e8-6d18bf4a4768",
      complete: false,
      assignee_dates: "1/1/2023",
      completed_dates: "10/15/2023",
    },
    {
      id: "d3c5c8a1-6624-4980-9537-5041887dd382",
      project_id: "4d1d8203-df44-48eb-87db-4bb753897216",
      task_name: "sit amet eleifend",
      description:
        "Strain extensor musc/fasc/tend and unsp finger at wrs/hnd lv",
      work_hour_required: 39,
      status: "On track",
      priority: "low",
      assignee_id: "9f00bcd8-0458-4dd5-9201-9a5380f6a8fd",
      complete: true,
      assignee_dates: "10/11/2023",
      completed_dates: "10/9/2023",
    },
  ];


  return (
    <>
      <section class="container mx-auto px-6 pb-2 font-mono">
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div class="w-full overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 uppercase border-b border-gray-600">
                  <th class="px-4 py-3">Task Name</th>
                  <th class="px-4 py-3 w-1/4">Assignee</th>
                  <th class="px-4 py-3 w-1/12">Status</th>
                  <th class="px-4 py-3 w-1/12">Priority</th>
                  <th class="px-4 py-3 w-1/6">Due Date</th>
                </tr>
              </thead>
              <tbody class="">
                {task.map((task) => (
                  <tr class="text-gray-700">
                  <td class="px-4 py-2 border">
                    <div class="flex items-center text-sm">
                      <div class="relative w-6 h-6 mr-3 rounded-full md:block">
                        <img
                          class="object-cover w-full h-full rounded-full"
                          src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          class="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p class="font-semibold text-black whitespace-nowrap">{task.task_name}</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-2 text-ms font-semibold border">
                    <div class="flex items-center text-sm">
                      <div class="flex">
                        <div class="relative w-4 h-4 rounded-full md:block">
                          <img
                            class="object-cover w-full h-full rounded-full"
                            src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            class="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div class="relative w-4 h-4 rounded-full md:block">
                          <img
                            class="object-cover w-full h-full rounded-full"
                            src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            class="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                      </div>

                      <div class="ml-2">
                        <span>Panha</span>
                        <span>/</span>
                        <span>Heng</span>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-2 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                      {task.status}
                    </span>
                  </td>
                  <td class="px-4 py-2 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                      {task.priority}
                    </span>
                  </td>
                  <td class="px-4 py-2 text-sm border">{task.assignee_dates}</td>
                </tr>
                ))
                }



                <tr class="text-gray-700">
                  <td class="px-4 py-2 border">
                    <div class="flex items-center text-sm">
                      <div class="relative w-6 h-6 mr-3 rounded-full md:block">
                        <img
                          class="object-cover w-full h-full rounded-full"
                          src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          class="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p class="font-semibold text-black">Sufyan</p>
                        <p class="text-xs text-gray-600">Developer</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-2 text-ms font-semibold border">
                    <div class="flex items-center text-sm">
                      <div class="flex">
                        <div class="relative w-4 h-4 rounded-full md:block">
                          <img
                            class="object-cover w-full h-full rounded-full"
                            src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            class="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div class="relative w-4 h-4 rounded-full md:block">
                          <img
                            class="object-cover w-full h-full rounded-full"
                            src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            class="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                      </div>

                      <div class="ml-2">
                        <span>Panha</span>
                        <span>/</span>
                        <span>Heng</span>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-2 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                      {" "}
                      Acceptable{" "}
                    </span>
                  </td>
                  <td class="px-4 py-2 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                      {" "}
                      High{" "}
                    </span>
                  </td>
                  <td class="px-4 py-2 text-sm border">6/4/2000</td>
                </tr>

                <tr class="text-gray-700">
                  <td class="px-4 py-2 border">
                    <div class="flex items-center text-sm">
                      <div class="relative w-6 h-6 mr-3 rounded-full md:block">
                        <img
                          class="object-cover w-full h-full rounded-full"
                          src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          class="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p class="font-semibold text-black">Sufyan</p>
                        <p class="text-xs text-gray-600">Developer</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-2 text-ms font-semibold border">
                    <div class="flex items-center text-sm">
                      <div class="flex">
                        <div class="relative w-4 h-4 rounded-full md:block">
                          <img
                            class="object-cover w-full h-full rounded-full"
                            src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            class="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div class="relative w-4 h-4 rounded-full md:block">
                          <img
                            class="object-cover w-full h-full rounded-full"
                            src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            class="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                      </div>

                      <div class="ml-2">
                        <span>Panha</span>
                        <span>/</span>
                        <span>Heng</span>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-2 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                      Acceptable
                    </span>
                  </td>
                  <td class="px-4 py-2 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                      High
                    </span>
                  </td>
                  <td class="px-4 py-2 text-sm border">6/4/2000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectList;